# Rating App

Click [here](https://bk-ft-ratingapp.herokuapp.com/) to demo the application.

## Challenge

My challenge was to produce a website that asks for, and stores, a simple rating score.

## Getting Started

### Prerequisites

The application uses MongoDB in development and test which will need to be installed before the application will run locally.

### Installation

Download the repository from github:

`git clone https://github.com/bwk103/ratingApp.git`

Install the necessary dependencies:

`npm install`

Start a server:

`npm start`

## Tests

To run tests using Jest, execute the following command:

`npm test`

## Solution

To solve the challenge, I developed a basic Node.js application using Express and MongoDB.  The front end uses a number of components from the [FT's Origami Registry](https://registry.origami.ft.com/components).

![image1](https://user-images.githubusercontent.com/8667021/37935785-bce01812-314a-11e8-8f50-8bc717e03a36.png)


On visiting the root path, the User is asked to leave a rating for the website between 1 and 10 and has the option of leaving a comment.  On submission, a 'Score' model is created using Mongoose and sent via POST /score to a MongoDB instance.   

![image2](https://user-images.githubusercontent.com/8667021/37935835-ea4b0712-314a-11e8-860f-ce00a802a1b4.png)

I had initially planned to develop the application by producing an Express API exposing only two routes; (POST /score and GET /scores) and to develop a dynamic front-end.  However, due to time constraints, my relative inexperience with Vue.js and React and difficulty in implementing Origami components with the front end, I reverted back to a basic EJS templating system.  

## Further improvements

If given additional time, I would make the following improvements to the application:

- Complete the 'scores' route.  The route currently returns JSON showing all scores currently in the database.  Appropriate styles should be added to this route.

- Build and push a Docker image of the application.

- Improve the front end generally, with a view to adding dynamic features as originally planned.
