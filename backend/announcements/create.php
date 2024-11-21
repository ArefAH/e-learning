<?php
include '../connection.php';
require "vendor/autoload.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$secretKey = "MyTopSecretKey";
$headers = getallheaders();
$jwt = $headers["Authorization"];
$key = new Key($secretKey, "HS256");
$payload = JWT::decode($jwt, $key);

$user_id = $payload->userId;
$course_id = $_POST['course_id'] ?? null;
$content = $_POST['content'] ?? null;

if($course_id == null || $content == null){
    echo json_encode([
        'message' => 'All fields are required.'
    ]);
}

$query = $connection->prepare('INSERT INTO announcements (user_id, course_id, content) VALUES (?, ?, ?)');
$query->bind_param('iis', $user_id, $course_id, $content);
if ($query->execute()) {
    http_response_code(201);
    echo json_encode(["message" => "Announcement posted successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $query->error]);
}

$query->close();

?>