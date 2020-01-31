var express = require('express');
var router = express.Router();
var fs = require('fs');
var template_render = require('../core/render-template.js');
var authorize = require('../core/authorize.js');

router.get('/', authorize.auth, function(req, res, next) {

	var content = "";

	content = template_render.get_template("hosts_manager");

	/* Read Config */
	var json_file = require('jsonfile');
	var glass_config = json_file.readFileSync('config/glass_config.json');

	content = template_render.set_template_variable(content, "title", "Hosts Manager");
	content = template_render.set_template_variable(content, "c_content", "");
	content = template_render.set_template_variable(content, "hostlist_location", glass_config.hostlist_file);

	var hostlist_config = fs.readFileSync(glass_config.hostlist_file, 'utf8');
	content = template_render.set_template_variable(content, "hostlist_content", hostlist_config);

	res.send(template_render.get_index_template(content, req.url));
});

module.exports = router;
