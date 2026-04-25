// --- Chela Couture Cart Logic ---
let count = 0;

// This function runs once the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const badge = document.getElementById('cart-count');
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            count++;
            if (badge) {
                badge.innerText = count;
                
                // Visual feedback
                badge.style.transform = "scale(1.3)";
                setTimeout(() => { badge.style.transform = "scale(1)"; }, 200);
            }
            console.log("Item added. Total items:", count);
        });
    });
});