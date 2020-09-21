<?php
    include 'db.php';
    /* header('Content-Type: application/json');
    echo json_encode($database); */


    
    if(isset($_GET['nomeVal'])):
        foreach($database as $val){ // devo ciclare il db
            if(in_array($_GET['nomeVal'],$database)){

                array_push($author,$val);
                header('Content-Type: application/json');
                echo json_encode($author); 
            } 
        }; 
    else: 
        header('Content-Type: application/json');
        echo json_encode($database);
    endif;

    
?>