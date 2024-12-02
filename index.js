async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data);
        
        createProductDiv(data.products);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchProducts();

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

function addToCart(product) {
    cartItems.push(product);
    updateSidebar();
}

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
        cartSidebar.style.width = '300px';
    } else {
        cartSidebar.style.width = '0';
    }
});

function updateSidebar() {
    const cartContent = cartSidebar.querySelector('div');
    cartContent.innerHTML = '';

    cartItems.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.style.marginBottom = '20px';

        let productImage = document.createElement('img');
        productImage.src = product.thumbnail || 'oppo.jpeg';
        productImage.alt = product.name;

        productImage.style.width = '100px';
        productDiv.appendChild(productImage);

        let productName = document.createElement('h4');
        productName.innerHTML = product.title;
        productDiv.appendChild(productName);

        let productPrice = document.createElement('p');
        productPrice.innerHTML = `Price: Rs.${product.price}/-`;
        productDiv.appendChild(productPrice);

        cartContent.appendChild(productDiv);
    });
}

function createProductDiv(products) {
    let productDiv = document.createElement('div');
    productDiv.style.display = 'flex';
    productDiv.style.flexWrap = 'wrap';
    productDiv.style.justifyContent = 'space-around';
    productDiv.style.margin = '30px';

    products.forEach((product) => {
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
        const img = document.createElement('img');
        img.src = product.thumbnail || 'oppo.jpeg';  
        img.alt = product.name;
        img.style.height = '100%';
        img.style.width = '100%';
        img.style.objectFit = 'cover';
        img.style.cursor = 'pointer';

        cardImageDiv.appendChild(img);
        mainCard.appendChild(cardImageDiv);

        let cardInfoDiv = document.createElement('div');
        cardInfoDiv.style.padding = '10px';
        cardInfoDiv.innerHTML = `<strong>${product.title}</strong><br>Price: Rs.${product.price}/-`;

        let button = document.createElement('button');
        button.innerHTML = 'Add to Cart';
        button.style.marginTop = '10px';
        button.style.padding = '12px 12px';
        button.style.backgroundColor = '#28a745';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '50px';
        button.style.cursor = 'pointer';

        button.addEventListener('click', (event) => {
            event.stopPropagation(); 
            cartCount++;
            cartCounter.innerHTML = cartCount;
            addToCart(product);
        });

        cardInfoDiv.appendChild(button);
        mainCard.appendChild(cardInfoDiv);

        mainCard.addEventListener('click', () => openModal(product));

        productDiv.appendChild(mainCard);
    });

    document.body.appendChild(productDiv);
}

let modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
modal.style.display = 'none';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '999';

let modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#fff';
modalContent.style.padding = '20px';
modalContent.style.borderRadius = '10px';
modalContent.style.width = '500px';
modalContent.style.position = 'relative';

let closeModalBtn = document.createElement('button');
closeModalBtn.innerHTML = 'X';
closeModalBtn.style.position = 'absolute';
closeModalBtn.style.top = '10px';
closeModalBtn.style.right = '10px';
closeModalBtn.style.backgroundColor = 'transparent';
closeModalBtn.style.border = 'none';
closeModalBtn.style.fontSize = '20px';
closeModalBtn.style.cursor = 'pointer';
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
modalContent.appendChild(closeModalBtn);

let modalProductDetails = document.createElement('div');
modalContent.appendChild(modalProductDetails);

modal.appendChild(modalContent);
document.body.appendChild(modal);

function openModal(product) {
    modal.style.display = 'flex';
    modalProductDetails.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}" alt="${product.name}" style="width: 100%; height: auto;"/>
        <p>${product.description}</p>
        <p>Price: Rs.${product.price}/-</p>
    `;
}
