// get form element
const form = document.getElementById('order-form');

// add submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting

    // get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;
    const notes = document.getElementById('notes').value;

    // validate form values
    if (!name || !email || !phone || !address || !food || !quantity) {
        alert('Please fill in all required fields.');
        return;
    }

    // create order summary
    const orderSummary = `Order Summary:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDelivery Address: ${address}\nFood: ${food}\nQuantity: ${quantity}\nNotes: ${notes}`;

    // display order summary and ask for confirmation
    if (confirm(orderSummary)) {
        // if user confirms, submit the form
        form.submit();
    }
});
