# node-react-boilerplate
My guide to connecting a React app to a Node/Express Server for your full stack application. Not only can you just download this repo to get started on your full stack application, but you can also follow the steps below to build this blueprint for yourself - which I highly recommend!

1. Create server.js file to house server code
2. Create package.json file: `npm init -y`
3. Install express & concurrently: `npm install express concurrently`
4. Install nodemon as a dev dependency: `npm install nodemon --save-dev`
5. Now that your packages are installed, you can write the basic boilerplate needed for your `server.js` file or just copy my code below...
```
const express = require('express');

const app = express();
const PORT = 5000;

app.use('/api/folks', (req, res) => {
  folks = [
    { name: 'Pete' },
    { name: 'Megan' }
  ];

  res.json(folks);
})

app.listen(PORT, () => console.log(`server listening @ http://localhost:${PORT}`));
```
6. Create your react application in client dir: `create-react-app client`
7. Install Axios package within your *CLIENT DIRECTORY*: `npm install axios`
8. Navigate to your main React `App.js` file within the client directory (found at `/client/src/app.js`) and change your functional component to a class component
  - Note: you can use hooks to add state and lifecycle management to a functional component, but this guide will assume the user does not use hooks.
  - The easiest way to do this is by deleting all the code in your App.js file and typing `rce` to use a template for your class component... or if you would like to copy and paste, find my code below:
```
import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  componentDidMount = () => {
    axios.get('/api/folks')
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    )
  }
}

export default App
```
9. Go to the package.json file within your client directory (NOT the package.json file outside of the client directory) and add a proxy so your server can be hit when the client uses a specified route with the Axios package
  - "proxy": "http:localhost:5000"
  - If you're unsure of where or how to add the code to your client package.json file, I've pasted below how I added the proxy to my file...
```
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:5000",
```
10. With your proxy added, client configured, and server route being hit on the front end, the last thing to do is configure the scripts your server.js file uses.
  - Within the package.json file for the server (the one *outside* of your client directory), you'll need to make your script files mimic the below code. The easiest thing to do will be to remove the code within the scripts object in your package.json file and replace it with what's below.
```
  "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```

# And that's it!
I know this is a lot to process for setting up a single page React application and one API route, but you would typically use a connected application like this for something a bit bigger. Something that utilizes a database connection, multiple API routes, etc. Go through this guide twice and you'll have it memorized... or you can just download this repo and use it as a blueprint for when you need to start an application out!