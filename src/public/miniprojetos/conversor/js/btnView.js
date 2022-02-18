const btnView = document.getElementById('btn-view')
const box = document.getElementById('box')
btnView.onclick = () => {
    box.classList.toggle('view')
}