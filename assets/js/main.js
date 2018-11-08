// Lazy loading

var bLazy = new Blazy({
  selector: 'img[data-src]',
  breakpoints: [
    { width: 768, src: 'data-src-xs' },
    { width: 992, src: 'data-src-sm' },
    { width: 1200, src: 'data-src-md' }
  ]
})

// Gallery modal

$('#gallery-modal').on('show.bs.modal', function (event) {
  var img = $(event.relatedTarget)
  var title = img.find('h3').text()
  var description = img.find('.description').text()
  var src = img.find('img').attr('src')

  $(this).find('.modal-title').text(title)
  $(this).find('.modal-description').text(description)
  $(this).find('.modal-body').html('<img src="' + src + '"/>')
})

// Currency management

var currency = localStorage.getItem('currency')

if (currency === null) {
  currency = DEFAULT_CURRENCY
  localStorage.setItem('currency', currency)
}

simpleCart.currency({
  code: 'VES',
  name: 'Bolivar Soberano',
  symbol: 'VES '
})

simpleCart({
  cartStyle: 'table',

  cartColumns: [
    { attr: 'name', label: CART_LABEL_NAME },
    { attr: 'quantity', label: '#' },
    { attr: 'total', view: 'currency' },

    {
      view: 'remove',
      label: '<a href="javascript:;" aria-hidden="true" '
             + 'class="simpleCart_empty glyphicon glyphicon-trash"></a>',
      text: '<span aria-hidden="true" class="glyphicon glyphicon-trash">'
            + '</span>'
    },
  ],

  currency: currency
})

$('.currency-selector li a').click(function(e) {
  e.preventDefault()
  setCurrency(this.dataset.currency)
})

function setCurrency(c) {
  if (simpleCart.grandTotal() != 0) {
    alert(CART_ALERT)
    return
  }

  console.log(c)
}

