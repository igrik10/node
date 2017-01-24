//module.exports = exports = this
var db = require('db');
db.connect();

var User = require('./user');
// var user = require('./user');

function run() {
	// var petya = new user.User("Петя");
	// var vasya = new user.User("Вася");
	var vasya = new User("Вася");
	var petya = new User("Петя");

	vasya.hello(petya);

	console.log(db.getPhrase('RUN successful'));
}
if (module.parent) {
	exports.run = run;
} else {
	run();
}