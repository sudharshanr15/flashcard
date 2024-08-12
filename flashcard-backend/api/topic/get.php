<?php

require_once "../../conn.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

try{
    $query = "SELECT * from topics";
    $result = $conn->prepare($query);
    $result->execute();

    // $result = $result->setFetchMode(PDO::FETCH_ASSOC);
    $response = [
        "status" => true,
        "message" => $result->fetchAll(PDO::FETCH_ASSOC)
    ];

    $conn = null;

    die(json_encode($response));
}catch(Exception $e){
    $res = [
        "status" => false,
        "message" => $e->getMessage()
    ];

    $conn = null;

    http_response_code(500);
    die(json_encode($res));
}
