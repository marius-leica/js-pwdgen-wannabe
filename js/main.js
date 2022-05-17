const userName = prompt("Qual'è il tuo nome?");
const userSurname = prompt("Qual'è il tuo cognome?");
const userColor = prompt("Qual'è il tuo colore preferito?");

const spanUserName = document.getElementById("user-name");
const spanUserPassword = document.getElementById("user-password");

spanUserName.innerHTML = `<span style=text-decoration:underline>${userName} ${userSurname}</span>!`;
console.log(spanUserName);

spanUserPassword.innerHTML = `<span style=color:red> ${userName}${userSurname}${userColor}22</span>`;
console.log(spanUserPassword);
