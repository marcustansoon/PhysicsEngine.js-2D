class RTCPeer {
    constructor(config) {
        this._peerConnection = new RTCPeerConnection(config);

        // Enable data channel
        this._enableDataChannel(false);

        // Bind event listeners
        this._bindRTCListeners();
    }

    _bindRTCListeners() {
        this._peerConnection.onconnectionstatechange = () => this._onConnectionStateChange();
        this._peerConnection.oniceconnectionstatechange = () => this._onIceConnectionStateChange();
        this._peerConnection.onicegatheringstatechange = () => this._onIceGatheringStateChange();
        this._peerConnection.onsignalingstatechange = () => this._onSignalingStateChange();
        this._peerConnection.onnegotiationneeded = () => this._onNegotiationNeeded();
        this._peerConnection.onicecandidate = (e) => this._onIceCandidate(e);

    }

    _onConnectionStateChange(e) {
        console.log('connectionState: ' + this._peerConnection.connectionState);
        switch (this._peerConnection.connectionState) {
            case "connected":
                // The connection has become fully connected
                break;
            case "disconnected":
            case "failed":
                // One or more transports has terminated unexpectedly or in an error
                break;
            case "closed":
                // The connection has been closed
                break;
        }
    }

    _onIceGatheringStateChange(){
        console.log('iceGatheringState: ' + this._peerConnection.iceGatheringState)
    }

    _onIceConnectionStateChange() {
        console.log('iceConnectionState: ' + this._peerConnection.iceConnectionState);
        // For more info, https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/iceConnectionState
        switch (this._peerConnection.iceConnectionState) {
            case "new":
                // The connection has become fully connected
                break;
            case "checking":
                // One or more transports has terminated unexpectedly or in an error
                break;
            case "connected":
                // One or more transports has terminated unexpectedly or in an error
                break;
            case "completed":
                // One or more transports has terminated unexpectedly or in an error
                break;
            case "failed":
                // The connection has been closed
                break;
            case "disconnected":
                // The connection has been closed
                break;
            case "closed":
                // The connection has been closed
                break;
        }
    }

    _onSignalingStateChange() {
        console.log('SignalingState: ' + this._peerConnection.signalingState);
        // For more info, https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/signalingState
        switch (this._peerConnection.signalingState) {
            case "stable":
                // ICE negotiation complete
                break;
            case "have-local-offer":
                break;
            case "have-remote-offer":
                break;
            case "have-local-pranswer":
                break;
            case "have-remote-pranswer":
                break;
            case "closed":
                break;
        }
    }

    _onNegotiationNeeded() {
        console.log('Negotiation needed');
    }

    _onIceCandidate(e) {
        if (!e.candidate) return;
        console.log('Sending ICE');
        this.signalingChannel.send({
            'iceCandidate': e.candidate,
            'to': this.peerID,
            'from': this.id
        });
    }

    _onReceivedICECandidate(iceCandidate) {
        console.log('Received ICE');
        this._peerConnection.addIceCandidate(new RTCIceCandidate(iceCandidate)).catch(this._onError);
    }

    _enableDataChannel(isCaller) {
        if (isCaller) {
            this._isCaller = true;
            this._dataChannel = this._peerConnection.createDataChannel('dataChannel');
            this._dataChannel.binaryType = 'arraybuffer';
            this._bindDataChannelListeners();
        }
        this._peerConnection.addEventListener('datachannel', event => {
            console.log('Received channel');
            this._dataChannel = event.channel;
            this._dataChannel.binaryType = 'arraybuffer';
            this._bindDataChannelListeners();
        });
    }

    _bindDataChannelListeners() {
        this._dataChannel.addEventListener('open', event => {
            console.log('DC opened');
        });
        this._dataChannel.addEventListener('close', event => {
            console.log('DC closed');
        });
        this._dataChannel.addEventListener('message', data => {
            console.log(data);
            this.dataChannelHandler && this.dataChannelHandler(data);
        });
    }

    set dataChannelHandler(fn){
        this._dataChannelHandler = fn;
    }

    get dataChannelHandler(){
        return this._dataChannelHandler;
    }

    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }

    set peerID(peerID) {
        this._peerID = peerID;
    }

    get peerID() {
        return this._peerID;
    }

    set signalingChannel(channel) {
        this._signalingChannel = channel;
    }

    get signalingChannel() {
        return this._signalingChannel;
    }

    // {'from':..., 'to':..., '...'}
    onServerMessage(data) {
        // Make sure the recipient is correct
        if(data.to !== this.id || data.from !== this.peerID) return;

        switch (true) {
            case 'offer' in data:
                this._onReceivedOffer(data.offer);
                break;
            case 'answer' in data:
                this._onReceivedAnswer(data.answer);
                break;
            case 'iceCandidate' in data:
                this._onReceivedICECandidate(data.iceCandidate);
                break;
        }
    }

    createAndSendOffer() {
        if (!this._dataChannel) this._enableDataChannel(true);
        this._peerConnection.createOffer().then(offer => this._onCreateOffer(offer)).then(() => this._sendOffer()).catch(this._onError);
    }

    _onCreateOffer(offer) {
        this._peerConnection.setLocalDescription(new RTCSessionDescription(offer));
    }

    _sendOffer() {
        console.log('Sending offer');
        this.signalingChannel.send({
            'from': this.id,
            'to': this.peerID,
            'offer': this._peerConnection.localDescription
        });
    }

    _onReceivedOffer(offer) {
        console.log('Received offer');
        this._peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
        this._peerConnection.createAnswer().then(answer => this._onCreateAnswer(answer)).then(() => this._sendAnswer()).catch(this._onError);
    }

    _onCreateAnswer(answer) {
        this._peerConnection.setLocalDescription(answer);
    }

    _sendAnswer() {
        console.log('Sending answer');
        this.signalingChannel.send({
            'from': this.id,
            'to': this.peerID,
            'answer': this._peerConnection.localDescription
        });
    }

    _onReceivedAnswer(answer) {
        console.log('Received answer');
        this._peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    }

    _onError(err) {
        console.error(err);
    }
}

class SignalingChannel {
    constructor(socketURL) {
        this._serverURL = socketURL;
    }

    connect() {
        // Connect to server
        this._signalingChannel = io(this._serverURL);

        this._signalingChannel.on('connect', () => console.log('connected'));

        this._signalingChannel.on('id', console.log);

        this._signalingChannel.on('message', (d) => this.messangeHandler(d));

        this._signalingChannel.on('newClient', console.log);

    }

    set messangeHandler(fn) {
        this._onMessageHandler = fn;
    }

    get messangeHandler() {
        return this._onMessageHandler;
    }

    send(data) {
        this._signalingChannel.emit('message', data);
    }
}
