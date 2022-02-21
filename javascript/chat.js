$(document).ready(function()
{

  var user1=document.querySelector(".user1");
  user1.addEventListener("click",function()
  {
  $(".bot3").show();
  $(".user2").hide();
  $(".horizontal-scroll-wrapper").show();
  $(".bot5").show();
  })
  
  var user2=document.querySelector(".user2");
  user2.addEventListener("click",function()
  {
 $(".bot4").show();
 $(".user2").hide();
 var user1 =document.querySelector(".user1");
 user1.innerHTML="<p>No</p>";
 $(".vertical-scroll-wrapper").show();
 $(".bot6").show();
 
  })
})