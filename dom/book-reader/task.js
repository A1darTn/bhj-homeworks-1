const book = document.getElementById("book")

// Обработка шрифта
const fontSizeLinks = document.querySelectorAll(".book__control_font-size .font-size");
fontSizeLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        fontSizeLinks.forEach(item => item.classList.remove("font-size_active"));

        link.classList.add("font-size_active");

        book.classList.remove('book_fs-big', 'book_fs-small');

        const size = link.dataset.size;

        if (size) {
            book.classList.add(`book_fs-${size}`);
        }
    });
});

// Обработка цвета текста
const textColorLinks = document.querySelectorAll('.book__control_color .color');
textColorLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        textColorLinks.forEach(item => item.classList.remove("color_active"));
        
        link.classList.add("color_active");
        book.classList.remove(
            'book_color-black',
            'book_color-gray',
            'book_color-whitesmoke'
        );
        const color = link.dataset.textColor;
        book.classList.add(`book_color-${color}`)
    });
});

// Обработка цвета фона
const bgColorLinks = document.querySelectorAll(".book__control_background .color");
bgColorLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        bgColorLinks.forEach(item => item.classList.remove("color_active"));

        link.classList.add("color_active");

        book.classList.remove(
            'book_bg-black',
            'book_bg-gray',
            'book_bg-white'
      );

      const color = link.dataset.bgColor;
      book.classList.add(`book_bg-${color}`);
    })
})