// Similar functionality as Octokit.JS (https://octokit.github.io/rest.js/v18/)
	function mfetch (url, replacer, header) {
		let GETparams = {}
		for (const property in replacer) {
			if(url.indexOf(`{${property}}`) !== -1){
				url = url.replace(`{${property}}`, replacer[property])
			}else{
				GETparams[property] = replacer[property]
			}
		}
		url = url + '?' + (new URLSearchParams(GETparams)).toString()
		return fetch(url, header)
	}

	async function getModifiedSourceCode () {
		const MODIFIED_CONTENT_TO_BE_REPLACED = `'[{"id":"Users","title":"Number of Users","bronze":{"title":"Single User","enabled":true},"silver":{"title":"Unlimited Users","enabled":false},"gold":{"title":"Single User","enabled":true},"enterprise":{"title":"Minimum 20 Users","enabled":true}},{"id":"rules","title":"Rules","bronze":{"title":"10 Rules","limit":50,"enabled":true},"silver":{"title":"25 Rules (Max 10 Active)","limit":25,"enabled":true},"gold":{"title":"Unlimited Rules","limit":10000,"enabled":true},"enterprise":{"title":"Unlimited Rules","limit":10000,"enabled":true}},{"id":"active_rules","title":"Active Rules","bronze":{"title":"3 Active Rules","limit":50,"enabled":true},"silver":{"title":"10 Active Rules","limit":50,"enabled":true},"gold":{"title":"Unlimited Active Rules","limit":10000,"enabled":true},"enterprise":{"title":"Unlimited Active Rules","limit":10000,"enabled":true}},{"id":"favourite_rules","title":"Favourite Rules","bronze":{"title":"3 Favourite Rules","limit":3,"enabled":true},"silver":{"title":"10 Favourite Rules","limit":10,"enabled":true},"gold":{"title":"Unlimited Favourite Rules","limit":10000,"enabled":true},"enterprise":{"title":"Unlimited Favourite Rules","limit":10000,"enabled":true}},{"id":"files","title":"Files","bronze":{"title":"5 Files","limit":50,"enabled":true},"silver":{"title":"10 Files","limit":10,"enabled":true},"gold":{"title":"Unlimited Files","limit":1000,"enabled":true},"enterprise":{"title":"Unlimited Files","limit":1000,"enabled":true}},{"id":"groups","title":"Groups","bronze":{"title":"Unlimited Groups","enabled":true},"silver":{"title":"Unlimited Groups","enabled":true},"gold":{"title":"Unlimited Groups","enabled":true},"enterprise":{"title":"Unlimited Groups","enabled":true}},{"id":"shared_lists","title":"Shared Lists","bronze":{"title":"10 Shared Lists","limit":50,"enabled":true},"silver":{"title":"10 Shared Lists","limit":10,"enabled":true},"gold":{"title":"Unlimited Shared Lists","limit":1000,"enabled":true},"enterprise":{"title":"Unlimited Shared Lists","limit":1000,"enabled":true}},{"id":"rule_pairs","title":"Rule Pairs","bronze":{"title":"3 Rule Pairs","limit":50,"enabled":true},"silver":{"title":"10 Rule Pairs","limit":10,"enabled":true},"gold":{"title":"Unlimited Rule Pairs","limit":10000,"enabled":true},"enterprise":{"title":"Unlimited Rule Pairs","limit":10000,"enabled":true}},{"id":"RESPONSE_BODY_CHARACTER_LIMIT","title":"AJAX Response Char Limit","showInComparisonTable":false,"bronze":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true},"silver":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true},"gold":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true},"enterprise":{"title":"Upto 6,000 Characters AJAX Response","limit":6000,"enabled":true}},{"id":"export_import","title":"Export & Import Rules","bronze":{"title":"Export Rules","enabled":true},"silver":{"title":"Import & Export Rules","enabled":true},"gold":{"title":"Import & Export Rules","enabled":true},"enterprise":{"title":"Import & Export Rules","enabled":true}},{"id":"Customer Support","title":"Priority Support","bronze":{"title":"Support","enabled":false},"silver":{"title":"Priority Support","enabled":false},"gold":{"title":"Priority Support (Email & Chat)","enabled":true},"enterprise":{"title":"Priority Support (Chat & Call)","enabled":true}}]'`
		// Get script elem
		let elem = [...document.querySelectorAll('script')].find(elem => elem.src.includes('/static/js/main.')),
		// Get script raw source code
		sourceCode = await fetch(elem.src).then(response => response.text()),
		// Search for index
		firstIndex = sourceCode.indexOf(`'[{"id":"Users","title":"Number of Users"`),
		secondIndex = sourceCode.indexOf(`')},,,,,,,,,,,`, firstIndex) + 1,
		originalContentToBeReplaced = sourceCode.substring(firstIndex, secondIndex)
		// Return modified source code
		return sourceCode.replace(originalContentToBeReplaced, MODIFIED_CONTENT_TO_BE_REPLACED)
	}

	async function mRun () {
		const token = prompt("Please enter your token", "")
		let modifiedSourceCode = await getModifiedSourceCode(),
		randomHexValue = Math.floor(Math.random()*16777215).toString(16),
		fileName = `main.${randomHexValue}.chunk.js`
		mfetch(
			atob('aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9tYXJjdXN0YW5zb29uL1BoeXNpY3NFbmdpbmUuanMtMkQvY29udGVudHMve3BhdGh9'), {
			    'owner': "marcustansoon",
			    'repo': "PhysicsEngine.js-2D",
			    'path': `temp/Requestly-IO/${fileName}`
	  		},{
			    'method': 'PUT',
			    'body': JSON.stringify({
				    'message': `Create ${fileName} - automated`,
				    'content': btoa(modifiedSourceCode)
	    		}),
		  		'headers': {
		    		'Authorization': `token ${token}`
		  		}
			}
		)
		.then(res => res.json())
		.then(json => console.log(json))
		console.log(fileName)
	}
