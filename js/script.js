$(document).ready(function(){
   
      //to add a list 
      $("#Add").click(function(){
         var myValue = $("#Addtasks").val();
         if(myValue == ""){
            alert("Enter a task 📝");
         }
         else{
            $("#list-items").append("<li><span class='name'>" + myValue + "</span> <img class ='strike'src='images/Check.svg' alt='strike'><img class='cancel'src='images/XCircle.svg' alt='cancel'></li>");
         }
      });
      
     // to add a list  using enter keypress 
      $("#Addtasks").on('keypress',function(e) {
          if(e.which == 13) {
            $("#Add").click();
         }
      });

      //  to remove the list 
      $("body").on("click", ".cancel", function(){
         $(this).parents('li').remove();
        });
      
      // to strike of the list 
      $("body").on("click", ".strike", function(){
         $(this).parents('li').toggleClass("checked");
      });

});







