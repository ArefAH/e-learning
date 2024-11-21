<?php
include '../connection.php';

$course_id = $_POST['course_id'] ?? null;
$title = $_POST['title'] ?? null;
$description = $_POST['description'] ?? null;
$due_date = $_POST['due_date'] ?? null;

if ($course_id == null || $title == null || $description == null || $due_date == null) {
    http_response_code(400);
    echo json_encode(["message" => "All fields are required."]);
}

$query = $connection->prepare("INSERT INTO assignments (course_id, title, description, due_date) VALUES ( ?, ?, ?, ?)");
$query->bind_param("isss",  $course_id, $title, $description, $due_date);

if ($query->execute()) {
    http_response_code(201);
    echo json_encode(["message" => "Assignment created successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $query->error]);
}
$query->close();    
?>