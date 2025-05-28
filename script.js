const people = [
    { id: 1, name: "Иван Танев", age: 25, city: "Плевен" },
    { id: 2, name: "Гергана Тодорова", age: 31, city: "Пловдив" },
    { id: 3, name: "Спас Георгиев", age: 37, city: "Кърджали" },
    { id: 4, name: "Таня Стоянова", age: 23, city: "Бургас" },
    { id: 5, name: "Елисавета Маринова", age: 43, city: "София" },
];

function searchPerson() {
    const input = document.getElementById("personId");
    const result = document.getElementById("result");
    const id = Number(input.value);

    if (!id) {
        result.textContent = "Моля, въведи валидно ID!";
        return;
    }

    const person = people.find(p => p.id === id);

    if (person) {
        result.textContent = `ID: ${person.id}\nИме: ${person.name}\nВъзраст: ${person.age}\nГрад: ${person.city}`;
    } else {
        result.textContent = "Няма човек с това ID.";
    }
}
