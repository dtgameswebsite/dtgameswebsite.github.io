(function($) {
  "use strict"; // Start of use strict

document.getElementById("email").focus();
document.getElementById("email").select();
  // No JS

})(jQuery); // End of use strict


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function SubForm (){
  if (!validateEmail($("#email").val()))
  {
    alert("Please enter a valid email address.");
    return;     
  }
  

  var d = new Date();
      $("#date_time").val(d.toString());      
  var data = $("#myForm").serializeArray();

  $("#submit").hide();
  $("#email").hide();

  $("#processing").show();

  $.ajax({
    url:"https://api.apispreadsheets.com/data/4137/",
    type:"post",
    data:data,
    success: function(){
      //alert("Thanks for subscribing!")
        $("#processing").hide();
		$("#thanks").show();
    },
    error: function(){
      alert("There was an error :(")

	  $("#processing").hide();
      $("#submit").show();
      $("#email").show();
    }
  });
}