// Category tab interactivity
// ấy tất cả các phần tử HTML có lớp .category (4 danh mục).
const categories = document.querySelectorAll('.category');
const teabreakInfo = document.querySelector('.teabreak-info');
// Tạo lớp phủ
let teabreakOverlay = document.createElement('div');
teabreakOverlay.className = 'teabreak-info-overlay';
document.body.appendChild(teabreakOverlay);

// gắn sự kiện click cho mỗi danh mục (tab).
categories.forEach(tab => {
    console.log(tab)
    tab.addEventListener('click', () => {
        const isTeabreak = tab.dataset.category === 'teabreak'; //neu la teabreak thi gan vao bien isTeabreak
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

productCards.forEach(card => {
    console.log(card)
    card.addEventListener('click', (e) => {
        console.log(e)
        // if (e.target.closest('.teabreak-info')) return;

        modalImg.src = card.dataset.img;
        modalName.textContent = card.dataset.name;
        modalDesc.textContent = card.dataset.desc;
        modalPrice.textContent = card.dataset.price;


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