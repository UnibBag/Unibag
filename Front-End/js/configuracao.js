document.getElementById("btn-atualizar-senha").addEventListener("click", function(e) {
    e.preventDefault();
    let overlay = document.getElementById("success-overlay");

    overlay.style.display = "flex";

    setTimeout(() => {
        overlay.style.display = "none";
    }, 3000);
});
