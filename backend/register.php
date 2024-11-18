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
if (!in_array($user_type, ['student', 'instructor', 'admin'])) {
    http_response_code(400);
    echo json_encode([
        'message' => 'Invalid Email Address'
    ]);
}

if (strlen($password) < 8) {
    http_response_code(400);
    echo json_encode([
        'message' => 'Password should contain more than 8 characters'
    ]);
}

if (!preg_match('/[A-Z]/', $password)) {
    http_response_code(400);
    echo json_encode([
        'message' => 'Password must contain at least one uppercase letter.'
    ]);
}

if (!preg_match('/[a-z]/', $password)) {
    http_response_code(400);
    echo json_encode([
        'message' => 'Password must contain at least one lowercase letter.'
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