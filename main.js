document.addEventListener('DOMContentLoaded', function() {
  const buyButtons = document.querySelectorAll('.buy-btn');
  const confirmModal = document.getElementById('confirmModal');
  const confirmText = document.getElementById('confirmText');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');

  let selectedProduct = '';
  let selectedPrice = '';

  // عند الضغط على زر Buy
  buyButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const card = btn.closest('.product-card');
      if (!card) return;
      const productTitle = card.querySelector('h3');
      const productPrice = card.querySelector('p');
      selectedProduct = productTitle ? productTitle.textContent : 'Unknown Product';
      selectedPrice = productPrice ? productPrice.textContent : '';

      // النص العربي داخل string آمنة
      confirmText.textContent = 'هل تود شراء المنتج: ' + selectedProduct;
      confirmModal.style.display = 'flex';
    });
  });

  // عند الضغط على زر تأكيد
  yesBtn.addEventListener('click', function() {
    const phoneNumber = '963932955840'; // ضع رقمك الحقيقي
    const message = 'مرحبا، أود شراء ' + selectedProduct + ' بسعر ' + selectedPrice;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;

    window.open(whatsappLink, '_blank');
    confirmModal.style.display = 'none';
  });

  // عند الضغط على زر إلغاء
  noBtn.addEventListener('click', function() {
    confirmModal.style.display = 'none';
  });

  // عند الضغط على الخلفية خارج المودال
  confirmModal.addEventListener('click', function(e) {
    if (e.target === confirmModal) {
      confirmModal.style.display = 'none';
    }
  });
});