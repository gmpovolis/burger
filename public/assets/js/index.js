$(function() {
  $(".devour").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log("id", id)
    var newDevour = $(this).data("newdevour");
    console.log("newDevour", newDevour)
    var newDevourState = {
      devour: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed to devoured", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#addBurger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
      devour: $("[burger_name=devour]:checked").val()
    };

    // Send the POST request.
    if(newBurger.length !== 0){

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created a new burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
    } else {
      alert("Please enter a burger type!");
    }
  });

  $(".delete-burger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted a burger!", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});