// script.js
$(document).ready(function(){

  // animate skill bars from data-level attribute
  $('.skill-bar').each(function(){
    var level = $(this).data('level') || 70;
    // animate inner span
    $(this).find('span').animate({ width: level + '%' }, 1200);
  });

  // smooth scroll for nav anchors that point within page (if any)
  $('a[href^="#"]').on('click', function(e){
    var target = $(this.getAttribute('href'));
    if(target.length){
      e.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 20 }, 600);
    }
  });

  // small click-to-toggle animation on project items
  $('.project h4, .project-detail h3').css('cursor','pointer').on('click', function(){
    $(this).next().slideToggle(300);
    $(this).toggleClass('open');
  });

  // a subtle header pulse on hover
  $('.site-header').hover(function(){
    $(this).stop().animate({ 'box-shadow': '0 18px 38px rgba(36,99,255,0.12)' }, 300);
  }, function(){
    $(this).stop().animate({ 'box-shadow': '0 6px 18px rgba(36,99,255,0.12)' }, 300);
  });

});
