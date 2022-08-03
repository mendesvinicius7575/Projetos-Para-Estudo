

let n = document.querySelector('#num')
let ir = document.querySelector('#ir')
let res = document.querySelector('#res')

ir.addEventListener('click', function(e){

    let num = Number(n.value)
    let text = ''
    let textf = ''
    let numf;

    for(let i = 0; i < 10; i++){
        
        numf = num * i
        text =  `${num} x ${i} = ${numf}`
        textf = textf + text 

    
    }

    res.textContent = `${textf}`

    e.preventDefault();
})