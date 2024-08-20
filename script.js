// open accordion items
document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.querySelector('.next-btn');
    const accordionItems = document.querySelectorAll('.accordion-item');
    let currentIndex = 1;

    function hideAllContents() {
        accordionItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    nextButton.addEventListener('click', function () {
        hideAllContents();

        if (currentIndex < accordionItems.length) {
            accordionItems[currentIndex].classList.add('active');
            currentIndex++;
        }

        if (currentIndex >= accordionItems.length) {
            currentIndex = 0;
        }
    });

    accordionItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                hideAllContents();
                item.classList.add('active');
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