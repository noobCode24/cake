// Category tab interactivity
const categories = document.querySelectorAll('.category');
const teabreakInfo = document.querySelector('.teabreak-info');
let teabreakOverlay = document.createElement('div');
teabreakOverlay.className = 'teabreak-info-overlay';
document.body.appendChild(teabreakOverlay);

categories.forEach(tab => {
    tab.addEventListener('click', () => {
        const isTeabreak = tab.dataset.category === 'teabreak';
        const isTeabreakVisible = teabreakInfo.style.display === 'block';

        if (!isTeabreak || !isTeabreakVisible) {
            document.querySelector('.category.active').classList.remove('active');
            tab.classList.add('active');
        }

        if (isTeabreak) {
            if (isTeabreakVisible) {
                teabreakInfo.style.opacity = '0';
                setTimeout(() => {
                    teabreakInfo.style.display = 'none';
                    teabreakOverlay.style.display = 'none';
                }, 300);
            } else {
                teabreakInfo.style.display = 'block';
                teabreakOverlay.style.display = 'block';
                setTimeout(() => {
                    teabreakInfo.style.opacity = '1';
                }, 10);
            }
        } else {
            teabreakInfo.style.opacity = '0';
            setTimeout(() => {
                teabreakInfo.style.display = 'none';
                teabreakOverlay.style.display = 'none';
            }, 300);
        }
    });
});

// Teabreak button interactivity
const teabreakButtons = document.querySelectorAll('.teabreak-btn');
teabreakButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.teabreak-btn.active').classList.remove('active');
        btn.classList.add('active');
        console.log(`Selected Teabreak option: ${btn.dataset.option}`);
    });
});

// Close teabreak-info when clicking outside
teabreakOverlay.addEventListener('click', () => {
    teabreakInfo.style.opacity = '0';
    setTimeout(() => {
        teabreakInfo.style.display = 'none';
        teabreakOverlay.style.display = 'none';
    }, 300);
});

// Product detail modal functionality
const productCards = document.querySelectorAll('.product-card');
const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const closeBtn = document.querySelector('.close-btn');
const quantityInput = document.getElementById('quantity');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const buyBtn = document.querySelector('.buy-btn');

productCards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('.teabreak-info')) return;

        modalImg.src = card.dataset.img;
        modalName.textContent = card.dataset.name;
        modalDesc.textContent = card.dataset.desc;
        modalPrice.textContent = card.dataset.price;

        quantityInput.value = 1;

        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

increaseBtn.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

decreaseBtn.addEventListener('click', () => {
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

buyBtn.addEventListener('click', () => {
    alert(`Bạn đã mua ${quantityInput.value} ${modalName.textContent}!`);
    modal.style.display = 'none';
});