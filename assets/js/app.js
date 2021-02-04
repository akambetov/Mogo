document.body.addEventListener('click', accordionShow)

function accordionShow(e) {
  const target = e.target
  if (target.classList.contains("accordion__title") || target.classList.contains("accordion__header") || target.classList.contains("accordion__icon")) {
    target.closest('.accordion__item').classList.toggle('active')
  }
}

// REVIEWS http://kenwheeler.github.io/slick/
// const slider = $('#reviewsSlider')
// const slider_2 = $('#reviewsSlider-2')
// slider.slick ({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   fade: true,
//   arrows: false,
//   dots: true
// })
// slider_2.slick ({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   fade: true,
//   arrows: false,
//   dots: true
// })

$(function () {
  // Fixed Header при скроле страницы
  let introH = $('#intro').innerHeight()
  let header = $('#header')
  let scrollOffset = $(window).scrollTop()
  
  checkScroll(scrollOffset)

  $(window).on('scroll', function () {
    scrollOffset = $(this).scrollTop()
    checkScroll(scrollOffset)
    // console.log(scrollOffset + '---' + introH)
  })

  function checkScroll (scrollOffset) {
    scrollOffset >= introH ? header.addClass('fixed') : header.removeClass('fixed')
  }

  // Smooth Scroll
  $('[data-scroll]').on('click', function (e) {
    e.preventDefault()
    const $this = $(this)
    const blockId = $this.data('scroll')
    const blockOffset = $(blockId).offset().top
    // console.log(blockId)
    // console.log(blockOffset)

    // window.scrollTo(0, blockOffset)  // без анимации
    $('html, body').animate({
      scrollTop: blockOffset
    }, 700)
  
    
    $this.addClass('active')
    $('#nav a').removeClass('active')
    console.log($('#nav').hasClass('active'))
    if ($('#nav').hasClass('active')) {
      header.removeClass('active')
      $('#nav').removeClass('active')
      $('#nav-toggle').removeClass('active')
    }
    
  })
  // Menu Nav toggle
  $('#nav-toggle').on('click', function (e) {
    e.preventDefault()
    header.toggleClass('active')
    $('#nav').toggleClass('active')
    $(this).toggleClass('active')
  })

  // Slider
  // REVIEWS http://kenwheeler.github.io/slick/
  $('[data-slider]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false
  })
})