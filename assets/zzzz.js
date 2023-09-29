<script>
     // Check if the product object is available and has a handle.
    if ({{ product | json }} && {{ product.handle | json }}) {
      const productHandle = {{ product.handle | json }};
      
      // Fetch the product data using Shopify's AJAX API.
      fetch(`/products/${productHandle}.json`)
        .then(response => response.json())
        .then(productData => {
          console.log('Product Data:', productData);

       
        })
        .catch(error => {
          console.error('Error fetching product data:', error);
        });
    }
    var root = document.querySelector('#main-product--{{ section.id }}')

    root.querySelectorAll('.main-product-option input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
    var selectedOptions = []
    root.querySelectorAll('.main-product-option input[type="radio"]:checked').forEach(radio => {
    selectedOptions.push(radio.value)
})
    })
    })




</script>