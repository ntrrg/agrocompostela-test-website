window.addEventListener('load', function() {
  var bLazy = new Blazy({
    selector: 'img[data-src]',
    breakpoints: [
      { width: 768, src: 'data-src-xs' },
      { width: 992, src: 'data-src-sm' },
      { width: 1200, src: 'data-src-md' }
    ]
  })
})
