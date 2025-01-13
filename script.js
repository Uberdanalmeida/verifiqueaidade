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
            resu.style.fontSize = '22px'
            pri.style.backgroundColor = 'rgba(29, 157, 248, 0.349)'
        }

        else if(data >= 11 && data < 21) {
            resu.innerHTML = `Detectamos um jovem de ${data} anos.`
            resu.style.fontSize = '22px'
            pri.style.backgroundColor = 'rgba(29, 157, 248, 0.349)'
        }

        else if(data >= 21 && data < 60) {
            resu.innerHTML = `Detectamos um ${mf} de ${data} anos.`
            resu.style.fontSize = '22px'
            pri.style.backgroundColor = 'rgba(29, 157, 248, 0.349)'
        }

        else {
            resu.innerHTML = `Detectamos um idoso de ${data} anos.`
            resu.style.fontSize = '22px'
            pri.style.backgroundColor = 'rgba(29, 157, 248, 0.349)'
        }

    }

    if(sexo[1].checked) {
        mf = 'Mulher'

        if(data > 0 && data < 11) {
            resu.innerHTML = `Detectamos uma criança de ${data} anos.`
            resu.style.fontSize = '22px'
            pri.style.backgroundColor = 'pink'
        }

        else if(data >= 11 && data < 21) {
            resu.innerHTML = `Detectamos uma jovem de ${data} anos.`
            resu.style.fontSize = '22px'
            pri.style.backgroundColor = 'pink'
        }

        else if(data >= 21 && data < 60) {
            resu.innerHTML = `Detectamos uma ${mf} de ${data} anos.`
            resu.style.fontSize = '22px'
            pri.style.backgroundColor = 'pink'
        }

        else {
            resu.innerHTML = `Detectamos uma idosa de ${data} anos.`
            resu.style.fontSize = '22px'
            pri.style.backgroundColor = 'pink'
        }

    }
}