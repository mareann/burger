// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-burger").on("click", function(event) {
    console.log("js/burgers.js: .devour-burger")
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("js/burgers.js: .ajax /api/burgers "+id+" devoured changed to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
/*
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("js/burgers.js: .create-form")
    var newCat = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newCat
    }).then(
      function() {
        console.log("js/cat.js: .ajax /api/cats created new cat "+newCat.name);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
         console.log("js/cat.js: .delete-cat .ajax /api/cats deleted cat "+id);

        //console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });*/
});
