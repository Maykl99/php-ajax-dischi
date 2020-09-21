let $ = require('jquery');

$(function(){
    readyAjax();
    $('#nome').on('click', 'option', function(){ // evento al click del bottone dinamico
        let val= $(this).val();
        readyAjaxAuthor(val);
    }); 
});

function readyAjax(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/18-09-20/php-ajax-dischi/database/dbJson.php", // prima chiamata ajax
        success: function (response){
            printData(response);
            printAuthor(response);
        },
        error: function(error){
            console.log('Errore ' + error);
        }
    });
};

function readyAjaxAuthor(valore){ // seconda chiamata ajax
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/18-09-20/php-ajax-dischi/database/dbJson.php",
        data:{
            author: valore
        },
        success: function (response){
            $('.container').html('');
            let arr=[];
            if(valore != 'All'){
                for (let i = 0; i < response.length; i++) {
                    if(response[i]['author'] == valore){
                        arr.push(response[i]);
                        printData(arr);
                    }
                }
            }else if(valore == 'All'){
                printData(response);
                console.log(response);
            }
        },
        error: function(error){
            console.log('Errore ' + error);
        }
    });
};

function printData(data){ // funzione stampa valori $database convertiti in formato json
    let source = $("#entry-template").html();
    let template = Handlebars.compile(source);
    let context;
    for(let i=0; i<data.length; i++){
        context={
            'title' : data[i].title,
            'author' : data[i].author,
            'year' : data[i].year,
            'poster' : data[i].poster
        };
        let html = template(context);
        $('.container').append(html);
    }
};

function printAuthor(data){ // funzione stampa option con valore autore
    let source= $("#entry-template1").html();
    let template = Handlebars.compile(source);
    let context;
    for(var i=0; i<data.length; i++){
        context={
            'author': data[i].author
        }
        let html= template(context);
        $('#nome').append(html);
    }
};