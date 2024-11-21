<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization, HTTP");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'learningdb';

$connection = new mysqli($host, $username, $password, $dbname);

if ($connection->connect_error) {
    die('Connection Error');
}
?>
