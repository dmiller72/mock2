// $('.quotes').slick({
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 6000,
//     speed: 800,
//     slidesToShow: 1,
//     adaptiveHeight: true
// });

const slide = ()=> {

    const svg = document.querySelector('svg');
    const nav = document.querySelector('nav');

    svg.addEventListener('click', ()=> {
        nav.classList.toggle('show');
    });
}

slide();
