$('#about-btn').click(function(){
  $('#about').removeClass('inactive');
  $('#contact').addClass('inactive');
});

$('#contact-btn').click(function(){
  $('#contact').removeClass('inactive');
  $('#about').addClass('inactive');
});