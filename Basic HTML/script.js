// Ambil semua tombol yang memiliki class "filter-btn"
// (All, Desain Grafis, Desain 3D, Fotografi)
const semua_tombol = document.querySelectorAll(".filter-btn");
const semua_gambar = document.querySelectorAll(".gambar");

semua_tombol.forEach((tombol) => {
  tombol.addEventListener("click", () => {
   
    // --- BAGIAN 1: Ubah tampilan tombol aktif ---
    semua_tombol.forEach((btn) => btn.classList.remove("active"));
    tombol.classList.add("active");

    // --- BAGIAN 2: Ambil kategori dari tombol yang diklik ---
    // Contoh: <button data-filter="fotografi"> → nilainya "fotografi"
    const filter = tombol.getAttribute("data-filter");

    

    // --- BAGIAN 3: Tampilkan atau sembunyikan item berdasarkan filter ---
    semua_gambar.forEach((gambar) => {
      if (filter === "all" || gambar.classList.contains(filter)) {
        gambar.style.display = "block";
      } else {
        gambar.style.display = "none";
      }
    });
  });
});
