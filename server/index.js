const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors({
    allowedOrigins: [
        'http://localhost:3001'
    ]
}))

app.set('port' , process.env.PORT || 3000);

app.listen(app.get('port'), (err) => {
    if (err) throw err;
    console.log('Server *-*')
});

const mainRoute = require('../routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

app.use(mainRoute)
