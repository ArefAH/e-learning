<?php
include 'connection.php';
require 'vendor/autoload/php';
$secretKey = 'SecretKey';

use Firebase\JWT\JWT;

$username = $_POST['username'] ?? null;
$password = $_POST['password'] ?? null;

if($username == null || $password == null){
    echo json_encode([
        'message' => 'Credentials are required'
    ]);
}

$query = $connection->prepare('SELECT * FROM users WHERE username = ?');
$query->bind_param("s", $username);
$query->execute();
$result = $query->get_result();

if($result -> num_rows != 0){
    $user = $result->fetch_assoc();
    $check = password_verify($password, $user['password']);
    if($check){
        $payload = [
            'userId' => $user['id']
        ];
        $token = JWT::encode($payload, $secretKey, 'HS256');
        echo json_encode([
            'message' => 'Successful',
            'user' => $user ,
            'access_token' => $token
        ]);
    }
    else{
        http_response_code(400);
        echo json_encode([
            'message' => 'Invalid Credentials'
        ]);
    }
}
else{
    http_response_code(400);
    echo json_encode([
        'message' => 'Invalid Credentials'
    ]);
}
?>