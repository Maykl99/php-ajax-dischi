<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Musica</title>
    <link rel="stylesheet" href="dist/app.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <div class="container">
        <!-- inserimento valori dinamici -->
    </div>

   <select id="nome" name="nomeVal"><span>
        <!-- inserimento valori dinamici -->
        <option value="All">All</option>
    </select>

    <script id="entry-template" type="text/x-handlebars-template">
        <div class="container-item">
            <div class="title">{{title}}</div>
            <div class="poster"><img src="{{{poster}}}" alt="img-{{{title}}}"></div>
            <div class="author">{{author}}</div>
            <div class="year">{{year}}</div>
        </div>
    </script>

    <script id="entry-template1" type="text/x-handlebars-template">
        <option value="{{author}}">{{author}}</option>
    </script>
    <script src="dist/app.js"></script>
</body>
</html>