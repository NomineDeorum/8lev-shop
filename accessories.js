document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            openPurchaseForm(product);
        });
    });
});

function openPurchaseForm(product) {
    fetch('purchase-form.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
            const purchaseForm = document.getElementById('purchase-form');
            purchaseForm.querySelector('h2').textContent = `Purchase ${product}`;
            purchaseForm.style.display = 'block';
            centerForm(purchaseForm);

            document.getElementById('buy-form').addEventListener('submit', function(event) {
                event.preventDefault();
                sendEmail(this);
            });

            document.getElementById('close-form').addEventListener('click', function() {
                purchaseForm.remove();  
            });
        });
}

function centerForm(form) {
    form.style.position = 'fixed';
    form.style.left = '50%';
    form.style.top = '50%';
    form.style.transform = 'translate(-50%, -50%)';
    form.style.backgroundColor = 'white';
    form.style.padding = '20px';
    form.style.zIndex = '1000';
    form.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
}

function sendEmail(form) {
    // Implementación de envío de correo
}
