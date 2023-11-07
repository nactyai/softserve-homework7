const win = document.getElementById('size');

window.addEventListener('load', () => {
  win.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
  window.addEventListener('resize', () => {
    win.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
  });
});


