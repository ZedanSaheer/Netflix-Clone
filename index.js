
var acc = document.getElementsByClassName("accordionbt");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var accc= this.nextElementSibling;

        if (accc.style.display==="block")
        {
            accc.style.display="none"; 
        } 
        else 
        {
            accc.style.display="block";
        }
    })
}