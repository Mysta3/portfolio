//Check off Specific todos by clicking
$("ul").on("click", "li", function(){ //add a listner to the element that is there when the page is loaded(ul) so that any li that is clicked will fire this event.
    $(this).toggleClass("completed"); //toggles the completed class on and off of elements.
});

//click on x to delete To-do
$("ul").on("click", "span", function(event){  //targeting span and adding click listner jQuery
    $(this).parent().fadeOut(200,function(){ //fadeOut set to 500 miliseconds and has a function to remove the element.
        $(this).remove();
    }); //This keyword targets span , parent keyword targets li, remove will remove the whole li.
    event.stopPropagation(); //stops other click listeners from starting. aka event bubbling.
});

//add a listener to text input
$("input[type = 'text']").keypress(function(event){ //make sure you check your spacing between input and type
    if(event.which === 13){ //the enter key number is 13. which keyword is method that is used to determine which key you pressed.
        var todoText = $(this).val(); //grab text from input

        //clear inputbox
        $(this).val("");

        //create a new li and add (append method) to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle();

})