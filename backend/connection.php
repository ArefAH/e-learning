<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET");

$host = 'localhost';
$username = 'root';
$password ='';
$dbname = 'learningdb';

$connection = new mysqli($host, $username, $password, $dbname);

if($connection->connect_error){
    die('Connection Error');
}

?>