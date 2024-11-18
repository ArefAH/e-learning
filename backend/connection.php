<?php
$host = 'localhost';
$username = 'root';
$password ='';
$dbname = 'learningdb';

$connection = new mysqli($host, $username, $password, $dbname);

if($connection->connect_error){
    die('Connection Error');
}

?>