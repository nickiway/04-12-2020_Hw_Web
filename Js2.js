var container =  document.getElementById('result');
let user1 = new Object();
var income = [100,200,400,300,500,600];
user1 = {
    name: "Vasya",
    income: [100,200,400,300,500,600]
}

let user2 = new Object();
user2 = {
    name: "Petya",
    income: [101,201,401,301,501,601]
}

let user3 = new Object();
user3 = {
    name: "Serega",
    income: [102,202,402,302,502,602]
}
// First user
container.innerHTML += "<p>" + user1.name + "</p>";
for (let index = 0; index < user1.income.length; index++) {   
    container.innerHTML += " " + user1.income[index]+ "$ ";
}
// Second user
container.innerHTML += "<p>" + user2.name + "</p>";
for (let index = 0; index < user2.income.length; index++) { 
    container.innerHTML += " " + user2.income[index] + "$ ";
}
// Third user
container.innerHTML += "<p>" + user3.name + "</p>";
for (let index = 0; index < user3.income.length; index++) { 
    container.innerHTML += " " + user3.income[index]+ "$ ";
}