 // set intial count
 let count = 0;

 //select value and buttons
 const value = document.querySelector('#value');
 const btns = document.querySelectorAll('.btn');
 const savebtn = document.getElementById('save'); 
 const saveEl = document.getElementById("save-el");
 const resetbtn = document.getAnimations('resetbtn');

 btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            count --;
        } else if (styles.contains("increase")){
            count ++;
        } else if (styles.contains("reset")){
            count = 0;
        }
        if(count < 0){
           value.style.color = "red";   
        } else if (count > 0){
            value.style.color = "green";  
        }  else if (count == 0){
            value.style.color = "black";  
        }
        value.textContent = count;
    })

 });

 function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    let saved = 0
    count = saved;
    value.textContent = 0;
}

function reset(){
    value.textContent = 0;
    let reset = 0;
    count = reset;
    saveEl.textContent = 0;
}