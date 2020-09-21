<?php
    include 'db.php';

    // vedi se l'autore è vuoto
    // se si fai echo json_encode($database);

    // altrimenti
    // ti calcoli il nuovo ti crei 


    #trasformazione in formato json
    header('Content-Type: application/json');
    echo json_encode($database);

?>