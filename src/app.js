let $ = require('jquery');

$(function(){
    readyAjax();
});

function readyAjax(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/18-09-20/php-ajax-dischi/database/dbJson.php",
        success: function (response) {
            console.log(response);
            printData(response);
            printAuthor(response);
        },
        error: function(error){
            console.log('Errore ' + error);
        }
    });
}

function printData(data){
    let source = document.getElementById("entry-template").innerHTML;
    let template = Handlebars.compile(source);
    let context;
    for(var i=0; i<data.length; i++){
        context={
            'title' : data[i].title,
            'author' : data[i].author,
            'year' : data[i].year,
            'poster' : data[i].poster
        }
        let html = template(context);
        $('.container').append(html);
    }
}

function printAuthor(data){
    let source= document.getElementById("entry-template1").innerHTML;
    let template = Handlebars.compile(source);
    let context;
    for(var i=0; i<data.length; i++){
        context={
            'author': data[i].author
        }
        let html= template(context);
        $('#nome').append(html);
    }
}