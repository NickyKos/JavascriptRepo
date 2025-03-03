document.addEventListener("DOMContentLoaded", function () {
    const cart = document.getElementById("cart");
    const addButtons = document.getElementsByClassName("add");
    
    Array.from(addButtons).forEach(button => {
        button.addEventListener("click", function () {
            const itemText = this.parentElement.textContent.replace("Add", "").trim();
            const li = document.createElement("li");
            li.textContent = itemText;
            
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.setAttribute("class", "remove");
            removeButton.addEventListener("click", function () {
                li.remove();
                checkEmptyCart();
            });
            
            li.appendChild(removeButton);
            cart.appendChild(li);
            checkEmptyCart();
        });
    });
    
    function checkEmptyCart() {
        if (cart.children.length === 0) {
            cart.textContent = "Cart is empty";
        } else {
            if (cart.textContent === "Cart is empty") {
                cart.textContent = "";
            }
        }
    }
    
    checkEmptyCart();
});
