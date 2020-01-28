<?php

require_once 'DAL.php';

function getAllProducts() {
    $sql = "select ProductName, UnitPrice from Products";
    $allProducts = select($sql);
    return $allProducts;
}