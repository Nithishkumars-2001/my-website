//select sidenavbar
var sidenavbar = document.querySelector(".side-navbar")

function shownavbar()
{
    sidenavbar.style.left = "0"
}
function closenavbar()
{
    sidenavbar.style.left = "-60%"
}


document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (event) {
    if (event.key == "F12" || 
        (event.ctrlKey && event.shiftKey && event.key == "I") || 
        (event.ctrlKey && event.shiftKey && event.key == "J") || 
        (event.ctrlKey && event.key == "U") || 
        (event.ctrlKey && event.key == "S") || 
        (event.ctrlKey && event.key == "H")) {
        event.preventDefault(); // Block inspect element shortcuts
    }
});

//Dounload resume

document.getElementById("downloadBtn").addEventListener("click", function () {
    const a = document.createElement("a");
    a.href = "Nithishkumar_resume.pdf"; 
    a.download = "Nithishkumar_resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});