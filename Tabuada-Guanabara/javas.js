

let n = document.querySelector('#num')
let ir = document.querySelector('#ir')
let res = document.querySelector('#seltab')

ir.addEventListener('click', function(e){

    let num = Number(n.value)
    let text = '';
    let textf = ''
    let numf;

    for(let i = 0; i < 10; i++){

        let item = document.createElement('option')
        item.text = `${num} x ${i} = ${num*i}`
        res.appendChild(item)
    }


    e.preventDefault();
})