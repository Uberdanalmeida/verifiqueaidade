function clique() {
    let dia = new Date()
    let ano = dia.getFullYear()
    let tano = document.getElementById("txt")
    let data = ano - tano.value 
    let resu = document.getElementById("res")
    let sexo = document.getElementsByName("sex")
    let pri = document.querySelector("div")
    let mf = ''

    if(sexo[0].checked) {
        mf = 'Homem'

        if(data > 0 && data < 11) {
            resu.innerHTML = `Detectamos uma criança de ${data} anos.`
            pri.style.backgroundColor = 'blue'
        }

        else if(data >= 11 && data < 21) {
            resu.innerHTML = `Detectamos um jovem de ${data} anos.`
            pri.style.backgroundColor = 'blue'
        }

        else if(data >= 21 && data < 60) {
            resu.innerHTML = `Detectamos um ${mf} de ${data} anos.`
            pri.style.backgroundColor = 'blue'
        }

        else {
            resu.innerHTML = `Detectamos um idoso de ${data} anos.`
            pri.style.backgroundColor = 'blue'
        }

    }

    if(sexo[1].checked) {
        mf = 'Mulher'

        if(data > 0 && data < 11) {
            resu.innerHTML = `Detectamos uma criança de ${data} anos.`
            pri.style.backgroundColor = 'pink'
        }

        else if(data >= 11 && data < 21) {
            resu.innerHTML = `Detectamos uma jovem de ${data} anos.`
            pri.style.backgroundColor = 'pink'
        }

        else if(data >= 21 && data < 60) {
            resu.innerHTML = `Detectamos uma ${mf} de ${data} anos.`
            pri.style.backgroundColor = 'pink'
        }

        else {
            resu.innerHTML = `Detectamos uma idosa de ${data} anos.`
            pri.style.backgroundColor = 'pink'
        }

    }
}