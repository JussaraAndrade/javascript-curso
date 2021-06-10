let digitou = (event) => {
  if(event.keyCode == 13 && event.ctrlKey == true) { // tecla Enter
    let texto = document.getElementById('campo').value;
    
    console.log(texto);
  }
}