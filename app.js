var pattern=document.querySelectorAll('.patternCost');
var checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        pattern[0].textContent = "19.99";
        pattern[1].textContent = "24.99";
        pattern[2].textContent = "39.99";  

    } else {
        pattern[0].textContent = "199.99";
        pattern[1].textContent = "249.99";
        pattern[2].textContent = "399.99";
}});