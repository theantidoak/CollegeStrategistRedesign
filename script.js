const displayScore = (function() {

    const satInput = document.querySelector('#sat');
    const satSpan = document.querySelector('.sat-span');
    const satCheckbox = document.querySelector('#sat-on')
    const actInput = document.querySelector('#act');
    const actSpan = document.querySelector('.act-span');
    const actCheckbox = document.querySelector('#act-on');

    satInput.addEventListener('input', showSatScore);
    satCheckbox.addEventListener('change', displayNotTaken);
    actInput.addEventListener('input', showActScore);
    actCheckbox.addEventListener('change', displayActNotTaken);


    function showSatScore() {
        satSpan.textContent = satInput.value;
    }

    function displayNotTaken() {
        if (satCheckbox && satSpan.textContent != 'Not Taken') {
            satSpan.textContent = 'Not Taken';
        } else {
            satSpan.textContent = satInput.value;
        }
    }

    function showActScore() {
        actSpan.textContent = actInput.value;
    }

    function displayActNotTaken() {
        if (actCheckbox && actSpan.textContent != 'Not Taken') {
            actSpan.textContent = 'Not Taken';
        } else {
            actSpan.textContent = actInput.value;
        }
    }

})();







const navBarFeatures = (function() {

    //cache DOM
    const navButton = document.querySelectorAll('.navigation button');
    const searchButton = document.querySelector('.search');
    const searchInput = document.querySelector('#search-id');
    const searchLabel = document.querySelector('#search-label');
    const loginButton = document.querySelector('.sign-in');
    const loginForm = document.querySelector('.login-form');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerItems = document.querySelector('.hamburger-items');

    //bind Events
    navButton.forEach(button => button.addEventListener('click', closeNav));
    searchButton.addEventListener('click', closeSearch);
    searchInput.addEventListener("keydown", removeLabel);
    loginButton.addEventListener('click', openLogin);
    hamburgerMenu.addEventListener('click', openHamburger);


    function openHamburger() {
        if (hamburgerItems.style.display == 'flex') {
            hamburgerItems.style.display = 'none';
        } else {
            searchButton.children[1].style.transform = 'scale(.5)';
            searchButton.children[1].style.display = 'none';
            loginForm.style.display = 'none';   
            loginForm.style.transform = 'translateX(15rem)';
            hamburgerItems.style.display = 'flex';
        }
    }

    function openLogin() {

        if (loginForm.style.display == 'flex') {
            loginForm.style.transform = 'translateX(15rem)';
            loginForm.style.display = 'none';
        } else {
            navButton.forEach(button => button.children[1].style.display = 'none');
            searchButton.children[1].style.transform = 'scale(.5)';
            searchButton.children[1].style.display = 'none';
            hamburgerItems.style.display = 'none';
            loginForm.style.display = 'flex';   
            setTimeout(() => {
                loginForm.style.transform = 'translateX(0)';
            }, 50);    
        }
    }


    function removeLabel() {
        searchLabel.style.display = 'none';
    }

    function closeSearch(e) {
        if (e.target.id != '') return;
        if (this.children[1].style.display == 'flex') {
            this.children[1].style.transform = 'scale(.5)';
            this.children[1].style.display = 'none';
        } else {
            navButton.forEach(button => button.children[1].style.display = 'none');
            loginForm.style.transform = 'translateX(15rem)';
            loginForm.style.display = 'none';
            hamburgerItems.style.display = 'none';
            this.children[1].style.display = 'flex';   
            setTimeout(() => {
                this.children[1].style.transform = 'scale(1)';
            }, 50);
            
        }
    }

    function closeNav() {
        if (this.children[1].style.display == 'block') {
            this.children[1].style.display = 'none';
            this.children[0].children[0].style.transform = 'rotate(.0turn)';
        } else {
            navButton.forEach(button => button.children[1].style.display = 'none');
            searchButton.children[1].style.display = 'none';
            loginForm.style.transform = 'translateX(15rem)';
            loginForm.style.display = 'none';
            this.children[1].style.display = 'block';
            this.children[0].children[0].style.transform = 'rotate(.5turn)';
        }
    }
})();