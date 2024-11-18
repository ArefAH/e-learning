<?php
include 'connection.php';

$username = $_POST['username'] ?? null;
$password = $_POST['password'] ?? null;
$user_type = $_POST['user_type'] ?? null;

if ($username == null || $password == null || $user_type == null) {
    http_response_code(400);
    echo json_encode([
        'message' => 'Credentials are required'
    ]);
}

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$stmt = $connection->prepare("INSERT INTO users (username, password, user_type) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $hashed_password, $user_type);

if ($stmt->execute()) {
    echo "User registered successfully.";
} else {
    echo "Error: " . $stmt->error;
}

?>