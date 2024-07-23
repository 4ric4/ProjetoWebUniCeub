document.addEventListener('DOMContentLoaded', function() {
  const categories = {
    todas: [
      'foto1.png', 'foto2.png', 'foto3.png', 'foto4.png', 'foto5.png',
      'foto6.png', 'foto7.png', 'foto8.png', 'foto9.png'
    ],
    aniversario: [
      'foto10.jpg', 'foto11.jpg', 'foto12.jpg', 'foto13.jpg', 'foto14.jpg'
    ],
    casamento: [
      'foto15.jpg', 'foto16.jpg', 'foto17.jpg', 'foto18.jpg', 'foto19.jpg',
      'foto20.jpg', 'foto21.jpg', 'foto22.jpg'
    ],
    gestante: [
      'foto28.jpg', 'foto29.jpg', 'foto30.jpg', 'foto31.jpg', 'foto32.jpg',
      'foto33.jpg', 'foto34.jpg'
    ],
    modelos: [
      'foto37.jpg', 'foto38.jpg', 'foto39.jpg', 'foto40.jpg', 'foto41.jpg',
      'foto42.jpg', 'foto43.jpg', 'foto44.jpg'
    ]
  };

  let currentCategory = 'todas'; 

  function updatePhotos(category) {
    const container = document.getElementById('photo-container');
    container.innerHTML = ''; 

    categories[category].forEach((filename, index) => {
      const img = document.createElement('img');
      img.classList.add('image');
      img.src = `image/${filename}`;
      img.alt = filename;
     
      img.style.left = `${184 + (index % 3) * 364}px`; 
      img.style.top = `${565 + Math.floor(index / 3) * 374}px`;
      img.addEventListener('click', function() {
        openModal(this.src);
      });
      container.appendChild(img);
    });
  }

  function openModal(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const caption = document.getElementById('caption');
    modal.style.display = 'block';
    modalImg.src = src;
    caption.innerHTML = src.split('/').pop(); 
  }

  const closeModal = document.querySelector('.modal .close');
  closeModal.addEventListener('click', function() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
  });

  
  updatePhotos(currentCategory);

  
  document.querySelectorAll('.category-label').forEach(label => {
    label.addEventListener('click', function() {
      currentCategory = this.getAttribute('data-category');
      updatePhotos(currentCategory);
    });
  });

  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const bioSection = document.getElementById('bio-section');
    const bioPosition = bioSection.offsetTop;
    const logo = document.querySelector('.logo');
    const logoSticky = document.querySelector('.logo-sticky');
    const mainImage = document.querySelector('.main-image');
    const navBar = document.querySelector('.nav-bar');
  
    if (scrollPosition < bioPosition - window.innerHeight + 100) {
      mainImage.style.opacity = 1 - (scrollPosition / (bioPosition - window.innerHeight + 100));
      logo.style.display = 'block';
      logoSticky.style.display = 'none';
    }
  
    navBar.classList.toggle('sticky', scrollPosition > 300);
  });
  
  
 
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  
  
  document.getElementById('bio-link').addEventListener('click', function() {
    scrollToSection('bio-section');
  });

  document.querySelector('.nav-bar .testimonials').addEventListener('click', function() {
    scrollToSection('depoimentos-section');
  });

  document.querySelector('.nav-bar .photos').addEventListener('click', function() {
    scrollToSection('fotos-section');
  });

  document.querySelector('.nav-bar .contacts').addEventListener('click', function() {
    scrollToSection('contatos-section');
  });
});
