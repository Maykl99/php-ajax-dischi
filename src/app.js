let $ = require('jquery');

$(function(){
    readyAjax();
    $('#nome').on('click', 'option',function(){
        let val= $(this).val();
        console.log(val);
        readyAjaxAuthor(val);
    }); 
});

function readyAjax(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/18-09-20/php-ajax-dischi/database/dbJson.php",
        success: function (response){
            printData(response);
            printAuthor(response);
        },
        error: function(error){
            console.log('Errore ' + error);
        }
    });
}

function readyAjaxAuthor(valore){
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/18-09-20/php-ajax-dischi/database/dbJson.php",
        data:{
            author: valore
        },
        success: function (response){
            $('.container').html('');
            let arr=[];
            for (let i = 0; i < response.length; i++) {
                if(response[i]['author'] == valore){
                    arr.push(response[i]);
                    printData(arr);
                }   
            }

            console.log(arr);
        },
        error: function(error){
            console.log('Errore ' + error);
        }
    });
}


function printData(data){
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
}

function printAuthor(data){
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
}