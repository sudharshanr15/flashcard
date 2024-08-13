<?php

$topic = $_GET['topic'] ?? null;
$question = $_GET['question'] ?? null;
$answer = $_GET['answer'] ?? null;

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

if(!($topic && $question && $answer)){
    $res = [
        "status" => false,
        "message" => "Invalid request"
    ];

    http_response_code(400);
    die(json_encode($res));
}

require_once "../../conn.php";

try{
    $query = $conn->prepare("INSERT INTO topic_cards set topic_id=:topic_id, question=:question, answer=:answer");
    $query->bindParam(":topic_id", $topic);
    $query->bindParam(":question", $question);
    $query->bindParam(":answer", $answer);
    $query->execute();

    $res = [
        "status" => true
    ];
    $conn = null;

    die(json_encode($res));
}catch(Exception $e){
    $res = [
        "status" => false,
        "message" => $e->getMessage()
    ];
    $conn = null;

    http_response_code(500);
    die(json_encode($res));
}