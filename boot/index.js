var env = {};
var slackin = require('slackin');
var dotenv = require('dotenv');

// loads .env into process.env
dotenv.load();
env = process.env;

var port = Number(process.env.PORT || 5000);

var serv = slackin({
	token: env.SLACK_TOKEN,
	interval: 1000,
	org: 'floridahackers.slack.com',
	silent: false
}).listen(port);




console.log(serv);