<?php
    include 'db.php';
    header('Content-Type: application/json'); #conversione formato json
    echo json_encode($database);
?>