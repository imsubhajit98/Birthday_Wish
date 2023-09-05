var btn = $('#button');
$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
    btn.addClass('show');
} else {
    btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});




// var btn1 = $('#button1');
// btn1.on('click', function() {
//     var element = document.body;
//             element.classList.toggle("dark-mode");
//     });
        

let topBtn1=document.querySelector('.topBtn1');
let navbarMode=document.querySelector('.navHead');


topBtn1.addEventListener('click',()=>{
    var element = document.body;
    element.classList.toggle("dark-mode");
    topBtn1.classList.toggle("bgDark");
    topBtn1.classList.toggle("bgLight");
    // navbarMode.classList.add("navbar-dark bg-dark");
    // navbarMode.classList.remove("navbar-light bg-white");
    
})