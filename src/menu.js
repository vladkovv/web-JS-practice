function createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
}

const app = document.querySelector('#root');

const ul = createElement('ul', 'ul-menu');

const triger = createElement('li', 'triger');
const linkTrig = createElement('a');
linkTrig.textContent = '*';
linkTrig.href = '#';

const nav = createElement('nav', 'ul-menu-side');
const navUl = createElement('ul', 'side-menu');

const liSearch = createElement('li');
liSearch.textContent = 'Search';

const liDownloads = createElement('li');
liDownloads.textContent = 'Downloads';

const liSettings = createElement('li');
liSettings.textContent = 'Settings';

const liHelp = createElement('li');
liHelp.textContent = 'Help';

const liArchives = createElement('li');
liArchives.textContent = 'Archives';

navUl.append(liSearch, liDownloads, liSettings, liHelp, liArchives);
nav.append(navUl);
triger.append(linkTrig, nav);

const liFirst = createElement('li');
const linkF = createElement('a');
linkF.textContent = 'Codrops';
linkF.href = '#'
liFirst.append(linkF);

const liSec = createElement('li');
const linkS = createElement('a');
const img = createElement('i');
linkS.textContent = 'Previous Demo';
linkS.href = '#';
liSec.append(linkS);

const liTh = createElement('li');
const linkT = createElement('a');
linkT.textContent = 'Back to the Codrops Article';
linkT.href = '#';
liTh.append(linkT);
const i = createElement('i', 'fa-arrow-left');

ul.append(triger, liFirst, liSec, liTh)
app.append(ul, i);

function hovered() {
    this.style.backgroundColor = '#5f6f81';
    this.style.color = 'white';
}

function mouseOut() {
    this.style.backgroundColor = 'white';
    this.style.color = '#5f6f81';
}

function hoveredSideMenu() {
    linkTrig.style.backgroundColor = '#5f6f81';
    linkTrig.style.color = 'white';
    nav.style.left = '0';
}

function sideMenuOut() {
    linkTrig.style.backgroundColor = 'white';
    linkTrig.style.color = '#5f6f81';
    nav.style.left = '-100%';
}


triger.addEventListener('mouseover', hoveredSideMenu);
triger.addEventListener('mouseout', sideMenuOut);

linkF.addEventListener('mouseover', hovered);
linkF.addEventListener('mouseout', mouseOut);

linkS.addEventListener('mouseover', hovered);
linkS.addEventListener('mouseout', mouseOut);

linkT.addEventListener('mouseover', hovered);
linkT.addEventListener('mouseout', mouseOut);

