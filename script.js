document.addEventListener('DOMContentLoaded', function() {
    const subscribeBtn = document.getElementById('subscribe-btn');
    const productGrid = document.getElementById('product-grid');
    
    if (window.sunStoreProducts && Array.isArray(window.sunStoreProducts)) {
        window.sunStoreProducts.forEach(product => {
            const productCard = `
                <div class="card">
                    <img src="${product.imageUrl}" alt="${product.category} category">
                    <div class="card-content">
                        <h2>${product.category}</h2>
                        <p>${product.description}</p>
                        <a href="/category/${product.category.toLowerCase()}" class="shop-now">Shop Now</a>
                    </div>
                </div>
            `;
            productGrid.innerHTML += productCard;
        });
    } else {
        console.error('Products not found or not in the expected format');
        productGrid.innerHTML = '<p>Sorry, we are unable to load products at this time.</p>';
    }

    subscribeBtn.addEventListener('click', function() {

        alert('Thank you for subscribing to my channel!');
        
        window.open('https://www.youtube.com/@rohmo98', '_blank');
    });
});
