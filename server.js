// A small Express server to host build generated using React
const express = require('express'),
path = require('path');
app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 3001;
// Configuring port for APP
app.listen(port, () => console.log(`Listening on port ${port}`))


