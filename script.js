document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.main-menu .menu-item');
    const submenus = document.querySelectorAll('.submenu');
    const footerLinks = document.querySelectorAll('.footer-links li a');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            item.style.opacity = '1';
        });

        item.addEventListener('mouseout', function () {
            if (!item.parentElement.classList.contains('active')) {
                item.style.opacity = '0.75';
            }
        });
    });

    footerLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            link.style.opacity = '1';
        });

        link.addEventListener('mouseout', function () {
            link.style.opacity = '0.75';
        });
    });

});

// open accordion items
document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('.next-btn');
    const accordionItems = document.querySelectorAll('.accordion-item');
    let currentIndex = 1;

    function hideAllContents() {
        accordionItems.forEach(item => {
            item.querySelector('.submenu').classList.remove('active');
        });
    }

    nextButton.addEventListener('click', function () {
        hideAllContents();

        if (currentIndex < accordionItems.length) {
            accordionItems[currentIndex].querySelector('.submenu').classList.add('active');
            currentIndex++;
        }

        if (currentIndex >= accordionItems.length) {
            currentIndex = 0;
        }
    });

    accordionItems.forEach((item, index) => {
        item.querySelector('.menu-item').addEventListener('click', function () {
            const content = item.querySelector('.submenu');

            if (content.classList.contains('active')) {
                content.classList.remove('active');
            } else {
                hideAllContents();
                content.classList.add('active');
                currentIndex = index + 1;
            }
        });
    });
})


// Show mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navHeader = document.querySelector('header');

mobileMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
    navHeader.classList.toggle('mobile-menu-active')
})