$(document).ready(function () {
  // Event listeners for quantity buttons
  $('.quantity-btn').click(function () {
    const itemQuantity = parseInt($(this).siblings('.quantity').text());
    const newItemQuantity = $(this).data('action') === 'plus' ? itemQuantity + 1 : itemQuantity - 1;
    if (newItemQuantity >= 0) {
      $(this).siblings('.quantity').text(newItemQuantity);
      updateTotalPrice();
    }
  });

  // Event listeners for delete buttons
  $('.delete-btn').click(function () {
    $(this).closest('.cart-item').remove();
    updateTotalPrice();
  });

  // Event listener for heart icons
  $('.heart-icon').click(function () {
    $(this).toggleClass('fas'); // Switch between regular and solid heart icons
    $(this).toggleClass('liked');
  });

  // Function to update the total price
  function updateTotalPrice() {
    let totalPrice = 0;
    $('.cart-item').each(function () {
      const itemPrice = parseFloat($(this).find('.item-price').text().replace('DT', ''));
      const itemQuantity = parseInt($(this).find('.quantity').text());
      totalPrice += itemPrice * itemQuantity;
    });
    $('#total').text(totalPrice.toFixed(2) + 'DT');
  }
});
