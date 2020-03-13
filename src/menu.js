function createElement(tag, className) {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
}

const app = document.querySelector('#root');

const ul = createElement('ul', 'ul-menu');

const triger = createElement('li', 'triger');
const linkTrig = createElement('a', 'trig-link');
linkTrig.insertAdjacentHTML('afterBegin', '<i class="fa fa-bars" aria-hidden="true"></i>')
linkTrig.href = '#';

const nav = createElement('nav', 'ul-menu-side');
const navUl = createElement('ul', 'side-menu');

const liSearch = createElement('li');
const linkSearch = createElement('a');
linkSearch.textContent = 'Search';
linkSearch.href = '#';
linkSearch.insertAdjacentHTML('afterBegin', '<i class="fa fa-search" aria-hidden="true"></i>');
liSearch.append(linkSearch);


const liDownloads = createElement('li');
const linkDownloads = createElement('a');
linkDownloads.textContent = 'Downloads';
linkDownloads.href = '#';
linkDownloads.insertAdjacentHTML('afterBegin', '<i class="fa fa-download" aria-hidden="true"></i>');
liDownloads.append(linkDownloads);

const liSettings = createElement('li');
const linkSettings = createElement('a');
linkSettings.textContent = 'Settings';
linkSettings.href = '#';
linkSettings.insertAdjacentHTML('afterBegin', '<i class="fa fa-cog" aria-hidden="true"></i>');
liSettings.append(linkSettings);

const liHelp = createElement('li');
const linkHelp = createElement('a');
linkHelp.textContent = 'Help';
linkHelp.href = '#';
linkHelp.insertAdjacentHTML('afterBegin', '<i class="fa fa-question-circle" aria-hidden="true"></i>');
liHelp.append(linkHelp);

const liArchives = createElement('li');
const linkArchives = createElement('a');
linkArchives.textContent = 'Archives';
linkArchives.href = '#';
linkArchives.insertAdjacentHTML('afterBegin', '<i class="fa fa-archive" aria-hidden="true"></i>');
liArchives.append(linkArchives);

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
linkS.textContent = ` Previous Demo`;
linkS.href = '#';
linkS.insertAdjacentHTML('afterBegin', '<i class = "fa fa-arrow-left">')
liSec.append(linkS);

const liTh = createElement('li');
const linkT = createElement('a');
linkT.textContent = ' Back to the Codrops Article';
linkT.href = '#';
linkT.insertAdjacentHTML('afterBegin', '<i class="fa fa-tint" aria-hidden="true"></i>');
liTh.append(linkT);

ul.append(triger, liFirst, liSec, liTh)
app.append(ul);

function hoveredSideMenu() {
    nav.style.left = '0';
}

function sideMenuOut() {
    nav.style.left = '-100%';
}


triger.addEventListener('mouseover', hoveredSideMenu);
triger.addEventListener('mouseout', sideMenuOut);
