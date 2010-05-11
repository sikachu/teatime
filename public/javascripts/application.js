var interval;

$(function(){
  if(remaining){
    $('#remaining').css('margin-top', $(document).height() / 2 - 70);
    updateTimer();
    interval = setInterval('updateTimer()', 1000); 
    $('#show').animate({backgroundColor: '#702615'}, remaining * 1000);
  }
});

function updateTimer(){
  if(remaining > 0){
    $('#remaining').html(remaining);
    remaining--;
  } else {
    clearInterval(interval);
    $('#remaining').html("Your tea is ready!");
    alert("Your tea is ready!");
  }
}
