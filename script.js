console.log('fake-3ds script start...');

let codeInputEl;

function emitResult(value) {
  const result = value === '00000' ? 'success' : 'fail';
  const message = JSON.stringify({MD: result, PaRes: result});
  console.log('emitResult', result);
  window.parent.postMessage(message, '*');
}

function enterCode() {
  codeInputEl.value = '00000';
}

function checkCode() {
  const {value} = codeInputEl;
  console.log('checkCode', value);
  if (value.length > 4) emitResult(value);
}

window.addEventListener('load', () => {
  const codeBtnEl = document.getElementById('code-btn');
  codeInputEl = document.getElementById('code-input');

  codeBtnEl?.addEventListener('click', enterCode);
  codeInputEl?.addEventListener('input', checkCode);
});
