<?php
include '../connection.php';

$query = $connection->prepare("SELECT * FROM `users` WHERE user_type = 'instructor'");
$query->execute();
$result = $query->get_result();

if($result->num_rows != 0) {
    $instructors = [];

    while($instructor = $result->fetch_assoc()) {
      $instructors[] = $instructor;
    }

    http_response_code(200);
    echo json_encode(["instructors" => $instructors]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $query->error]);
}

$query->close(); 
?>