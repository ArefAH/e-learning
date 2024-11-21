<?php
include '../connection.php';

$course_id = $data['courseId'] ?? null;

if($course_id == null){
    echo json_encode(['message'=>'No course ID found']);
}

$query = $connection->prepare('SELECT * FROM assignments AND announcements WHERE course_id = ?');
$query->bind_param('i', $course_id);
$query->execute();
$result = $query->get_result();
if($result->num_rows  != 0 ){
    $array = [];
    while($stream = $result->fetch_assoc()) {
        $array[] = $stream;
      }
      http_response_code(200);
      echo json_encode(["stream" => $array]);
    }
      else {
        http_response_code(500);
        echo json_encode(["message" => "Error: " . $query->error]);
    }




?>