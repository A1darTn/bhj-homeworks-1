const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) return;

    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file);

    xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            const percentComplete = (e.loaded / e.total).toFixed(2);
            progress.value = percentComplete;
        }
    });

    xhr.addEventListener('load', () => {
        if (xhr.status === 201) {
            alert("Файл успешно загружен")
        } else {
            alert("Ошибка загрузки файла")
        }
    });

    xhr.open('POST', form.action);
    xhr.send(formData);
});
