document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Ka Living Treasures!");
    const changeColorBtn = document.getElementById("changeColorBtn");
    if (changeColorBtn) {
        changeColorBtn.addEventListener("click", function() {
            const colors = ["#5E2750", "#D4AF37", "#2F4F4F", "#F4A261", "#FAF3E0"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.querySelector(".hero").style.backgroundColor = randomColor;
        });
    }  
    const productImages = document.querySelectorAll(".product-gallery img");
    productImages.forEach(img => {
        img.addEventListener("click", function() {
            alert(`You clicked on ${this.alt}!`);
        });
    });
});
