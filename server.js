var express = require('express');
var app = express();

// setup ports
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* GET home page. */

app.get('/', function(req, res) {

	res.render('index', { title: '广州市瑞极信息科技有限公司' });
});

/* GET about/contact page. */
app.get('/about', function(req, res) {
  res.render('about', { title: '广州市瑞极信息科技有限公司' });
});


app.get('/contact', function(req, res) {
  res.render('contact', { title: '广州市瑞极信息科技有限公司' });
});

/* GET products page. */
app.get('/3Dprinter', function(req, res) {
  res.render('products/3Dprinter', { title: '广州市瑞极信息科技有限公司' });
});

app.get('/printservice', function(req, res) {
  res.render('products/printservice', { title: '广州市瑞极信息科技有限公司' });
});

app.get('/webd', function(req, res) {
  res.render('products/webd', { title: '广州市瑞极信息科技有限公司' });
});

app.get('/appd', function(req, res) {
  res.render('products/appd', { title: '广州市瑞极信息科技有限公司' });
});

/* GET products/systemi page. */
app.get('/shipin', function(req, res) {
  res.render('products/systemi/shipin', { title: '广州市瑞极信息科技有限公司' });
});

app.get('/xinxi', function(req, res) {
  res.render('products/systemi/xinxi', { title: '广州市瑞极信息科技有限公司' });
});

app.get('/wangba', function(req, res) {
  res.render('products/systemi/wangba', { title: '广州市瑞极信息科技有限公司' });
});

app.get('/liansuo', function(req, res) {
  res.render('products/systemi/liansuo', { title: '广州市瑞极信息科技有限公司' });
});

app.get('/wuye', function(req, res) {
  res.render('products/systemi/wuye', { title: '广州市瑞极信息科技有限公司' });
});

app.get('/iot', function(req, res) {
  res.render('products/systemi/iot', { title: '广州市瑞极信息科技有限公司' });
});

// server listens in on port
app.listen(server_port, server_ip_address, function () {
	 console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
});