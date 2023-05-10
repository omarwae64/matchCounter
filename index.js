let home =document.getElementById("hum")
let guest =document.getElementById("gst")

let counter0 = 0
let counter = 0

function addone(){
    counter += 1
    home.textContent = counter    
}

function addw(){
    counter += 2
    home.textContent = counter 
}

function addt(){
    counter += 3
    home.textContent = counter 
}



function addone0(){
    counter0 += 1
    guest.textContent = counter0    
}

function addw0(){
    counter0 += 2
    guest.textContent = counter0
}

function addt0(){
    counter0 += 3
    guest.textContent = counter0 
}

function resetHome(){
    counter = 0
    counter0 = 0    
        
    
    home.textContent = counter
    guest.innerText = counter0
    
}

