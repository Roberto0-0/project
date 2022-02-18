const buttonMobile = document.getElementById('button-mobile')
buttonMobile.onclick = function() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}