<?php

function getJson(){
    
    $quizJson = file_get_contents("quiz.json"); //get the faqs JSON file
    header('Content-Type: application/json');

    $quizPHP = json_decode($quizJson, true); //turns the JSON object in to a PHP associative array
    
    return $quizPHP;
}

function getQuestions(){
    
    $topic = $_GET['topic'];
    
    $quizPHP = getJson();
    
    if ($topic == "tennis"){
        //get tennis q and as
        $tennisPHP = array_slice($quizPHP, 0, 1);
        $tennisJson = json_encode($tennisPHP);
        echo $tennisJson;
        
        
    } else if ($topic == "football"){
        //get tennis q and as
        $footballPHP = array_slice($quizPHP, 1, 1);
        $footballJson = json_encode($footballPHP);
        echo $footballJson;
        
        
    } else if ($topic == "golf"){
        //get tennis q and as
        $golfPHP = array_slice($quizPHP, 2, 1);
        $golfJson = json_encode($golfPHP);
        echo $golfJson; 
        
        
    } else if ($topic == "cricket"){
        //get tennis q and as
        $cricketPHP = array_slice($quizPHP, 3, 1);
        $cricketJson = json_encode($cricketPHP);
        echo $cricketJson;
        
        
    }else {
        echo "Error: Topic not found.";
    }
}




    //Control code to direct requests
    if (isset($_GET['topic'])) {//If an auth_token exists...

       getQuestions();

        

    }else{ //If no topic is supplied... 
        
        $output = "Error: not topic specified";
        echo $output;


    }




?>