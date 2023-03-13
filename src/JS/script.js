// alert for no number
function noNumAlert() {
    alert("Please enter a number");
}
// function to check if no number has been entered
function nan(num) {
    return num.length;
}
// function to increment
function plus() {
    let num = document.getElementById("input-box").value;
    if (!nan(num)) {
        noNumAlert();
    } else if(num < 0) {
        alert("Please enter a positive number");   
    } else {
        num++;
        document.getElementById("input-box").value = num;
    }

}
// function to decrement
function minus() {
    let num = document.getElementById("input-box").value;
    if (!nan(num)) {
        noNumAlert();
    } else if (num <= 0) {
        alert("Can't go below 0");
    } else {
        num--;
        document.getElementById("input-box").value = num;
    }
}

