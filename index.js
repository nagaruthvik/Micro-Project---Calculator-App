function insert(event){
    var button = event.target.textContent

    var inputbox = document.getElementById("inputext")

    var lastele = inputbox.textContent.slice(0,-1)

    if(button == "RESET"){
        inputbox.textContent = ""
        return
    }

    if(button === "DEL"){
        
        inputbox.textContent = inputbox.textContent.slice(0,-1)
        return
    }

    if((button ==="-"|| button ==="+" || button ==="x"|| button ==="/" || button ==="." ) &&
    (inputbox.textContent === "" || inputbox.textContent === "+" || inputbox.textContent === "-" || inputbox.textContent === "." || inputbox.textContent === "x" || inputbox.textContent === "/")){
        return
    }

    if(button === "="){
        try{
            var final = inputbox.textContent.replace("X","*")
            var result = eval(final)
            inputbox.textContent = result
            return
        }
        catch(expection){
            inputbox.textContent = "ERROR"
        }
    }

    

    
     
    inputbox.textContent += button

}


document.querySelectorAll("button").forEach(but=>but.addEventListener("click",insert))

