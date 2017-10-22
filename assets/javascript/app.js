$(document).ready(function () {

    $('button').on('click', function () {
        var animal = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=VJTk77P2lpJ75Z4d0Iic06ZFqT54JQaE&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function (response) {


                console.log(response)

                var results = response.data;

                console.log(response);

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

    // var animals = [''];


    //This function "adds" the buttons 

    // handles the event when clicked
    $('#theButton').on('click', function () {
        var animalButton = $("#gif-input").val();
        //adds the new animal

        var newButton = $("<button/>").addClass("btn btn-info animal").attr('data-name', animalButton).html(animalButton).css({
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