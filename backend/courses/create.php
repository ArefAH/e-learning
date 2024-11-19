<?php
include 'connection.php';

    $title = $_POST['title'] ?? null;
    $description = $_POST['description'] ?? null;

    if ($title == null || $description == null) {
        http_response_code(400);
        echo json_encode(["message" => "Course title and description are required."]);
    }

    $query = $connection->prepare("INSERT INTO courses (title, description) VALUES (?, ?)");
    $query->bind_param("ss", $title, $description);

    if ($query->execute()) {
        http_response_code(201);
        echo json_encode(["message" => "Course created successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Error: " . $query->error]);
    }

    $query->close();
?>