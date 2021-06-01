const body = document.getElementById('body')
body.onclick = () => {
    const fullScreen = document.getElementById('full-screen')
    if(localStorage.SavePopup != fullScreen){
        if(fullScreen){
            fullScreen.classList.toggle('pop-up')
            fullScreen.onclick = (evento) => {
                if(evento.target.className != "remove-pop-up"){
                    fullScreen.classList.remove('pop-up');
                    localStorage.SavePopup = fullScreen
                }
            }
        }
    }
}