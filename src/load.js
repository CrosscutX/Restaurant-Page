    
function homePageLoad(){
    let tab = document.createElement('ul');
    tab.setAttribute('class', 'tab');

    let home = document.createElement('li');
    let menu = document.createElement('li');
    let contact = document.createElement('li');
    home.setAttribute('class', 'home');
    home.textContent = 'Home';
    menu.setAttribute('class', 'menu');
    menu.textContent = 'Menu';
    contact.setAttribute('class','contact');
    contact.textContent = 'Contact';

    const content = document.querySelector('#content');

    let h1 = document.createElement('h1');
    h1.textContent = 'Pizza Place!';

    let img = document.createElement('img');
    img.setAttribute('src', 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000');

    let p = document.createElement('p');
    p.textContent = 'Awesome Pizza Parlor!';
    

    content.appendChild(tab);
    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p);

    tab.appendChild(home);
    tab.appendChild(menu);
    tab.appendChild(contact);
}

function menuPageLoad(){
    let tab = document.createElement('ul');
    tab.setAttribute('class', 'tab');

    let home = document.createElement('li');
    let menu = document.createElement('li');
    let contact = document.createElement('li');
    home.setAttribute('class', 'home');
    home.textContent = 'Home';
    menu.setAttribute('class', 'menu');
    menu.textContent = 'Menu';
    contact.setAttribute('class','contact');
    contact.textContent = 'Contact';

    const content = document.querySelector('#content');

    let p = document.createElement('p');
    p.textContent = 'Filler content!';
    content.appendChild(tab);
    content.appendChild(p);
    tab.appendChild(home);
    tab.appendChild(menu);
    tab.appendChild(contact);
    
    
}

function contactPageLoad(){
    let tab = document.createElement('ul');
    tab.setAttribute('class', 'tab');

    let home = document.createElement('li');
    let menu = document.createElement('li');
    let contact = document.createElement('li');
    home.setAttribute('class', 'home');
    home.textContent = 'Home';
    menu.setAttribute('class', 'menu');
    menu.textContent = 'Menu';
    contact.setAttribute('class','contact');
    contact.textContent = 'Contact';

    const content = document.querySelector('#content');
    
    let p = document.createElement('p');
    p.textContent = 'More filler content!';
    
    content.appendChild(tab);
    content.appendChild(p);
    tab.appendChild(home);
    tab.appendChild(menu);
    tab.appendChild(contact);
}

export {homePageLoad, menuPageLoad, contactPageLoad};
