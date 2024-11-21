<?php

include '../connection.php';

$user_id = $data['userId'] ?? null;
$course_id = $data['courcwId'] ?? null;

if($user_id == null || $course_id == null){
    echo json_encode(['message' => 
        'Invalid user or course'
    ]);
}

$query = $connection -> prepare('INSERT INTO `enrollments` (
`user_id`, `course_id`) VALUES (?, ?);');
$query->bind_param('ii', $user_id, $course_id);
$query->execute();
$result = $query->getResult;

?>