let currentFooterCardIndex = 0;
let currentOtherCardIndex = 0;
const footerCards = document.querySelectorAll('.footer-image');
const otherCards = document.querySelectorAll('.other-image');

function displayCard(section, index) {
    if (section === 'footer') {
        footerCards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });

        const footer = document.querySelector('footer .image-caption');
        footer.textContent = `${currentFooterCardIndex + 1} / ${footerCards.length}`;
    } else if (section === 'other') {
        otherCards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });

        const dots = document.querySelectorAll('main .image-caption .dot')
        dots.forEach((dot, i) => {
            // Remove existing classes first
            dot.classList.remove('normal-dot', 'transform-dot');

            // Add appropriate class based on the current index
            if (i === index) {
                dot.classList.add('transform-dot');
            } else {
                dot.classList.add('normal-dot');
            }
        });
    }
}

function changeCard(section, direction) {
    let currentCardIndex;
    if (direction === 'next' && section === 'footer') {
        currentFooterCardIndex = (currentFooterCardIndex + 1) % footerCards.length;
        currentCardIndex = currentFooterCardIndex;
    } else if (direction === 'prev' && section === 'footer') {
        currentFooterCardIndex = (currentFooterCardIndex - 1 + footerCards.length) % footerCards.length;
        currentCardIndex = currentFooterCardIndex;
    } else if (direction === 'next' && section === 'other') {
        currentOtherCardIndex = (currentOtherCardIndex + 1) % otherCards.length;
        currentCardIndex = currentOtherCardIndex;
    } else if (direction === 'prev' && section === 'other') {
        currentOtherCardIndex = (currentOtherCardIndex - 1 + otherCards.length) % otherCards.length;
        currentCardIndex = currentOtherCardIndex;
    }

    displayCard(section, currentCardIndex);
}