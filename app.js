const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks = [];

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>To-Do List</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                }
                h1 {
                    color: white;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                }
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                input[type="text"] {
                    padding: 10px;
                    margin: 10px 0;
                    border: none;
                    border-radius: 5px;
                    width: 200px;
                }
                button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    background-color: #ff6b6b;
                    color: white;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #ff4b4b;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    background-color: white;
                    margin: 5px 0;
                    padding: 10px;
                    border-radius: 5px;
                    width: 200px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <h1>To-Do List</h1>
            <form action="/" method="POST">
                <input type="text" name="task" placeholder="New Task" required>
                <button type="submit">Add Task</button>
            </form>
            <ul>
                ${tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
        </body>
        </html>
    `);
});

app.post('/', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});