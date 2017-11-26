##Copy Button for Code Block

```html
<input type="text" id="input" />
<button id="copyBtn">Copy</button>
```

```javascript
document.getElementById("copyBtn").onclick = function() {
  document.execCommand('copy');
}
document.addEventListener('copy', function(e){
  var prnt = document.getElementById('input').value;	
  e.clipboardData.setData('text/plain', prnt);
  e.preventDefault(); // default behaviour is to copy any selected text
});
document.addEventListener('paste', function(e){
  var cons = e.clipboardData.getData('text/plain');
  e.preventDefault(); // default behaviour is to copy any selected text
  console.log(cons);
});
```
