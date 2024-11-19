<?php
include 'connection.php';

$user_id = $_POST['user_id'] ?? null;
$course_id = $_POST['course_id'] ?? null;
$content = $_POST['content']  ?? null;
$is_private = $_POST['is_private'] ?? 0;
if ($user_id == null || $course_id == null || $content == null) {
    http_response_code(400);
    die(json_encode(["message" => "User ID, course ID, and content are required."]));
}

$query = $connection->prepare("INSERT INTO comments (user_id, course_id, content, is_private, created_at) VALUES (?, ?, ?, ?, current_timestamp())");
$query->bind_param("iisi", $user_id, $course_id, $content, $is_private);

if ($query->execute()) {
    http_response_code(201);
    echo json_encode(["message" => "Comment added successfully."]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $query->error]);
}


$query->close();
?>