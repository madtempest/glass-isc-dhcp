var express = require('express');
var router = express.Router();
var fs = require('fs');
var template_render = require('../core/render-template.js');
var authorize = require('../core/authorize.js');

router.get('/', authorize.auth, function(req, res, next) {

	var content = "";

	content = template_render.get_template("subnet_config");

	/* Read Config */
	var json_file = require('jsonfile');
	var glass_config = json_file.readFileSync('config/glass_config.json');

	content = template_render.set_template_variable(content, "title", "subnet Config");
	content = template_render.set_template_variable(content, "c_content", "");
	content = template_render.set_template_variable(content, "subnet_location", glass_config.subnet_file);

	var subnet_config = fs.readFileSync(glass_config.subnet_file, 'utf8');
	content = template_render.set_template_variable(content, "subnet_content", subnet_config);

	res.send(template_render.get_index_template(content, req.url));
});

module.exports = router;