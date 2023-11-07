let button = document.getElementById('button');
let p = document.getElementById('text');
let styleParams = [
  'color: orange;',
  'font-size: 20px;',
  'font-family: "Comic Sans MS";'
]


button.addEventListener('click', function () {
  p.style = styleParams.join(' ');
});