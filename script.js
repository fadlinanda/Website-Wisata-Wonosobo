// Smooth scroll untuk menu navigasi
document.querySelectorAll('nav ul.menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // offset untuk header
        behavior: 'smooth'
      });
    }
  });
});

// Validasi form sederhana
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const nama = form.nama.value.trim();
  const email = form.email.value.trim();
  const pesan = form.pesan.value.trim();

  if (nama === '' || email === '' || pesan === '') {
    alert('Harap isi semua field dengan lengkap.');
    e.preventDefault();
    return false;
  }

  // Validasi email sederhana
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Masukkan alamat email yang valid.');
    e.preventDefault();
    return false;
  }
});

// Tombol scroll ke atas
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '30px';
scrollTopBtn.style.right = '30px';
scrollTopBtn.style.padding = '10px 15px';
scrollTopBtn.style.fontSize = '18px';
scrollTopBtn.style.display = 'none';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.borderRadius = '5px';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.backgroundColor = '#333';
scrollTopBtn.style.color = '#fff';
scrollTopBtn.style.zIndex = '1000';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Ganti ikon dan teks
    if (body.classList.contains("dark-mode")) {
      toggleButton.textContent = "☀️ Light Mode";
    } else {
      toggleButton.textContent = "🌙 Dark Mode";
    }
  });
});

