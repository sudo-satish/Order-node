const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const { AppRouter } = require('./routes/AppRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// app.use(methodOverride(function (req, res) {
//     if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//         // look in urlencoded POST bodies and delete it
//         var method = req.body._method
//         delete req.body._method
//         return method
//     }
// }));

// app.use(methodOverride('_method'));

// Using cokie parser, so that it can parse the cookie it is used in session,
app.use(cookieParser());

// Using express-sessions ...
// app.use(session({ secret: "Some secret" })); //Some secret should be replaced with some real word ...

// Making a public folder ...
app.use(express.static(__dirname + '/dist'));

// Using a View engine ...
app.set('view engine', 'pug');
app.set('views', './views');


app.use((req, res, next) => {
    
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    // res.append('Access-Control-Allow-Origin', ['*']);
    // res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    // res.header("Access-Control-Allow-Headers", "Auth, Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Headers", "*");
    
    next();
});

app.use('/', AppRouter);

app.get('/', (req, res) => {
    res.send('Home page');
});

let port = process.env.PORT || 3000;
app.set('port', port);
app.listen(port, () => {
    console.log('Listing to port ' + port );
});