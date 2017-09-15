const express = require('express');
const fs = require('fs');

const port = Number(process.env.PORT || 3000);
var app = express(),
    json;

app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.use('/js', express.static(__dirname + '/js/bootstrap'));
app.use('/js', express.static(__dirname + '/js/jquery'));
app.use('/js', express.static(__dirname + '/js/popper')); 
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css/bootstrap'));
app.use('/css', express.static(__dirname + '/css'))

var readJsonFileSync = (filepath, encoding) => {
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

var getConfig = (file) => {
    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

json = getConfig('calcados.json');

app.get('/', (req, res) => {
    res.render('index.html');
})

app.get('/calcados.json', (req, res) => {
    res.send(json);
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});  