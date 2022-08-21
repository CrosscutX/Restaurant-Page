import {homePageLoad, menuPageLoad, contactPageLoad} from './load';
    homePageLoad();
    let content = document.querySelector('#content');
    
    let home = document.querySelector('.home');
    let menu = document.querySelector('.menu');
    let contact = document.querySelector('.contact');
   
    home.addEventListener('click', function(){
        console.log('home');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        homePageLoad();
        console.log(content);
        home = document.querySelector('.home');
        menu = document.querySelector('.menu');
        contact = document.querySelector('.contact');
    })

    menu.addEventListener('click', function(){
        console.log('menu');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        menuPageLoad();
        console.log(content);
        home = document.querySelector('.home');
        menu = document.querySelector('.menu');
        contact = document.querySelector('.contact');
    })

    contact.addEventListener('click', function(){
        console.log('contact');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        contactPageLoad();
        console.log(content);
        home = document.querySelector('.home');
        menu = document.querySelector('.menu');
        contact = document.querySelector('.contact');
    })

   

    