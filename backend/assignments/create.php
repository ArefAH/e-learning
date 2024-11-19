<?php
include 'connection.php';
require "vendor/autoload.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$secretKey = "SecretKey";
$headers = getallheaders();
$jwt = $headers["Authorization"];

$key = new Key($secretKey, "HS256");
$payload = JWT::decode($jwt, $key); 

$instructor_id = $payload->userId;
$course_id = $_POST['course_id'] ?? null;
$title = $_POST['title'] ?? null;
$description = $_POST['description'] ?? null;
$due_date = $_POST['due_date'] ?? null;

if ($instructor_id == null || $course_id == null || $title == null || $description == null || $due_date == null) {
    http_response_code(400);
    echo json_encode(["message" => "All fields are required."]);
}

$query = $connection->prepare("INSERT INTO assignments (instructor_id, course_id, title, description, due_date, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
$query->bind_param("iisss", $instructor_id, $course_id, $title, $description, $due_date);

if ($query->execute()) {
    http_response_code(201);
    echo json_encode(["message" => "Assignment created successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $query->error]);
}
$query->close();    
?>