const express = require('express');
const path = require('path');

// app
const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.listen( process.env.PORT || 8080, () => {
    console.log('This app listening on port 8080!');
});

app.get('/*', (req, res)=> {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

console.log('running');


// -module.exports = app;
