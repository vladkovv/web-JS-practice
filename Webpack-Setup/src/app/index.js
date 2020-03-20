import '../style/app.scss';

function createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) {
        element.classList.add(className);
    }

    return element
}

const app = document.querySelector('#root');
const firstAutocomplete = createElement('div', 'first-autocomplete');
const fDivInp = createElement('div', 'first-div-inp');
const firstInp = createElement('input', 'first-inp');

firstInp.placeholder = 'Select country...';

const fDivUl = createElement('div', 'div-ul');
const firstUl = createElement('ul', 'first-ul');

fDivUl.style.display = 'none';
fDivInp.append(firstInp);
fDivInp.insertAdjacentHTML('beforeEnd', '<i class="fas fa-times"></i>');
fDivInp.insertAdjacentHTML('beforeEnd', '<i class="fas fa-caret-down"></i>');
fDivUl.append(firstUl);
firstAutocomplete.append(fDivInp, fDivUl);
app.append(firstAutocomplete);

function initialData() {
    if(firstInp.value == '') {
    document.querySelector('i.fa-caret-down').style.transform = 'rotate(180deg)';
    }

    if(firstInp.value == '') {
        while (firstUl.firstChild) {
            firstUl.removeChild(firstUl.firstChild);
        }
    
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json => json.forEach((elem) => {
                const li = createElement('li');
                li.textContent = elem.name;
                firstUl.append(li);
            }))
            .then(() => {
                fDivUl.style.display = 'block';
            })
            .then(() => {
                document.querySelectorAll('.first-ul > li').forEach((elem) => {
                    elem.addEventListener('click', () => {
                        firstInp.value = elem.textContent;
                        document.querySelector('i.fa-caret-down').style.transform = '';
                        fDivUl.style.display = 'none';
                        firstInp.focus();
                    })
                })
            })
    }}

firstInp.addEventListener('focus', () => {
    fDivInp.style.border = '3px double #90CAF9';
});

firstInp.addEventListener('blur', () => {
    fDivInp.style.border = '3px double grey';
    document.querySelector('i.fa-caret-down').style.transform = '';
});

firstInp.addEventListener('click', initialData);

firstInp.addEventListener('input', () => {
    const selector = firstInp.value;
    document.querySelector('i.fa-caret-down').style.transform = 'rotate(180deg)';
    if (!firstInp.value == '') {
        
        while (firstUl.firstChild) {
            firstUl.removeChild(firstUl.firstChild);
        }

        fetch(`https://restcountries.eu/rest/v2/name/${selector}`)
            .then(response => response.json())
            .then(json => json.forEach((elem) => {
                const li = createElement('li');
                li.textContent = elem.name;
                firstUl.append(li);
            }))
            .then(() => {
                fDivUl.style.display = 'block';
                document.querySelectorAll('.first-ul > li').forEach((elem) => {
                    elem.addEventListener('click', () => {
                        firstInp.value = elem.textContent;
                        document.querySelector('i.fa-caret-down').style.transform = '';
                        fDivUl.style.display = 'none';
                        firstInp.focus();
                    })
                })
            })
            .catch(() => {
                fDivUl.style.display = 'block';
                const li = createElement('li');
                li.textContent = 'No options...';
                firstUl.append(li);
            })
            
    }

    else {
        initialData();
    }

})

document.addEventListener('click', (e) => {
    if (e.target.closest('.div-ul') || e.target.closest('.first-inp') || e.target.closest('.fas')) {
        return
    }

    fDivUl.style.display = 'none';
})


document.querySelector('i.fa-times').addEventListener('click', () => {
    if(!firstInp.value == ''){
    firstInp.value = '';
    }
    firstInp.focus();
})

document.querySelector('i.fa-caret-down').addEventListener('click', (e) => {
    if(e.target.style.transform == '') {
        e.target.style.transform = 'rotate(180deg)';
    }

    else{
        e.target.style.transform = '';
    }

    if(fDivUl.style.display == 'none' && !firstUl.firstChild) {
    initialData();
    firstInp.focus();
    }

    else {

        if(fDivUl.style.display == 'none') {
            fDivUl.style.display = 'block';
            firstInp.focus();
        }

        else {
     fDivUl.style.display = 'none';
     e.target.style.transform = ''; 
        } 
    }
})

fDivInp.addEventListener('mouseover', () => {
    if(!firstInp.value == '') {
        document.querySelector('i.fa-times').style.display = 'inline-block';
    }

})

fDivInp.addEventListener('mouseout', () => {
    document.querySelector('i.fa-times').style.display = 'none';
})