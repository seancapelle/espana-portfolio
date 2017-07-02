// View toggle
var pick = "portfolio-view";
var noPick1 = "resume-view";
var noPick2 = "contact-view";
viewToggle();

$('#portfolio-btn').on('click', function() {
	pick = "portfolio-view";
	noPick1 = "resume-view";
	noPick2 = "contact-view";
	viewToggle();
	openPhotoSwipe();
})

$('#resume-btn').on('click', function() {
	pick = "resume-view";
	noPick1 = "portfolio-view";
	noPick2 = "contact-view";
	viewToggle();
})

$('#contact-btn').on('click', function() {
	pick = "contact-view";
	noPick1 = "portfolio-view";
	noPick2 = "resume-view";
	viewToggle();
})

function viewToggle() {
	$("#" + pick).show();
	$("#" + noPick1).hide();
	$("#" + noPick2).hide();
}

// PhotoSwipe
function openPhotoSwipe() {
var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: './images/80TVProp.jpg',
        w: 600,
        h: 400
    },
    {
        src: './images/FantasyPolearm1.png',
        w: 600,
        h: 400
    },
    {
        src: './images/FantasyPolearm2.png',
        w: 600,
        h: 400
    },
    {
        src: './images/HippoCharacterBust.jpg',
        w: 600,
        h: 400
    },
    {
        src: './images/LoftEnvironment1.jpg',
        w: 600,
        h: 400
    },
    {
        src: './images/LoftEnvironment2.jpg',
        w: 600,
        h: 400
    },
    {
        src: './images/SpikeGrenade.png',
        w: 600,
        h: 400
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
};