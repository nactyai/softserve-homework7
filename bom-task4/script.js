const sel = document.querySelector('#sel');
const button = document.getElementById('button');


button.addEventListener('click', function () {
  let removeOption = sel.options[sel.selectedIndex];

  if ((removeOption !== null) || (removeOption !== undefined)) {
    removeOption.remove();
  }
});
