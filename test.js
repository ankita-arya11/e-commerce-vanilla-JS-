const products = [
    { "name": "Vivo Smartphones", "price": 25000, "image": "vivophn.jpeg" },
    { "name": "I Kall S1", "price": 30000, "image": "ikall.jpg" },
    { "name": "Xiaomi Smartphone", "price": 20000, "image": "xiaomi.jpg" },
    { "name": "Oppo Smartphone", "price": 20000, "image": "oppo.jpeg" },
    { "name": "Oppo Smartphone", "price": 20000, "image": "iphn.webp" },
    { "name": "Oppo Smartphone", "price": 20000, "image": "iphn.webp" },
    { "name": "Oppo Smartphone", "price": 20000, "image": "iphn.webp" }
];

let header = document.createElement('header');
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.alignItems = 'center';
header.style.padding = '10px';
header.style.backgroundColor = '#f4f4f4';

let logo = document.createElement('div');
let imglogo = document.createElement('img');
imglogo.src = 'logo.png'; 
imglogo.style.height = '50px';
imglogo.style.width = '50px';
logo.style.fontSize = '24px';
logo.style.fontWeight = 'bold';
logo.style.display = 'flex';
logo.style.alignItems = 'center';
logo.appendChild(imglogo);


let nav = document.createElement('nav');
let link1 = document.createElement('a');
link1.href = '#';
link1.innerHTML = 'Home';
link1.style.marginRight = '20px';

let link2 = document.createElement('a');
link2.href = '#';
link2.innerHTML = 'Shop';
link2.style.marginRight = '20px';

nav.appendChild(link1);
nav.appendChild(link2);

let cartContainer = document.createElement('div');
cartContainer.style.position = 'relative';
cartContainer.style.cursor = 'pointer';

let cart = document.createElement('div');
cart.innerHTML = '🛒';
cartContainer.appendChild(cart);
cart.style.paddingRight = '10px';

let cartCounter = document.createElement('span');
cartCounter.innerHTML = '0';
cartCounter.style.position = 'absolute';
cartCounter.style.top = '0';
cartCounter.style.right = '0';
cartCounter.style.backgroundColor = 'red';
cartCounter.style.color = 'white';
cartCounter.style.borderRadius = '50%';
cartCounter.style.width = '20px';
cartCounter.style.height = '20px';
cartCounter.style.display = 'flex';
cartCounter.style.justifyContent = 'center';
cartCounter.style.alignItems = 'center';
cartCounter.style.fontSize = '12px';
cartCounter.style.fontWeight = 'bold';
cartContainer.appendChild(cartCounter);
cartContainer.style.marginRight = '80px';

let searchContainer = document.createElement('div');
searchContainer.style.display = 'flex';
searchContainer.style.alignItems = 'center';
searchContainer.style.marginLeft = '20px';

let searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search products...';
searchInput.style.padding = '5px';
searchInput.style.marginRight = '10px';
searchInput.style.border = '1px solid #ccc';
searchInput.style.borderRadius = '5px';

let searchButton = document.createElement('button');
searchButton.innerHTML = 'Search';
searchButton.style.padding = '5px 10px';
searchButton.style.border = 'none';
searchButton.style.backgroundColor = '#007bff';
searchButton.style.color = '#fff';
searchButton.style.cursor = 'pointer';
searchButton.style.borderRadius = '5px';
searchButton.style.marginRight = '300px';

searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchButton);

header.appendChild(logo);
header.appendChild(nav);
header.appendChild(searchContainer);
header.appendChild(cartContainer);

document.body.appendChild(header);

let cartCount = 0;
let cartItems = []; 

function createProductDiv() {
    let productDiv = document.createElement('div');
    productDiv.style.display = 'flex';
    productDiv.style.flexWrap = 'wrap';
    productDiv.style.justifyContent = 'space-around';
    productDiv.style.margin = '30px';

    products.forEach((product, index) => {
        let mainCard = document.createElement('div');
        mainCard.style.height = '350px';
        mainCard.style.width = '220px';
        mainCard.style.margin = '10px';
        mainCard.style.border = '1px solid #ccc';
        mainCard.style.borderRadius = '20px';
        mainCard.style.boxShadow = '0 4px 8px rgba(1, 10, 5, 6)';
        mainCard.style.display = 'flex';
        mainCard.style.flexDirection = 'column';

        let cardImageDiv = document.createElement('div');
        cardImageDiv.style.height = '200px';
        cardImageDiv.style.display = 'flex';
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.style.height = '100%';
        img.style.width = '100%';
        img.style.objectFit = 'cover';
        cardImageDiv.appendChild(img);
        mainCard.appendChild(cardImageDiv);

        let cardInfoDiv = document.createElement('div');
        cardInfoDiv.style.padding = '10px';
        cardInfoDiv.innerHTML = `<strong>${product.name}</strong><br>Price: Rs.${product.price}/-`;

        let button = document.createElement('button');
        button.innerHTML = 'Add to Cart';
        button.style.marginTop = '10px';
        button.style.padding = '12px 12px';
        button.style.backgroundColor = '#28a745';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '50px';
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => {
            cartCount++;
            cartCounter.innerHTML = cartCount;
            addToCart(product); 
        });

        cardInfoDiv.appendChild(button);
        mainCard.appendChild(cardInfoDiv);
        productDiv.appendChild(mainCard);
    });

    document.body.appendChild(productDiv);
}

createProductDiv();

let cartSidebar = document.createElement('div');
cartSidebar.style.width = '0';
cartSidebar.style.height = '100vh';
cartSidebar.style.position = 'fixed';
cartSidebar.style.top = '0';
cartSidebar.style.right = '0';
cartSidebar.style.backgroundColor = '#fff';
cartSidebar.style.overflowY = 'auto';
cartSidebar.style.transition = 'width 0.3s ease';
cartSidebar.style.padding = '20px';

let closeBtn = document.createElement('button');
closeBtn.innerHTML = 'X';
closeBtn.style.position = 'absolute';
closeBtn.style.top = '10px';
closeBtn.style.right = '10px';
closeBtn.style.backgroundColor = 'transparent';
closeBtn.style.border = 'none';
closeBtn.style.fontSize = '20px';
closeBtn.style.cursor = 'pointer';
closeBtn.addEventListener('click', () => {
    cartSidebar.style.width = '0'; 
});
cartSidebar.appendChild(closeBtn);

let removeAllBtn = document.createElement('button');
removeAllBtn.innerHTML = 'Remove All Items';
removeAllBtn.style.marginBottom = '20px';
removeAllBtn.style.padding = '10px 20px';
removeAllBtn.style.backgroundColor = 'red';
removeAllBtn.style.color = 'white';
removeAllBtn.style.border = 'none';
removeAllBtn.style.cursor = 'pointer';
removeAllBtn.style.borderRadius = '5px';
removeAllBtn.addEventListener('click', () => {
    cartCount = 0;
    cartCounter.innerHTML = cartCount;
    cartItems = []; 
    updateSidebar(); 
});
cartSidebar.appendChild(removeAllBtn);

let cartContent = document.createElement('div');
cartSidebar.appendChild(cartContent);
document.body.appendChild(cartSidebar);

cartContainer.addEventListener('click', () => {
    if (cartSidebar.style.width === '0px' || cartSidebar.style.width === '') {
        cartSidebar.style.width = '200px';
    } else {
        cartSidebar.style.width = '0';
    }
});

// Update Cart Sidebar
function updateSidebar(){
    cartContent.innerHTML = '';
    cartItems.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.style.marginBottom = '20px';

        let productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.style.width = '100%';
        productDiv.appendChild(productImage);

        let productName = document.createElement('h3');
        productName.innerHTML = product.name;
        productDiv.appendChild(productName);

        let productPrice = document.createElement('p');
        productPrice.innerHTML = `Price: Rs.${product.price}/-`;
        productDiv.appendChild(productPrice);

        cartContent.appendChild(productDiv);
    });
}

let img = document.createElement('img');
        img.src = product.thumbnail || 'default.jpg';
        img.alt = product.title;
        img.style.width = '100%';
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openModal(product));


        function openModal(product) {
            modalImage.src = product.thumbnail || 'default.jpg';
            modalTitle.innerText = product.title;
            modalDesc.innerText = product.description;
            modalPrice.innerText = `Price: Rs.${product.price}/-`;
            modal.style.display = 'flex';
        }