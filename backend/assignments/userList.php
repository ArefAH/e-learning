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

$query = $connection->prepare("SELECT a.assignment_id, a.title, a.description, a.due_date, c.title 
AS course_title 
FROM enrollments e 
JOIN courses c ON e.course_id = c.course_id 
JOIN assignments a ON a.course_id = c.course_id 
WHERE e.user_id = ?");
$query->bind_param("i", $user_id);
$query->execute();
$result = $query->get_result();
if($result->num_rows != 0) {
    $assignments = [];
    while($assignment = $result->fetch_assoc()) {
      $assignments[] = $assignment;
    }
    http_response_code(200);
    echo json_encode(["assignments" => $assignments]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $query->error]);
}

$query->close();


?>