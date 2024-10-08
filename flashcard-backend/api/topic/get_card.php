<?php

$topic = $_GET['topic'] ?? null;

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: https://sudharshan.selfmade.one");
header("Access-Control-Allow-Credentials: true");

if(!$topic){
    $res = [
        "status" => false,
        "message" => "Invalid request"
    ];

    http_response_code(400);
    die(json_encode($res));
}

require_once "../../conn.php";

try{
    $query = $conn->prepare("select tc.*, t.name from topic_cards as tc inner join topics as t on t.id = tc.topic_id where name = :topic_id;");
    $query->bindParam(":topic_id", $topic);
    $query->execute();

    $res = [
        "status" => true,
        "message" => $query->fetchAll(PDO::FETCH_ASSOC)
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