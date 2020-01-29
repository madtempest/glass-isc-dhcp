$('#dhcp_config').height($(window).height() * 0.6);

var subnet_config = ace.edit("subnet_config");
subnet_config.setTheme("ace/theme/terminal");
subnet_config.$blockScrolling = Infinity;

function save_subnet_config () {
	subnet_form_data = get_form_query_string("subnet_form");
	subnet_form_data = subnet_form_data + "&subnet_data=" + encodeURIComponent(subnet_config.getValue());

	$.post( "/subnet_save", subnet_form_data, function( data ) {
		$( "#subnet_result" ).html( data );
	});
}