// Menangani login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah form submit biasa

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Mengecek login (contoh sederhana)
  if (username === "admin" && password === "123") {
    localStorage.setItem('isLoggedIn', 'true'); // Simpan status login
    window.location.href = 'dashboard.html'; // Arahkan ke dashboard
  } else {
    errorMessage.textContent = "Username atau password salah!";
  }
});

// Menangani logout
function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'index.html'; // Kembali ke form login
}

// Memeriksa status login saat membuka dashboard
if (!localStorage.getItem('isLoggedIn')) {
  window.location.href = 'index.html'; // Jika tidak login, arahkan ke login
}

// Menampilkan nama pengguna di dashboard
const userName = document.getElementById('userName');
userName.textContent = `Hello, ${localStorage.getItem('username') || 'Admin'}`;

// Simulasi riwayat presensi (bisa diganti dengan data dari API)
const notifications = [
  "Presensi Anda sudah berhasil dicatat untuk hari ini.",
  "Jangan lupa mengisi presensi besok pagi."
];

const notificationList = document.getElementById('notifications');
notifications.forEach((notification) => {
  const listItem = document.createElement('li');
  listItem.textContent = notification;
  notificationList.appendChild(listItem);
});
