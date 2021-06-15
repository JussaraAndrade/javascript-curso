// Código Síncrono; executa linha por linha
let nome = 'Thomaz';
let sobrenome = 'Henrique';
let completo = nome+ ' ' +sobrenome;

// Código assíncrono; não executa linha por linha, ele pegar outra linha e executa (ela não espera)
let nome = 'Thomaz';
let sobrenome = 'Henrique';
let temperatura = Maquininha.pegarTemperatura(); // assíncrona
let completo = nome+ ' ' +sobrenome;