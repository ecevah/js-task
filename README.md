# JavaScript Quiz Application

This project is a JavaScript-based Quiz Application that dynamically fetches 10 questions from the JSONPlaceholder API and presents them to users for answering within specified time limits.

## Features

- Dynamically fetches questions from the JSONPlaceholder API.
- Each question is displayed for a total of 30 seconds.
- Option selections are disabled for the first 10 seconds of each question.
- Automatically proceeds to the next question after the 30-second timer expires.
- Displays the answers given by the user in a table format at the end of the quiz.

## Installation

To run this project on your local machine, follow the steps below.

1. Clone the project:
   ```
   git clone https://github.com/ecevah/baykar_frontend.git
   ```
2. Navigate to the project directory:
   ```
   cd javascript_task/
   ```
3. Install dependencies (if any):

   ```
   npm install
   ```

   Note: This project is made with plain JavaScript, so it might not require any additional dependencies.

4. Start the project:
   ```
   npm start
   ```
   or simply open the `index.html` file in the project directory with a web browser or through a simple HTTP server.

## Usage

- Upon starting the application, the user is greeted with a welcome screen offering to start the quiz.
- Once the quiz starts, each question is given a total of 30 seconds to be answered.
- For the first 10 seconds, the answer options are not clickable; after 10 seconds, users can select their answers.
- The application automatically moves to the next question when the time for the current question expires.
- At the end of the quiz, the answers provided by the user are displayed in a table format.

## Technologies

- **HTML/CSS**: For the user interface.
- **JavaScript**: To handle application logic and communication with the API.

## API

The application uses JSONPlaceholder's `/posts` endpoint to fetch the text for the questions necessary for the quiz.

## Contributing

This project is open source and welcomes contributions. Please feel free to submit pull requests for improvements, bug fixes, or new features.

![Javascript Task](https://github.com/ecevah/baykar_frontend/blob/main/javascript_task/public/Ekran%20Resmi%202024-03-09%2001.44.16.png "Javascript Task")

![Javascript Task](https://github.com/ecevah/baykar_frontend/blob/main/javascript_task/public/Ekran%20Resmi%202024-03-09%2001.44.26.png "Javascript Task")

![Javascript Task](https://github.com/ecevah/baykar_frontend/blob/main/javascript_task/public/Ekran%20Resmi%202024-03-09%2001.44.16.png "Javascript Task")

![Javascript Task](https://github.com/ecevah/baykar_frontend/blob/main/javascript_task/public/Ekran%20Resmi%202024-03-09%2001.44.34.png "Javascript Task")

![Javascript Task](https://github.com/ecevah/baykar_frontend/blob/main/javascript_task/public/Ekran%20Resmi%202024-03-09%2001.54.54.png "Javascript Task")
# js-task
