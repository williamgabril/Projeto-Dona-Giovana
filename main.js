const dataAtual= new Date();
let dataObjetivo=prompt("Data final Ano-Mes-Dia Ex:2024-04-10");
dataobjetivo=new Date(dataobjetivo+ "T23:59:99")
let diasQueFaltam=Math.floor((dataObjetivo-dataAtual)/ 86400000);
document.querySelector("#dias-restantes").textContent=diasQueFaltam;
