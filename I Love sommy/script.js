
setInterval(function(){
  var nowTime = new Date();
  var startDate = new Date('01-April-2016');
  var togatherTime = nowTime - startDate;

  var years = Math.floor(togatherTime/1000/60/60/24/365).toString();
  var days = Math.floor(togatherTime%(1000*60*60*24*365)/(1000*60*60*24)).toString();
  var hours = Math.floor(togatherTime%(1000*60*60*24)/(1000*60*60)).toString();
  var mins = Math.floor(togatherTime%(1000*60*60)/(1000*60)).toString();
  var secs = Math.floor(togatherTime%(1000*60)/(1000)).toString();
  var togatherTimeFormatted = years + " : " + days + " : " + hours + " : " + mins + " : " + secs;
  document.getElementById("time").innerHTML = togatherTimeFormatted;
},1000);
