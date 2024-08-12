<?php

$card = $_GET['card'] ?? null;

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

if(!$card){
    $res = [
        "status" => false,
        "message" => "Invalid request"
    ];

    http_response_code(400);
    die(json_encode($res));
}

require_once "../../conn.php";

try{
    $query = $conn->prepare("DELETE FROM topic_cards where id=:id");
    $query->bindParam(":id", $card);
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