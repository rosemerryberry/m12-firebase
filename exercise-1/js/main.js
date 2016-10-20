// Main.js
$(function() {
    // Setup: Initialize Firebase using the configuration of your project
    // Configuration: replace <THESE_VALUES> with your values from firebase
    
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDLOT1bU619sAXZ6O9qmrX_RlH4GU5OhGo",
        authDomain: "project1-e27e4.firebaseapp.com",
        databaseURL: "https://project1-e27e4.firebaseio.com",
        storageBucket: "project1-e27e4.appspot.com",
        messagingSenderId: "197632795046"
      };
      firebase.initializeApp(config);
    

    // Creating Data: Create new database reference 'todos'
    var todos = firebase.database().ref('todos');
    
    // Reading Data:
    // Set listener: on change, empty the todo list, and iterate through to make a new list

    // Listen to changes to 'todos': will execute on connection, and on any change (value)
    todos.on('value', function(snapshot) {
        // Get the value of the data

        $('#todo-list').empty();
        var data = snapshot.val();
        console.log(data);
        
        // Iterate through key/value pairs
        Object.keys(data).forEach(function(key) {
            // Get value of object using key
            var value = data[key];

            renderTodo(key, data[key]);

            // Create an element with the key as an ID
            // var body = $('body');
            // var button = $('<button>').attr('id', key);
            // button.on('click', function() {
            //     // Get the key back from the button
            //     var key = this.id;

                // Update element

        });
        //body.append(button);
    });

    //});



    // Rendering Data: Function to make todos
    var renderTodo = function(id, content) {
       $('#todo-list').append(content);
        // Create new todo <div> with classes 'todo', and the priority of the item
        var todoItem = $('<div>').addClass("todo" + content.urgency);

        // Create an <h5> element, set it's text to the description, and class as the status
        var h5 = $('<h5>').text(content.description).addClass(content.status);

        todoItem.append(h5);

        // Update Data: create a check icon with click event
        var checkbox = $("<i>").addClass("fa fa-check fa-2x" + content.status);
        todoItem.append(checkbox);
        checkbox.on('click', function() {
            var status = content.status == 'complete' ? 'incomplete' : 'complete';
            var childRef = todos.child(id);
            childRef.set({
                description:content.description,
                urgency:content.urgency,
                status:status
            });
        });
            // Flip the status on click
            // Set the child values of the item


        // Deleting data: Delete icon: on click, remove the reference
        var deleteIcon = $('<i>').addClass('fa fa-times fa-2x');
        deleteIcon.on('click', )

        // Update/Delete data: append the icons to the newTodo item


        // Append newTodo item to item with id #todo-list
        $('#todo-list').append(todoItem);
    };

    // Reading Data: Form submission
    $('form').on('submit', function(event) {
        event.preventDefault();

        // Get values
        var priority = $(this).find('input:checked')[0].id;
        var text = $(this).find('input').val();

        // Reading Data: Push new item into `todos` reference
        todos.push({
            description: text,
            urgency: priority,
            priority: 'incomplete'
        });

        // Reset the form
        this.reset();
    });
});
