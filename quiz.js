


function getQuiz(topic_name){
    //get the correct quiz from the server using get request
    var linebreak = document.createElement('br');
    
    $.ajax({
        url: "quiz.php",
        type: "get", //send it through get method
        data: { 
            topic: topic_name, 
        },
        success: function(response) {
            
            //log the response to the server
            console.log(response);
            //get the div that will hold all the quiz stuff
            var quizDiv = document.getElementById("fillQuiz");
            
            //empty the div of any content
            $('#fillQuiz').empty();
           
            //Get the JSON for the topic
            var questions = response[topic_name];
            console.log(questions);
            var topic_form= document.createElement('form');
            
            for (i=0; i<questions.length; i++){
                //for each question object 
                
                //Extract the question
                var question_i = questions[i]["question"]
                
                console.log(question_i);
                //Make it a heading on the page
                var question_text = document.createElement('h4');
                question_text.appendChild(document.createTextNode(question_i));
                
                //create the quiz form
                
                
                quizDiv.appendChild(question_text);
                
                for (j=0; j<3; j++) {
                    //for each option, make a radio button on the form 
                    
                    var option_i = questions[i]["option "+(j+1)];
                    var option_input = document.createElement('input');
                    option_input.setAttribute('type','radio');
                    option_input.setAttribute('name','q1');
                    option_input.setAttribute('value','a'+(j+1));
                    topic_form.appendChild(option_input);
                    topic_form.appendChild(document.createTextNode(option_i));
                    topic_form.appendChild(linebreak);
                    
                    
                }
                
                
                
            }
            quizDiv.appendChild(topic_form);
            
                
            
        },
        error: function(xhr) {
            //Do Something to handle error
            console.log("Error: no data revceived.")
        }
    });
    
}