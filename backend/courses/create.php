<?php
include '../connection.php';

$title = $data['title'] ?? null;
$description = $data['description'] ?? null;
$code = $data['code'] ?? null;

if ($title == null || $description == null || $code == null) {
        http_response_code(400);
        echo json_encode(["message" => "Course title, description, and code are required."]);
}

$query = $connection->prepare("INSERT INTO courses (title, description, code) VALUES (?, ?, ?)");
$query->bind_param("sss", $title, $description, $code);

if ($query->execute()) {
        http_response_code(201);
        echo json_encode(["message" => "Course created successfully."]);
} else {
        http_response_code(500);
        echo json_encode(["message" => "Error: " . $query->error]);
}

$query->close();
?>