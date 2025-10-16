// Ambil semua tombol yang memiliki class "filter-btn"
// (All, Desain Grafis, Desain 3D, Fotografi)
const semua_tombol = document.querySelectorAll(".filter-btn");
const semua_gambar = document.querySelectorAll(".gambar");

//karna setiap button harus bisa di klik, dan menjalankan fungsi yg sama
//maka kita gunakan perulangan
semua_tombol.forEach((tombol_satuan) => {
  tombol_satuan.addEventListener("click", () => {
    // --- BAGIAN 1: Ubah tampilan tombol aktif ---
    semua_tombol.forEach((btn) => btn.classList.remove("active"));

    //tambahkan class active ke tombol yang sedang di pilih
    tombol_satuan.classList.add("active");

    // Bagian 2 : ambil kategori dari tombol yang di klik
    // all, desain grafis, 3d, foto
    const filter = tombol_satuan.getAttribute("data-filter");

    // BAGIAN 3 : Tampilkan atau sembunyikan item berdasarkan filter ---

    semua_gambar.forEach((gambar_satuan) => {
      if (filter === "all" || gambar_satuan.classList.contains(filter)) {
        //gambar akan tertampil
        gambar_satuan.style.display = "block";
      } else {
        gambar_satuan.style.display = "none";
      }
    });
  });
});
