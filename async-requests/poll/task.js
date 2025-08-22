const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest;

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        const json = JSON.parse(xhr.responseText);
        const pollId = json.id;
        const titleAnswer = json.data.title;
        const answers = json.data.answers;

        pollTitle.textContent = titleAnswer;

        answers.forEach((answer, index) => {
            const btnPollAnswer = `<button class="poll__answer" data-index="${index}">
                                    ${answer}
                                    </button>`;

            pollAnswers.insertAdjacentHTML("beforeend", btnPollAnswer)
        });
        pollAnswers.addEventListener('click', function (event) {
            if (event.target.classList.contains('poll__answer')) {
                const answerIndex = event.target.dataset.index;
                console.log(answerIndex)

                const xhrPost = new XMLHttpRequest;
                xhrPost.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
                xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                xhrPost.addEventListener("readystatechange", () => {
                    if (xhrPost.readyState === xhrPost.DONE) {
                        if (xhrPost.status === 201) {
                            const response = JSON.parse(xhrPost.responseText);
                            showResults(response.stat);
                            alert("Спасибо, ваш голос засчитан!");
                        } else {
                            alert("Ошибка");
                        }
                    }
                });
                xhrPost.send(`vote=${pollId}&answer=${answerIndex}`);
            }
        })
    }
})

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.send();

function showResults(statistics) {
    pollAnswers.innerHTML = "";

    const totalVotes = statistics.reduce((sum, item) => sum + item.votes, 0);

    statistics.forEach(item => {
        const percentage = totalVotes > 0 ? ((item.votes / totalVotes) * 100).toFixed(2) : 0;

        const answerElement = document.createElement("div");
        answerElement.className = 'poll__answer';
        answerElement.textContent = `${item.answer}: ${percentage}%`;
        pollAnswers.appendChild(answerElement);
    })
}