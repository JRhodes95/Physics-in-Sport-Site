// Javascript to enable link to tab
var url = document.location.toString();
console.log(url);
if (url.match('#')) {
    console.log("Hash present");
    $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
} 

// Change hash for page-reload
$('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})

$('.nav-tabs').stickyTabs();
