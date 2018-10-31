window.addEventListener('load', function() {
  var bLazy = new Blazy({
    selector: 'img[data-src]',
    breakpoints: [
      { width: 768, src: 'data-src-xs' },
      { width: 992, src: 'data-src-sm' },
      { width: 1200, src: 'data-src-md' }
    ]
  })

  $('#gallery-modal').on('show.bs.modal', function (event) {
    var img = $(event.relatedTarget)
    var title = img.find('h3').text()
    var description = img.find('.description').text()
    var src = img.find('img').attr('src')

    $(this).find('.modal-title').text(title)
    $(this).find('.modal-description').text(description)
    $(this).find('.modal-body').html('<img src="' + src + '"/>')
  })
})
