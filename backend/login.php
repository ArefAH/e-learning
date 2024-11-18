<?php
include 'connection.php';

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
        echo json_encode([
            'message' => 'Successful',
            'user' => $user 
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