$(document).ready(function () {

var topics = [
    'Kitten',
    'Cat',
    'Black Cats',
    'White Cats',
    'Tabby Cats',
    'Fluffy Kittens',
    'Kittens Running',
    'Cats and Dogs',
    'Kittens and Dogs',
    'Kittens and Goats'
];

    createButtons();

    function createButtons() {
        for (i = 0; i < topics.length; i++) {
            var topicButton = $("<button>").addClass("btn btn-info animal").attr('data-name', topics[i]).html(topics[i]).css({
                'margin': '5px'
            });
            $("#animalsbuttons").append(topicButton);
        }
    };

    $("button").on('click', function () {
        var animal = $(this).data('name');
        console.log(name);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=VJTk77P2lpJ75Z4d0Iic06ZFqT54JQaE&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function (response) {


                // console.log(response)

                var results = response.data;

                // console.log(response);

                for (var i = 0; i < results.length; i++) {

                    var animalDiv = $('<div/>');
                    animalDiv.attr("class", "col-md-3");

                    var p = $('<h3>');
                    var p = $("<h3>").html("Rating: " + results[i].rating);

                    var animalImage = $('<img/>');
                    animalImage.addClass('animalGif');

                    animalImage.attr('src', results[i].images.fixed_height.url)
                    animalImage.attr('data-still', results[i].images.fixed_height_still.url)
                    animalImage.attr('data-animate', results[i].images.fixed_height.url)

                    animalImage.attr('data-state', 'still');

                    animalDiv.append(animalImage).append(p);
                    animalDiv.prependTo($('#gifs'));
                }

                $('.animalGif').on('click', function () {

                    var state = $(this).attr('data-state');
                    console.log(this);

                    if (state === 'still') {

                        $(this).attr('src', $(this).data('animate'));

                        $(this).attr('data-state', 'animate');

                    } else {

                        $(this).attr('src', $(this).data('still'));

                        $(this).attr('data-state', 'still');
                    }
                });
            });
    });

    //This function "adds" the buttons 
    $('#theButton').on('click', function () {

        var animalButton = $("#gif-input").val();
        topics.push(animalButton);
        console.log(topics);

        //adds the new animal

        var newButton = $("<button>").addClass("btn btn-info animal").attr('data-name', animalButton).html(animalButton).css({
            'margin': '5px'
        })

        $("#animalsbuttons").append(newButton);


        $("#animalsbuttons").on('click', function () {

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalButton + "&api_key=VJTk77P2lpJ75Z4d0Iic06ZFqT54JQaE&limit=10";
            console.log(animalButton);

            $.ajax({
                    url: queryURL,
                    method: 'GET'
                })

                .done(function (response) {

                    var results = response.data;

                    for (var i = 0; i < results.length; i++) {

                        var animalDiv = $('<div/>');
                        animalDiv.attr("class", "col-md-3");


                        var p = $('<h3>');
                        var p = $("<h3>").html("Rating: " + results[i].rating);

                        var animalImage = $('<img/>');
                        animalImage.addClass('animalGif');

                        animalImage.attr('src', results[i].images.fixed_height_still.url)
                        animalImage.attr('data-still', results[i].images.fixed_height_still.url)
                        animalImage.attr('data-animate', results[i].images.fixed_height.url)

                        animalImage.attr('data-state', 'still');

                        animalDiv.append(animalImage).append(p);

                        animalDiv.prependTo($('#gifs'));
                    }

                    $('.animalGif').on('click', function () {

                        var state = $(this).attr('data-state');
                        console.log(this);

                        if (state === 'still') {

                            $(this).attr('src', $(this).data('animate'));

                            $(this).attr('data-state', 'animate');

                        } else {

                            $(this).attr('src', $(this).data('still'));

                            $(this).attr('data-state', 'still');
                        }
                    });
                });
        });

        $("#gif-input").val("");
        return false;
    });

});
//         var newanimal = $("#gif-input").val();
//         topics.push(newanimal);
//         // $("#animalbuttons").html();
//         var topicButton = $("<button>").addClass("btn btn-info animal").attr('data-name', newanimal).html(newanimal).css({
//             'margin': '5px'
//         });
//         $("#animalsbuttons").append(topicButton);
//         // $("#animalbuttons").empty();
//         // $("#animalbuttons").html("");

//         // createButtons();      
