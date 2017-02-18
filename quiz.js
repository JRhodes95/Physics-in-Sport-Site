var linebreak = document.createElement('br');


function getQuiz(topic_name){
    
    
    $.ajax({
        url: "quiz.php",
        type: "get", //send it through get method
        data: { 
            topic: topic_name, 
        },
        success: function(response) {
            console.log(response);
            
            var quizDiv = document.getElementById("fillQuiz");
            
            var questions = response[topic_name];
            
            for (i=0; i<questions.length; i++){
                
                var question_i = questions[i]["question"]
                
                //make the question entry
                var question_text = document.createElement('h4');
                question_text.appendChild(document.createTextNode(question_i));
                quizDiv.appendChild(question_text);
                
                var topic_form= document.createElement('form');
                quizDiv.appendChild(topic_form);
                
                for (j=0; j<3; j++) {
                    
                    var option_i = questions[i]["option "+(j+1)];

                    var option_input = document.createElement('input');
                    option_input.setAttribute('type','radio');
                    option_input.appendChild(document.createTextNode(option_i));
                    option_input.appendChild(linebreak);
                    topic_form.appendChild(option_input);
                    
                }
                
                
            }
            
            
                
            
        },
        error: function(xhr) {
            //Do Something to handle error
            console.log("Error: no data revceived.")
        }
    });
    
}