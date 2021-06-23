let dia = 6;
let diaNome ='';

// uma variavel ou um valor
switch(dia){
    case 6:
    case 7:
        diaNome = 'Final de semana';
        break;
    default:
        diaNome = 'Dia de semana';
        break;
}

/*switch(dia){
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3: 
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sábado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
}*/

document.getElementById('dia').innerHTML = "Hoje é: " +diaNome;