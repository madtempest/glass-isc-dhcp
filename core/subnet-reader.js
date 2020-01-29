var fs = require('fs');

module.exports = {
	initSubnetDatabase: function () {
		var subnet_database_file = "bin/subnet_table.txt";

		if (fs.existsSync(subnet_database_file)) {
			fs.readFile(subnet_database_file, 'utf8', function (err, data) {
				if (err) {
					return console.log(err);
				}
				else {
					lines = data.split("\n");
					for (l = 0; l < lines.length; l++) {
						/* Trim whitespaces at each ends of the line */
						lines[l]          = lines[l].trim();
						var subnet_line_data = lines[l].split(":::");

						if (typeof subnet_line_data[1] !== "undefined")
							subnet_data[subnet_line_data[0].trim()] = subnet_line_data[1].trim();
					}
					console.log("[Glass Server] Subnet Database Loaded");
				}
			});
		}
	},
};