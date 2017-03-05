import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import ejs from 'ejs'

let app = express();
const port = 4000;

// view setup
app.set('views', path.join(__dirname, '../client/dist'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(logger('dev')); //命令行里面显示请求
app.use(bodyParser.json()); //解析json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); //解析cookie
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get("/", (req, res) => {
    res.render("index")
})
app.listen(port, () => {
    console.log("server is running on port 4000");
});