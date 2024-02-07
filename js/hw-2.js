let userName = prompt("Будь ласка, введіть своє ім'я:");

if (userName && userName) {
    alert("Привіт " + userName);

} else {
    alert("Введіть, будь ласка, ваше ім'я.");
}


let confirmationOfAction = confirm("Ви впевнені, що хочете підтвердити дію?");

if (confirmationOfAction) {
    alert("Дякую за підтвердження!");

} else {
    alert("Дію відмінено!");
}



alert("Увага! Інформація може не зберегтись.");

let closeWebsite = confirm("Підтвердіть, будь ласка, що ви розумієте наслідки.");

if (closeWebsite) {
    alert("Дякую за підтвердження!");

} else {
    alert("Дію відмінено!");
}