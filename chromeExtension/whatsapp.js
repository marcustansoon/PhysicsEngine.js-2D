var s = document.createElement('script');
s.src = 'https://raw.githack.com/marcustansoon/PhysicsEngine.js-2D/master/chromeExtension/wabot.js';
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
