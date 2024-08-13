<?php

$topic = $_GET['topic'] ?? null;
$question = $_GET['question'] ?? null;
$answer = $_GET['answer'] ?? null;
$id = $_GET['id'] ?? null;

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: https://sudharshan.selfmade.one");
header("Access-Control-Allow-Credentials: true");

if(!($topic && $question && $answer && $id)){
    $res = [
        "status" => false,
        "message" => "Invalid request"
    ];

    http_response_code(400);
    die(json_encode($res));
}

require_once "../../conn.php";

try{
    $query = $conn->prepare("UPDATE topic_cards set topic_id=:topic_id, question=:question, answer=:answer where id=:id");
    $query->bindParam(":topic_id", $topic);
    $query->bindParam(":question", $question);
    $query->bindParam(":answer", $answer);
    $query->bindParam(":id", $id);
    $query->execute();

    $res = [
        "status" => true,
        "message" => $query->queryString
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