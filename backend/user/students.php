<?php
include '../connection.php';

$query = $connection->prepare("SELECT * FROM `users` WHERE user_type = 'student'");
$query->execute();
$result = $query->get_result();

if($result->num_rows != 0) {
    $students = [];

    while($student = $result->fetch_assoc()) {
      $students[] = $student;
    }

    http_response_code(200);
    echo json_encode(["students" => $students]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $query->error]);
}

$query->close(); 
?>