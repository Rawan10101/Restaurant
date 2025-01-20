const foodPrices = {
    'Chocolate Cake': 150,
    'Vanilla Cake': 120,
    'Koshari': 50,
    'Ful Medames': 30,
    'Mahshi': 70,
    'Coffee': 20,
    'Tea': 15,
};

document.getElementById('foodItem').addEventListener('change', updateTotalCost);
document.getElementById('quantity').addEventListener('input', updateTotalCost);

function updateTotalCost() {
    const foodItem = document.getElementById('foodItem').value;
    const quantity = document.getElementById('quantity').value;

    if (foodItem && quantity) {
        const total = foodPrices[foodItem] * quantity;
        document.getElementById('totalCost').innerText = `Total Cost: ${total} EGP`;
    } else {
        document.getElementById('totalCost').innerText = `Total Cost: 0 EGP`;
    }
}


document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const foodItem = document.getElementById('foodItem').value;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    alert(`Order placed! 
    Name: ${name}
    Address: ${address}
    Food: ${foodItem}
    Quantity: ${quantity}
    Total Cost: ${foodPrices[foodItem] * quantity} EGP`);
});
