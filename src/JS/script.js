// alert for no number
function noNum() {
    alert("Please enter a number");
}
// function to check if no number has been entered
function nan(num) {
    return num.length;
}
function plus() {
    let num = document.getElementById("input-box").value;
    if(!nan(num)){
        noNum();
    } else {
        num++;
        document.getElementById("input-box").value = num;
    } 
    
}

function minus() {
    let num = document.getElementById("input-box").value;
    if(!nan(num)) {
        noNum();
    }else if(num <= 0) {
        alert("Can't go below 0");
    } else {
        num--;
        document.getElementById("input-box").value = num;
    }
}

