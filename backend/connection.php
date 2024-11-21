<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$host = 'localhost';
$username = 'root';
$password ='';
$dbname = 'learningdb';

$connection = new mysqli($host, $username, $password, $dbname);

if($connection->connect_error){
    die('Connection Error');
}

?>