<?php
include '../connection.php';

$username = $data['username'] ?? null;
$password = $data['password'] ?? null;
$user_type = $data['user_type'] ?? 'student';

if ($username === null || $password === null) {
    http_response_code(400);
    echo json_encode(['message' => 'Credentials are required']);
    exit;
}

if (!in_array($user_type, ['student', 'instructor', 'admin'])) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid user type']);
    exit;
}

if (strlen($password) < 8) {
    http_response_code(400);
    echo json_encode(['message' => 'Password should contain more than 8 characters']);
    exit;
}

if (!preg_match('/[A-Z]/', $password)) {
    http_response_code(400);
    echo json_encode(['message' => 'Password must contain at least one uppercase letter.']);
    exit;
}

if (!preg_match('/[a-z]/', $password)) {
    http_response_code(400);
    echo json_encode(['message' => 'Password must contain at least one lowercase letter.']);
    exit;
}

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$query = $connection->prepare("INSERT INTO users (username, password, user_type) VALUES (?, ?, ?)");
$query->bind_param("sss", $username, $hashed_password, $user_type);

if ($query->execute()) {
    http_response_code(201);
    echo json_encode(["message" => "User registered successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $query->error]);
}
?>
