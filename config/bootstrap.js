/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {

	// var nib = require('nib');
	// var css = require('stylus')
	// var fs  = require('fs');
	// var str = fs.readFileSync(__dirname + '/../assets/styles/styles.styl', 'utf8');

	// css.render(str, { filename: 'basic.styl', compress: true, include : nib }, function(err, css){
	//   if (err) throw err;
	//   fs.writeFileSync(__dirname + '/../assets/styles/styles.css', css);
	// });

	// It's very important to trigger this callack method when you are finished 
	// with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
	cb();
};