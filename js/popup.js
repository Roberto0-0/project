const body = document.getElementById('body')
body.onclick = () => {
    const fullScreen = document.getElementById('full-screen')
    if(localStorage.SavePopup != "popup"){
        fullScreen.classList.toggle('pop-up')
        fullScreen.onclick = (evento) => {
            console.log(evento.target.id)
            if(evento.target.className != "remove-pop-up"){
                fullScreen.classList.remove('pop-up');
                localStorage.SavePopup = "popup"
            }
        }
    }
}