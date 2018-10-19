$(window).load(function() {
  $("#product-deals").flexisel({
    visibleItems: 1,
    itemsToScroll: 1,
    animationSpeed: 1000,
    autoPlay: true,
    autoPlaySpeed: 5000,    		
    pauseOnHover: true
  })

  $("#recent-products").flexisel({
    visibleItems: 3,
    itemsToScroll: 3,
    animationSpeed: 1000,
    autoPlay: true,
    autoPlaySpeed: 3000,    		
    pauseOnHover: true,
    enableResponsiveBreakpoints: true,
    responsiveBreakpoints: { 
      portrait: { 
        changePoint: 480,
        visibleItems: 1,
        itemsToScroll: 1
      }, 
      landscape: { 
        changePoint: 640,
        visibleItems: 1,
        itemsToScroll: 1
      },
      tablet: { 
        changePoint: 769,
        visibleItems: 2,
        itemsToScroll: 1
      }
    }
  })
})

