$( ".cross" ).hide();

$( ".hamburger" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
	});
});

$( ".cross" ).click(function() {
	$( ".menu" ).slideToggle( "slow", function() {
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	});
});

$('#login-button').on('click', function() {
	window.open("https://CitrusCalmMindTherapy.SecurePatientArea.com");
})