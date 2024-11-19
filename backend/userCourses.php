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

if($payload->user_type != 'student') {
    http_response_code(401);

    echo json_encode([
      "message"=> "Unauthorized"
    ]);

    return;
}

$user_id = $payload->userId;


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