const buttonThemaDark = document.getElementById('dark')
const logoDark = document.getElementById('logo-dark')
const footerLogoDark = document.getElementById('footer-logo-dark')
const facebook = document.getElementById('facebook-dark')
const instagram = document.getElementById('instagram-dark')
const github = document.getElementById('github-dark')
buttonThemaDark.onclick = function(){
    document.body.classList.toggle('themaDark')
    if(document.body.classList.contains('themaDark')){
        buttonThemaDark.src = "./img/sun.png"
        logoDark.src = "./img/logo-white.png"
        facebook.src = "./img/facebook-white.png"
        instagram.src = "img/instagram-white.png"
        github.src = "./img/github-white.png"
    }else{
        buttonThemaDark.src = "./img/moon.png"
        logoDark.src = "./img/logo-dark.png"
        facebook.src = "./img/facebook-dark.png"
        instagram.src = "./img/instagram-dark.png"
        github.src = "./img/github-dark.png"
    }
}