<?php
include 'connection.php';

$user_id = $_POST['user_id'] ?? null;

    if ($user_id == null) {
        http_response_code(400);
        die(json_encode(["message" => "Invalid user ID."]));
    }

    $query = $connection->prepare("SELECT c.course_id, c.title, c.description FROM enrollments e JOIN courses c ON e.course_id = c.course_id WHERE e.user_id = ?");
    $query->bind_param("i", $user_id);
    $query->execute();
    $result = $query->get_result();
    if($result -> num_rows != 0){    
    $courses = $result->fetch_all(MYSQLI_ASSOC);

        http_response_code(200);
        echo json_encode(["courses" => $courses]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Error: " . $query->error]);
    }

    $query->close();
?>