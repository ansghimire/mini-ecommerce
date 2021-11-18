let inc = document.getElementById('increment');
let dec = document.getElementById('decrement');
let value = 0;
let display_qty = document.getElementById('result');
display_qty.innerHTML = localStorage.getItem('quantity') ? localStorage.getItem('quantity'): value;


inc.addEventListener('click', (e)=> {
    e.preventDefault;
    value = localStorage.getItem('quantity')? parseInt(localStorage.getItem('quantity'))+ 1: value+1;
    localStorage.setItem('quantity', value);
    display_qty.innerHTML=localStorage.getItem('quantity');
    
})

dec.addEventListener('click', (e)=> {
    e.preventDefault;
    if(value > 0){
        value=parseInt(localStorage.getItem('quantity'))-1;
        localStorage.setItem('quantity', value);
        display_qty.innerHTML=localStorage.getItem('quantity');
    }   

})


// for 2nd item
let inc1 = document.getElementById('increment1');
let dec1 = document.getElementById('decrement1');
let value1 = 0;
let display_qty1 = document.getElementById('result1');
display_qty1.innerHTML = localStorage.getItem('quantity1') ? localStorage.getItem('quantity1'): value1;


inc1.addEventListener('click', (e)=> {
    e.preventDefault;
    value1 = localStorage.getItem('quantity1')? parseInt(localStorage.getItem('quantity1'))+ 1: value1+1;
    localStorage.setItem('quantity1', value1);
    display_qty1.innerHTML=localStorage.getItem('quantity1');
    
})

dec1.addEventListener('click', (e)=> {
    e.preventDefault;
    if(value1 > 0){
        value1=parseInt(localStorage.getItem('quantity1'))-1;
        localStorage.setItem('quantity1', value1);
        display_qty1.innerHTML=localStorage.getItem('quantity1');
    }   

})


