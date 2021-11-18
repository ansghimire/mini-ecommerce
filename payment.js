let quantity = localStorage.getItem('quantity')? localStorage.getItem('quantity'): 0;
let quantity1 = localStorage.getItem('quantity1')? localStorage.getItem('quantity1'): 0;

total_price.innerHTML = parseInt(quantity) * 2000 + parseInt(quantity1)* 4000;