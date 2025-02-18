const IconMenu = document.getElementById('icon-menu'); // PEGANDO O ID DO ICON MENU
const menu = document.querySelector('.navbar'); // PEGANDO A CLASS DO MENU

IconMenu.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
});