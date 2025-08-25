const editor = document.getElementById('editor');
const clearButton = document.getElementById('button');

editor.value = localStorage.getItem('editorText') || '';

editor.addEventListener('input', () => {
    localStorage.setItem('editorText', editor.value);
});

clearButton.addEventListener("click", () => {
    editor.value = "";
    localStorage.removeItem("editorText")
})