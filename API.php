<?php

require_once 'BLL.php';

$command = $_REQUEST["command"];

switch($command) {
    
    case "allProducts":
        $allProducts = getAllProducts();
        $json = json_encode($allProducts);
        echo $json;
        break;
}