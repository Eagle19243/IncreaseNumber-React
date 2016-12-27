import express          from 'express';
import WebpackDevServer from 'webpack-dev-server';
import Webpack          from 'webpack';
import counter          from './routes/counter';

const app = express();
let port = 3000;
let devPort = 3001;
let data = {number: 0};

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
 
    const config = require('../webpack.dev.config');
    let compiler = Webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

app.use('/', express.static(__dirname + '/../public'));
app.use('/counter', counter(data));

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});