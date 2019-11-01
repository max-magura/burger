
$(function() {
  $(".devour").on("click", function(event) {
    console.log("HEY YOU ATE ME")
    var id = $(this).data("id");
    var isDevoured = $(this).data("isDevoured");

    var newDevourState = {
      devoured: isDevoured
    };

    $.ajax("api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("has been devoured", isDevoured);

        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
  
    console.log("I HIT THE SUBMIT BUTTOOOOOOOOON")
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerSubmit").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() { 
        console.log("created new burger");
        location.reload();
      }
    );
  });


});