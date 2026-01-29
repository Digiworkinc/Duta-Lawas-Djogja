# Panduan Deployment - DK Jati (Format Sub-Folder)

Website ini telah dioptimalkan menjadi format **Single HTML** yang sangat fleksibel untuk diletakkan di dalam sub-folder GitHub Pages.

## 1. Cara Instalasi di GitHub
1. Masuk ke repository GitHub Anda (misalnya: `Digiworkinc/website-utama`).
2. Buat folder baru (misalnya: `dk-jati`).
3. Upload file `index.html` ke dalam folder tersebut.
4. Pastikan GitHub Pages diaktifkan di menu **Settings > Pages** pada repository Anda.

## 2. Cara Memanggil di Browser
Website Anda akan dapat diakses secara otomatis melalui URL:
`https://digiworkinc.github.io/[nama-repo]/dk-jati/`

## 3. Kenapa Menggunakan HashRouter?
Kami menggunakan `#` (Hash) dalam URL agar navigasi tetap bekerja sempurna meskipun website diletakkan di dalam sub-folder. 
Contoh: `.../dk-jati/#/portfolio` akan selalu mengarah ke halaman portofolio tanpa merusak struktur root repository Anda.

## 4. Cara Update
Karena formatnya Single HTML, Anda cukup mengedit file `index.html` jika ingin mengubah teks atau mengganti gambar secara permanen dalam kode.

---
Dikembangkan secara profesional untuk **DK Jati**.