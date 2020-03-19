$(function() {
    $(".change-devoured").on("click", function(event) {
     const id = $(this).data("id");
     const eaten = $(this).data("eaten");
  
     const isEaten = {
        devoured: eaten
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isEaten
      }).then(
        function() {
          console.log("changed devoured to", eaten);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
     const newBurger = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=devoured]:checked").val().trim()
      };
    
      $.ajax("/api/cats", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
     const id = $(this).data("id");
    
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  