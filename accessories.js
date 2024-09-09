document.addEventListener('DOMContentLoaded', function() {
    const accessoriesGrid = document.getElementById('accessories-grid');
    
    if (window.accessoryProducts && Array.isArray(window.accessoryProducts)) {
        window.accessoryProducts.forEach(product => {
            const productCard = `
                <div class="card">
                    <img src="${product.imageUrl}" alt="${product.category}">
                    <div class="card-content">
                        <h2>${product.category}</h2>
                        <p>${product.description}</p>
                        <button class="buy-btn" data-product="${product.category}">Buy Now</button>
                    </div>
                </div>
            `;
            accessoriesGrid.innerHTML += productCard;
        });

        // Añade evento de click para cada botón de compra
        document.querySelectorAll('.buy-btn').forEach(button => {
            button.addEventListener('click', function() {
                const product = this.getAttribute('data-product');
                openPurchaseForm(product);
            });
        });
    } else {
        console.error('Products not found or not in the expected format');
        accessoriesGrid.innerHTML = '<p>Sorry, we are unable to load accessories at this time.</p>';
    }
});

function openPurchaseForm(product) {
    const formHtml = `
        <div id="purchase-form">
            <h2>Purchase ${product}</h2>
            <form id="buy-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" required><br>
                <label for="payment">Payment Method:</label>
                <select id="payment" name="payment" required>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                </select><br>
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" required><br>
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required><br>
                <button type="submit">Submit</button>
            </form>
        </div>
    `;

  
    document.body.insertAdjacentHTML('beforeend', formHtml);

  
    document.getElementById('buy-form').addEventListener('submit', function(event) {
        event.preventDefault();
        sendEmail(this);
    });
}

function sendEmail(form) {
    // Usar EmailJS o Formspree para enviar el correo
    // Aquí el código de envío según el servicio seleccionado
}
