document.querySelector('#checkout-form')
  .addEventListener('submit', function() {
    var data = "Total: "
      + simpleCart.toCurrency(simpleCart.grandTotal()) + '\n\n'
      + CART_LABEL_NAME.padEnd(35) + ' | '
      + '#'.toString().padStart(3) + ' | '
      + ''.toString().padStart(6)

    simpleCart.each(function(item) {
      g = item.get

      data += '\n'
        + g('name').substring(0, 34).padEnd(35) + ' | '
        + g('quantity').toString().padStart(3) + ' | '
        + (g('price') * g('quantity')).toString().padStart(6)
    })

    this.querySelector('input[name="message"]').value = data
    simpleCart.empty()
  })
