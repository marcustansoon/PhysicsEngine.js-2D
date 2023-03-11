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
  let elem = document.body;
	if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}
setTimeout(()=> {
confirm('Go fullscreen ?') && openFullscreen();
}, 2000)
