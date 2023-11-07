let buttonClick = document.getElementById('buttonClick');
let res = document.getElementById('result');

buttonClick.addEventListener('mousedown', function () {
  res.innerHTML += 'I was pressed!<br> ';
});


buttonClick.addEventListener('mouseenter', function () {
  res.innerHTML += ' Mouse on me <br>';
});


buttonClick.addEventListener('mouseleave', function () {
  res.innerHTML += 'Mouse is not on me! <br> ';
});