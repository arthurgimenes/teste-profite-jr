// Conetar no servidor
var app = require('connect')()
var serveStatic = require('serve-static');

app.use('/', serveStatic('assets', {'index': ['index.html', 'index.html']}))
app.listen(8080, () => {
    console.log('Acesse: http://localhost:8080')
});
    