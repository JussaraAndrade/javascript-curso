let menuToggle = () => {
    let menuArea = document.getElementById('menu-area');

    /*
    Forma 1:

    if(menuArea.classList.contains('menu-opened') == true){
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }*/

    // Forma 2:
    if(menuArea.style.width == '200px') {
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px';
    }

}