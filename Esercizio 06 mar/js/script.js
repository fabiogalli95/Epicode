const createBookCard = (book) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'col-md-3 mb-4';

    const card = `
        <div class="card">
            <img src="${book.img}" class="card-img-top" alt="${book.title}">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Prezzo: ${book.price}$</p>
                <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
                <button class="btn btn-success" onclick="addToCart('${book.title}', ${book.price})">Compra ora</button>
            </div>
        </div>
    `;
    cardDiv.innerHTML = card;

    return cardDiv;
}
 
const removeCard = (element) => {
    console.log(element);
    const card = element.closest('.col-md-3');
    card.remove();
};
 
const addToCart = (title, price) => {
    console.log(title)
    const cartList = document.getElementById('cartList');
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `${title} - ${price}$ <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart(this)">Rimuovi</button>`;
    cartList.appendChild(listItem);

   
    updateCartStorage();
};


const removeFromCart = (element) => {
    const listItem = element.closest('li');
    listItem.remove();


    updateCartStorage();
};

 const updateCartStorage = () => {
    const cartList = document.getElementById('cartList');
    const cartItems = cartList.innerHTML;
    localStorage.setItem('cartItems', cartItems);
}


const checkoutBtn = document.getElementById('checkoutBtn');
        checkoutBtn.addEventListener('click', function () {
            alert('Grazie per il tuo acquisto!');
           
        });

window.onload = function(){
    init();
}

const init = () => {

        loadBooks()

        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            const cartList = document.getElementById('cartList');
            cartList.innerHTML = storedCartItems;
        }      
        
    };

    const loadBooks = async () => {
        await fetch('https://striveschool-api.herokuapp.com/books')
        .then(response => response.json())
        .then(data => {
            const bookListContainer = document.getElementById('bookList');
            data.forEach(book => {
                const card = createBookCard(book);
                bookListContainer.appendChild(card);
            });
            return data;
        })
        .catch(error => console.error('Errore nella richiesta:', error));
    }