/*
  Full Name: Shubhamjit Singh
  Student ID: 200395159

  Instructions:
    Follow the steps below. If you have any questions
    please feel free to use Slack to communicate. You
    are allowed to discuss the lab with other students
    but you ARE NOT permitted to copy/paste or share
    code.
  
  Rubric:
    Steps: 11.5 points
    Code Format: 10 points
    Github Link: 10 points

  NOTE: The code format and Github link marks are
    only awarded if the steps have been completed.
    (Code formatting is the visual structure of
      you code. I expect that you have used proper
      tabbing of nested structures so code readability
      is adequate.)
*/

/*
  Step 1 (2.5 points):
    Create an array that contains 4 people objects.
    Each object must have at least 2 properties.
*/
    console.clear();

    const people = [{

        name: "John",
        hobbie: "wrestling"

    },{

        name: "Roman",
        hobbie: "sky diving"

    },{

        name: "Wade",
        hobbie: "fighting"
        
    },{

        name: "Rey",
        hobbie: "using the force"
        
    }]
    

/*
  Step 2 (6 points):
    Create an arrow function that accepts
    a destructured object as an argument. In the
    body of your function, console.log a string
    template utilizing the properties you
    destructured.
*/

    const bio = ({name, hobbie}) => {
      console.log(`${name} is a fearless person as he does ${hobbie} very easily`);
    }   

/*
  Step 3 (3 points):
    Loop over your array using a for/of loop.
    Call your arrow function passing the array item
    as an argument.
*/

for (const person of people) {
  bio(person);
}