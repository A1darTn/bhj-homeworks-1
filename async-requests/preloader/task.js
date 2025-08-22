const imgLoader = document.querySelector(".loader");
const listItems = document.querySelector("#items")
const xhr = new XMLHttpRequest;

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
        imgLoader.classList.remove("loader_active");

        const json = JSON.parse(xhr.responseText);
        const valute = json.response.Valute

        Object.keys(valute).forEach(el => {
            const itemCode = valute[el].CharCode;
            const itemValue = valute[el].Value;
            const itemCurrency = valute[el].Name;

            const item = document.createElement("div");
            item.className = "item";

            item.innerHTML = `<div class="item__code">${itemCode}</div>
                              <div class="item__value">${itemValue}</div>
                              <div class="item__currency">${itemCurrency}</div>`;

            listItems.appendChild(item)
        })
    }
})

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

xhr.send()