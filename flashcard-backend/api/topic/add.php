<?php

$name = $_GET['name'] ?? null;

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");

if(!$name){
    $res = [
        "status" => false,
        "message" => "Invalid request"
    ];

    http_response_code(400);
    die(json_encode($res));
}

require_once "../../conn.php";

try{
    $query = $conn->prepare("INSERT INTO topics set name=:name");
    $query->bindParam(":name", $name);
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