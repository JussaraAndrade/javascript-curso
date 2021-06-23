// É um pouco mais perigoso pq ele fica rodando até quand o computador travar

let html = '';

let c = 1; // inicializa no 0

//while; enquanto
while(c <= 10) {
    html += "Número (while): " +c+ "<br/>";
    // c += 1;
    // c = c + 1;
    c++;
}

for(let c = 1; c <= 10; c++){
    html += "Número (for): " +c+ "<br/>";
}

document.getElementById('demo').innerHTML = html;
