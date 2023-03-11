const observer = new IntersectionObserver(entries => {
  //console.log(entries)
  entries.forEach(entry => {
    const square = entry.target.parentNode.querySelector('.image');

    if (entry.isIntersecting) {
      square.classList.add('slide-animation');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('slide-animation');
  });
});

document.querySelectorAll('.body').forEach(elem => observer.observe(elem));

function openFullscreen() {
  let docElm = document.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  }

}

document.querySelector(".fullscreen-icon").addEventListener("click", ev => {
  openFullscreen();
})

document.documentElement.addEventListener("fullscreenchange", e => {
  document.querySelector(".fullscreen-icon").hidden = !!document.fullscreenElement;
})
