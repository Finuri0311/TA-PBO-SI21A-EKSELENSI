// Buat fungsi untuk mengirim form absensi
function submitForm() {
    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;
    const tglMasuk = document.getElementById("tgl_masuk").value;
    const tglKeluar = document.getElementById("tgl_keluar").value;
    
    // Buat variabel untuk menampung data kegiatan
    let kegiatan = [];
    
    // Ambil data dari database atau sumber daya lainnya
    // kemudian push array kegiatan
    kegiatan.push({
        no: 1,
        kegiatan: "Kegiatan 1",
        tanggal: "2022-01-01",
        jam: "09:00",
        deskripsi: "Deskripsi kegiatan 1"
    });
    kegiatan.push({
        no: 2,
        kegiatan: "Kegiatan 2",
        tanggal: "2022-01-02",
        jam: "10:00",
        deskripsi: "Deskripsi kegiatan 2"
    });
    // Tambahkan data lainnya disini
    
    // Kirim data ke server untuk ditamb