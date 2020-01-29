$('#dhcp_config').height($(window).height() * 0.6);

var hostlist_config = ace.edit("hostlist_config");
hostlist_config.setTheme("ace/theme/terminal");
hostlist_config.$blockScrolling = Infinity;

function save_hostlist_config () {
	hostlist_form_data = get_form_query_string("hostlist_form");
	hostlist_form_data = hostlist_form_data + "&hostlist_data=" + encodeURIComponent(hostlist_config.getValue());

	$.post( "/hostlist_save", hostlist_form_data, function( data ) {
		$( "#hostlist_result" ).html( data );
	});
}