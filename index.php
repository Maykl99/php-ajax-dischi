<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="dist/app.css">
</head>
<body>
    <div class="container">
        <?php foreach($database as $data){?>
            <div>
                <div><?php echo $data['title']; ?></div>
                <div><?php echo $data['author']; ?></div>
                <div><?php echo $data['year']; ?></div>
                <div><img src="<?php echo $data['poster']; ?>" alt="img"></div>
            </div>
        <?php }; ?>
    </div>
    <script src="dist/app.js"></script>
</body>
</html>