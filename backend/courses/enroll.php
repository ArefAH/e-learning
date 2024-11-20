<?php
include '../connection.php';

$user_id = $data['user_id'] ??  null;
$course_id = $data['course_id']??  null;

    if ($user_id == null || $course_id == null) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid user ID or course ID."]);
    }

    $query = $connection->prepare("INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)");
    $query->bind_param("ii", $user_id, $course_id);

    if ($query->execute()) {
        http_response_code(201);
        echo json_encode(["message" => "Enrollment successful."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Error: " . $query->error]);
    }

    $query->close();

?>