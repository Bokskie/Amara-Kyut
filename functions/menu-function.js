document.addEventListener('DOMContentLoaded', function() {


    document.querySelectorAll('.menu-content-box').forEach(function(box) {
        box.addEventListener('click', function() {
            var foodContentId = this.getAttribute('data-food-content');
            var foodContent = document.getElementById(foodContentId);
            if (foodContent) {
                foodContent.style.display = 'block';
                updateTotalPrice(foodContent); 
            }
        });
    });

  
    document.querySelectorAll('.close').forEach(function(button) {
        button.addEventListener('click', function() {
            var foodContentId = this.getAttribute('data-food-content');
            var foodContent = document.getElementById(foodContentId);
            if (foodContent) {
                foodContent.style.display = 'none';
            }
        });
    });


    function updateTotalPrice(content) {
        var quantityInput = content.querySelector('#quantity');
        var priceElement = content.querySelector('.food-price');
        var totalPriceElement = content.querySelector('.food-total-price');
        
        var quantity = parseInt(quantityInput.value, 10);
        var unitPrice = parseFloat(priceElement.textContent.replace(/[^0-9,.]/g, ''));
        var totalPrice = (unitPrice * quantity).toFixed(2);
        
        console.log('Quantity:', quantity); 
        console.log('Unit Price:', unitPrice); 
        console.log('Total Price:', totalPrice);
        
        totalPriceElement.textContent = 'Total: ₱ ' + totalPrice;
    }


    document.querySelectorAll('.food-content').forEach(function(content) {
        var quantityInput = content.querySelector('#quantity');
        quantityInput.addEventListener('input', function() {
            updateTotalPrice(content);
        });
    });


    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'order-button') {
            var foodContent = event.target.closest('.food-content');
            if (foodContent) {
                var quantity = foodContent.querySelector('#quantity').value;
                var title = foodContent.querySelector('#food-content-title').textContent;
                var totalPrice = foodContent.querySelector('.food-total-price').textContent;

                showAlert('You have successfully ordered ' + quantity + ' of ' + title + '. ' + totalPrice + ' ✓');

                foodContent.style.display = 'none';
            }
        }
    });

 
    function showAlert(message) {
        var alertBox = document.getElementById('alert-box');
        var alertMessage = document.getElementById('alert-message');
        var closeButton = document.querySelector('.alert-box-close');

        alertMessage.textContent = message;
        alertBox.style.display = 'block';

        closeButton.addEventListener('click', function() {
            alertBox.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === alertBox) {
                alertBox.style.display = 'none';
            }
        });
    }
});
