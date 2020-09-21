<?php include 'database/db.php'; ?>
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
    <?php foreach($database as $data){?>  <!-- creazione elementi con valori prelevati dal ""database"" -->
            <div class="container-item">
                <div class="title"><?= $data['title']; ?></div>
                <div class="author"><?= $data['author']; ?></div>
                <div class="year"><?= $data['year']; ?></div>
                <div class="poster"><img src="<?= $data['poster']; ?>" alt="img"></div>
            </div>
        <?php }; ?>
    </div>
    <!-- <script src="dist/app.js"></script> -->
</body>
</html>