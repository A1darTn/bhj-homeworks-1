const timerElement = document.getElementById('timer');
const downloadLink = document.getElementById('downloadLink');


const [hours, minutes, seconds] = timerElement.textContent.split(':').map(Number);


let timeLeft = hours * 3600 + minutes * 60 + seconds;

// Функция для запуска таймера
function startTimer() {
    for (let h = hours; h >= 0; h--) {
        const startM = (h === hours) ? minutes : 59;

        // Цикл для минут
        for (let m = startM; m >= 0; m--) {
            const startS = (h === hours && m === minutes) ? seconds : 59;

            for (let s = startS; s >= 0; s--) {
                const formattedH = h.toString().padStart(2, '0');
                const formattedM = m.toString().padStart(2, '0');
                const formattedS = s.toString().padStart(2, '0');

                ((hh, mm, ss) => {
                    setTimeout(() => {

                        timerElement.textContent = `${hh}:${mm}:${ss}`;

                        if (hh === 0 && mm === 0 && ss === 0) {
                            alert('Вы победили в конкурсе!');
                            downloadLink.href = 'какой-то файл';
                            downloadLink.click();
                        }
                    }, (timeLeft - (h * 3600 + m * 60 + s)) * 1000);
                })(formattedH, formattedM, formattedS);
            }
        }
    }
}

// Запускаем таймер
startTimer();