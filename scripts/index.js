document.getElementById("myRange").addEventListener("change", function() {
    document.getElementById('fon').style.backgroundColor = `rgb(${255-this.value}, ${255-this.value}, ${255-this.value})`;
    document.getElementById('block1').style.left = `${80/255*this.value}%`;
    document.getElementById('block2').style.left = `${100-(100/255*this.value)}%`;
});





