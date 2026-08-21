

$(document).ready(function(){

   $("#mainHeading").css("color" , "blue");

//   $("#btn").hide();


   //  $("p").css("color", "green");

  $(".info").css("font-weight","bold");

//   $("p").css("color", "green");

  $("input[type = 'text']").val("shubham")

  $("#registerbtn").click(function(){

   $(".inputfield").css("border", "2px solid green");

   $("#resisterbtn").hide();

   $("#msg").show();
  })

  $("#btn").click(function () {
    $("#para").toggleClass("change");
  });
  
      $("#hideBtn").click(function () {
      $("#box").hide();
    });

    $("#showBtn").click(function () {
      $("#box").show();
    });

    $(".btn1").click(function(){

      $(".form").css("border","2px solid green");
    
      $(".btn1").hide();

      $("#masage").show();

    })


    $(".hide").click(function(){
      $(".box1").fadeOut();

    })

    $(".show").click(function(){

      $(".box1").fadeIn();
      $(".box1").css("background-color", "green");

      $(".box1").css("color","black");

      $(".box1").toggleClass("active")


    })

    $("#btn2").click(function () {

    $("#para1").fadeOut();

    $("#btn3").click(function(){

      $("#para1").fadeIn();
    })

    $("#btn4").click(function(){

      $("#para1").fadeToggle();

    })


});
})

  
  