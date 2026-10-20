
const search = document.getElementById("search");
const cards = document.querySelectorAll(".blog-card");
const noResult = document.getElementById("noResult");

search.addEventListener("input", function () {
    let found = 0;

    cards.forEach(function (card) {
        const text = card.innerText.toLowerCase();

        if (text.includes(search.value.toLowerCase())) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    noResult.hidden = found !== 0;
});

const buttons = document.querySelectorAll(".read-btn");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const title = button.parentElement.querySelector("h3").innerText;
        const description = button.parentElement.querySelector("p").innerText;

        alert(title + "\n\n" + description);
    });
});
