import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'

import config from '../webpack.config.js'
import bodyParser from 'body-parser'
import jwt from 'jwt-simple'

const app = express();
const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
    path: path.resolve(__dirname,'../'),
    publicPath: '/',
    stats: {colors: true}
}));

const router = express.Router();

router.route('/login')
    .post((req, res) => {

        if (req.body.username === 'john@doe.com' && req.body.password === 'secret') {
            const jwToken = jwt.encode({ username: req.body.username }, 'ram-aline-task');
            res.json({
                message: 'Logged in successfully',
                jwToken: jwToken,
                isLoggedIn: true,
                personalWelcomeMsg: `Personalized msg from Node API ${req.body.username}`
            });
        } else {
            res.json({
                message: 'Invalid credentials',
                jwToken: '',
                isLoggedIn: false,
                personalWelcomeMsg: ''
            });
        }

    });

router.route('/sendMail')
    .post((req, res) => {
        console.log('Name :', req.body.name);
        console.log('Email :', req.body.email);
        console.log('Message :', req.body.message);
        console.log('Email Sent Successfully');
        res.json({
                message: 'Email Sent Successfully'
        });
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/rest', router);

app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) { return next(err); }
        res.set('content-type','text/html');
        res.send(result);
        res.end();
    });
});

app.listen(3000);