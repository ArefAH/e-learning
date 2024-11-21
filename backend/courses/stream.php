<?php
include '../connection.php';

$course_id = $data['courseId']?? 1;

if ($course_id === null) {
    http_response_code(400);
    echo json_encode(['message' => 'No course ID found']);
    exit;
}

try {
    $query = $connection->prepare('
        SELECT 
            description, 
            creation_date, 
            "Assignment" AS source 
        FROM assignments 
        WHERE course_id = ?
        UNION 
        SELECT 
            content, 
            creation_date, 
            "Announcement" AS source 
        FROM announcements 
        WHERE course_id = ?
        ORDER BY creation_date DESC;
    ');
    
    $query->bind_param('ii', $course_id, $course_id);
    $query->execute();

    $result = $query->get_result();
    if ($result->num_rows > 0) {
        $array = [];
        while ($stream = $result->fetch_assoc()) {
            $array[] = $stream;
        }
        http_response_code(200);
        echo json_encode(["stream" => $array]);
    } else {
        http_response_code(404);
        echo json_encode(["message" => "No data found for the given course ID."]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $e->getMessage()]);
}
?>
