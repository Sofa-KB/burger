$(function() {
    $(".change-devour").on("click", function(event) {
      const id = $(this).data("id");
      const devoured = $(this).data("newdevour");
  
      let isDevoured = {
        devoured: devoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
      }).then(
        function() {
          console.log("changed devoured to", devoured);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#burger").val().trim(),
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
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
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
  