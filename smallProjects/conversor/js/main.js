const btnConversor = document.getElementById('btn-conversor')
btnConversor.onclick = () => {
    const input1 = document.getElementById('input-1')
    const select1 = document.getElementById('select-1')
    const select2 = document.getElementById('select-2')
    const selectValue1 = select1.options[select1.selectedIndex].text
    const selectValue2 = select2.options[select2.selectedIndex].text
    const resu = document.getElementById('resultado')
    if(selectValue1 == selectValue2){
        resu.innerHTML = "ERRO"
    }else{
        if(selectValue2 == "Selecione" || selectValue1 == "Selecione"){
            resu.innerText = "ERRO"
        }else{
            if(selectValue1 == "R$"){
                let valor1 = Number(input1.value)
                let mult = valor1 / 5.17
                resu.innerHTML = `${selectValue2} ${mult.toFixed(2)}`
            }else if (selectValue1 == "US$"){
                let valor1 = Number(input1.value)
                let mult = valor1 * 5.06
                resu.innerHTML = `${selectValue2} ${mult.toFixed(2)}`
            }
        }
        
    }
}