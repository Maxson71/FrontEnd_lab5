// Завдання 1: Валідація форми
function validateForm() {
    // Отримання введених значень
    const fullname = document.getElementById("fullname").value;
    const birthdate = document.getElementById("birthdate").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const telegram = document.getElementById("telegram").value;

    // Регулярні вирази для перевірки
    const fullnameRegex = /^[А-ЯІЇЄҐа-яіїєґ/-]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/u;
    const birthdateRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressRegex = /^м\. [А-ЯІЇЄҐа-яіїєґ\s]+$/u;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
    const telegramRegex = /^@[A-Za-z0-9_]{5,}$/;

    // Перевірка та виділення полів з помилками
    const fields = [
        { value: fullname, regex: fullnameRegex, element: document.getElementById("fullname") },
        { value: birthdate, regex: birthdateRegex, element: document.getElementById("birthdate") },
        { value: address, regex: addressRegex, element: document.getElementById("address") },
        { value: email, regex: emailRegex, element: document.getElementById("email") },
        { value: telegram, regex: telegramRegex, element: document.getElementById("telegram") }
    ];

    let allValid = true;
    fields.forEach(field => {
        if (!field.regex.test(field.value)) {
            field.element.classList.add("error");
            allValid = false;
        } else {
            field.element.classList.remove("error");
        }
    });

    // Виведення інформації
    if (allValid) {
        alert(`ПІБ: ${fullname}\nДата народження: ${birthdate}\nАдреса: ${address}\nEmail: ${email}\nTelegram: ${telegram}`);
    }
}

// Завдання 2: Таблиця 6х6
document.addEventListener("DOMContentLoaded", () => {
        const table = document.getElementById("table");
        const selectedColorInput = document.getElementById("selectedColor");

        let count = 1;
        for (let row = 0; row < 6; row++) {
            const tr = document.createElement("tr");
            for (let col = 0; col < 6; col++) {
                const td = document.createElement("td");
                td.textContent = count;
                td.dataset.number = count;
                tr.appendChild(td);
                count++;
            }
            table.appendChild(tr);
        }

        function getRandomColor() {
            let color = "#";
            const letters = "0123456789ABCDEF";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        table.addEventListener("mouseover", (e) => {
            if (e.target.tagName === "TD" && e.target.dataset.number == 1) {
                e.target.style.backgroundColor = getRandomColor();
            }
        });

        table.addEventListener("click", (e) => {
            if (e.target.tagName === "TD" && e.target.dataset.number == 1) {
                e.target.style.backgroundColor = selectedColorInput.value;
            }
        });

        table.addEventListener("dblclick", (e) => {
            if (e.target.tagName === "TD" && e.target.dataset.number == 1) {
                const row = table.querySelector("tr");
                for (let k = 0; k < 6; k++) {
                    row.children[k].style.backgroundColor =  selectedColorInput.value;
                }
            }
        });
});
