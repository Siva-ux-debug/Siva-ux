console.log("javascript is connected");


 
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



const button = document.getElementById("change");

button.addEventListener("click", function() {
    
    document.body.style.backgroundColor = getRandomColor();
    console.log("Background color changed to lightblue!");
});
