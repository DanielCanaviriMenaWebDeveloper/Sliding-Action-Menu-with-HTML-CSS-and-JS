const navigation = document.querySelector('.navigation');

const menu_toggle = document.querySelector('.menu_toggle');

menu_toggle.onclick = function() {
    navigation.classList.toggle('active');
}

console.log(navigation, menu_toggle);