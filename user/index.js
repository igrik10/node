var db = require('db');

function User(name) {
	this.name = name;
}

User.prototype.hello = function (who) {
	console.log(db.getPhrase('Hello') + ", " + who.name);
};


// global.User = User;
module.exports = User;
// exports.User = User;
