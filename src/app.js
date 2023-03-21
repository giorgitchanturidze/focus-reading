// chrome.tabs.executeScript({
//   code: `
  document.addEventListener('mouseup', function() {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    
    if (selectedText) {
      const range = selection.getRangeAt(0);
      const newNode = document.createElement('div');
      newNode.appendChild(range.cloneContents());
      const selectedHtml = newNode.innerHTML;
      console.log(selectedHtml);
      document.getElementById('selected-text').innerHTML = selectedHtml;
    }
  });
  // `
  // });