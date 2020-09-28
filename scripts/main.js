
var mainImage = document.querySelector('#main-img');
var raphImage = document.querySelector('#raph-img');
var donImage = document.querySelector('#don-img');
var leoImage = document.querySelector('#leo-img');
var mikeyImage = document.querySelector('#mikey-img');
let classicB = document.getElementById('classic');
let actualB = document.getElementById('actual');

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

classicB.onclick=function() {
    var mySrc = mainImage.getAttribute('src');
    if (mySrc === 'images/tmnt-movie.jpg') {
        mainImage.setAttribute('src', 'images/tmnt-1987.jpeg')
        mainImage.setAttribute('alt', 'Черепашки из мультфильма 1987')
        mainImage.style.height='70%';
        mainImage.style.width='70%';
        mainImage.style.margin='20px auto'
        raphImage.setAttribute('src', 'images/raph-class.jpg')
        raphImage.setAttribute('alt', 'Раф из мультфильмфа 1987')
        raphImage.style.height='70%';
        raphImage.style.width='70%';
        donImage.setAttribute('src', 'images/don-class.jpg')
        donImage.setAttribute('alt', 'Дони из мультфильма 1987')
        donImage.style.height='70%';
        donImage.style.width='70%';
        leoImage.setAttribute('src', 'images/leo-class.jpg')
        leoImage.setAttribute('alt', 'Лео из мультфильма 1987')
        leoImage.style.height='70%';
        leoImage.style.width='70%';
        mikeyImage.setAttribute('src', 'images/mikey-class.jpg')
        mikeyImage.setAttribute('alt', 'Майки из мультфильма 1987')
        mikeyImage.style.height='70%';
        mikeyImage.style.width='70%';
        heading.style.display='none';
        myBody.style.background='#191970';
        myBody.style.border='10px solid white';
        myHtml.style.background='#191970';
        topFunction()
    }
}

actualB.onclick=function() {
    var mySrc = mainImage.getAttribute('src');
    if (mySrc === 'images/tmnt-1987.jpeg') {
        mainImage.setAttribute('src', 'images/tmnt-movie.jpg')
        mainImage.setAttribute('alt', 'Черепашки ниндзя. Версия из фильма 2014 года')
        mainImage.style.height='80%';
        mainImage.style.width='80%';
        raphImage.setAttribute('src', 'images/raph-movie.jpg')
        raphImage.setAttribute('alt', 'Рафаэль из фильма 2014 года')
        raphImage.style.height='80%';
        raphImage.style.width='80%';
        donImage.setAttribute('src', 'images/don-movie.jpg')
        donImage.setAttribute('alt', 'Донателло из фильма 2014 года')
        donImage.style.height='80%';
        donImage.style.width='80%';
        leoImage.setAttribute('src', 'images/leo-movie.jpg')
        leoImage.setAttribute('alt', 'Леонардо из фильма 2014 года')
        leoImage.style.height='80%';
        leoImage.style.width='80%';
        mikeyImage.setAttribute('src', 'images/mikey-movie.jpg')
        mikeyImage.setAttribute('alt', 'Микеланджело из фильма 2014 года')
        mikeyImage.style.height='80%';
        mikeyImage.style.width='80%';
        heading.style.display='block';
        myBody.style.background='black';
        myBody.style.border='10px solid red';
        myHtml.style.background='black';
        topFunction()
    }
}
