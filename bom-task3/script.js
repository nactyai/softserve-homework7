let dbClick = document.getElementById('dbClick');

dbClick.addEventListener('dblclick', function () {
  document.body.style.backgroundColor = 'orange';
});

let buttonClick = document.getElementById('buttonClick');

buttonClick.addEventListener('click', function () {
  document.body.style.backgroundColor = 'blue';
});


let pressClick = document.getElementById('pressClick');

pressClick.addEventListener('mousedown', function () {
  document.body.style.backgroundColor = 'brown';

  pressClick.addEventListener('mouseup', function () {
    document.body.style.backgroundColor = 'white';

  });
});

let hoverLink = document.getElementById('hoverLink');

hoverLink.addEventListener('mouseenter', function () {
  document.body.style.backgroundColor = 'yellow';

  hoverLink.addEventListener('mouseleave', function () {
    document.body.style.backgroundColor = 'white';

  });
});