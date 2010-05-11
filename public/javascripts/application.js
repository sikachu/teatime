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
    remaining--;
    $('#remaining').html(remainingToText());
  } else {
    clearInterval(interval);
    $('#remaining').html("Your tea is ready!");
    alert("Your tea is ready!");
  }
}

function remainingToText(){
  hour = Math.floor(remaining / 3600);
  minute = Math.floor((remaining % 3600) / 60);
  second = ((remaining % 3600) % 60);

  var output = "";
  if(hour > 1){ output += hour + " hours "; } else{ if(hour > 0){ output += "1 hour "; }} 
  if(minute > 1){ output += minute + " minutes "; } else{ if(minute > 0){ output += "1 minute "; }} 
  if(second > 1){ output += second + " seconds"; } else { output += "1 second"; }
  return output;
}
