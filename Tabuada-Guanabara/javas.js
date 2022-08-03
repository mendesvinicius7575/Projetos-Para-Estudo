

let n = document.querySelector('#num')
let ir = document.querySelector('#ir')
let res = document.querySelector('#res')

ir.addEventListener('click', function(e){

    let num = Number(n.value)
    let text = ''
    let textf = ''

    for(let i = 0; i < 10; i++){
        
        text =  num + "x" + i + ":" + (num*i) + "<br/>" ;
        textf = textf + text 

    
    }

    res.textContent = `${textf}`

    e.preventDefault();
})