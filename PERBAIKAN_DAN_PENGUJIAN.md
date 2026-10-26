# Revisi interaksi portfolio — 25 Oktober 2026

Perubahan diterapkan pada source project yang diunggah, tanpa dependency aplikasi baru. Komposisi Hero, tulisan Portfolio, kartu proyek dan layout bagian lain dipertahankan. Foto About Me serta backdrop My Journey/Contact diperbarui pada revisi lanjutan berikut.

## Revisi lanjutan: foto dan backdrop

Sesuai permintaan lanjutan, perubahan website dibatasi pada empat berkas:

- `public/assets/habib.png`: diganti dengan foto 433×433 yang diunggah pengguna, byte demi byte tanpa pengolahan ulang. Ukuran/crop tampilan, pita dan tooltip tetap memakai kode yang sudah ada. Hover sekarang menampilkan warna asli.
- `src/sections/ExperienceSection.jsx`: kedua SVG backdrop ditempatkan di lapisan section yang sama, di luar container konten. Aset kiri kembali terlihat dan menempel pada sisi kiri viewport.
- `src/sections/ContactSection.jsx`: ilustrasi latar dimasukkan ke lapisan backdrop tersendiri.
- `src/styles/responsive.css`: hanya aturan backdrop My Journey/Contact yang diubah. Ukuran backdrop mengikuti section; tambahan gradasi warna yang sudah ada mengisi area kosong. Ilustrasi Contact memakai `object-fit: contain` dan posisi kanan-bawah agar tidak membesar/terpotong seperti sebelumnya. SVG Contact asli tidak diubah.

README/catatan ini diperbarui agar keterangan foto tidak kedaluwarsa; `dist/` dibangun ulang. Tidak ada perubahan data perjalanan, teks, form, social links, Hero, kartu proyek, maupun komponen interaksi.

Validasi revisi lanjutan:

- `npm run lint` dan `npm run build` berhasil.
- Chromium headless pada 320×568, 390×844, 768×1024, 1440×1000 dan 1920×1080: batas backdrop sesuai section, sisi kiri My Journey tepat x=0, tanpa overflow horizontal, dan input Contact dapat digunakan.
- Perbandingan otomatis dengan ZIP revisi sebelumnya: teks serta posisi/ukuran konten Hero, About, Skills, Projects, Achievements, seluruh baris My Journey, judul, form dan tombol sosial Contact sama pada kelima viewport tersebut.
- Foto baru, transisi grayscale ke warna, pemulihan grayscale, tooltip, dan modal proyek diperiksa; tidak ada console error/page error aplikasi.
- Screenshot desktop/HP diperiksa secara visual. Pengujian ini menggunakan emulasi browser, bukan perangkat fisik.

## Akar masalah tooltip

Kode awal menempatkan popup `position: fixed` di dalam dekorasi yang memiliki CSS `filter: blur(...)`. Filter selain `none` membentuk containing block bagi anak berposisi fixed. Koordinat `clientX/clientY` dihitung terhadap viewport, sedangkan posisi popup ditafsirkan terhadap containing block tersebut. Saat hover menghilangkan filter, konteks posisinya ikut berubah. Transform pada artwork/reveal dan kondisi ancestor juga membuat pendekatan popup bersarang tidak andal. Kode lama juga memiliki posisi fallback dan event resize per trigger yang tidak dibersihkan.

Perbaikan menggunakan satu komponen `CursorTooltip`, dengan portal ke `document.body`. Koordinat kursor, shell popup, dan SVG connector kini memakai acuan viewport yang sama. Koordinat diinisialisasi sebelum pembukaan; pengukuran dan posisi pertama dilakukan dalam `useLayoutEffect` sebelum paint. Layer belum terlihat sebelum memiliki posisi. Pergerakan menggunakan refs dan satu `requestAnimationFrame`, tanpa setState pada setiap pointer move. Shell posisi terpisah dari animasi isi, sehingga tidak ada interpolasi posisi atau transform entrance yang menarik popup ke lokasi lama.

Ukuran popup dibatasi viewport, termasuk `visualViewport`. Posisi memilih sisi kanan, kiri, bawah atau atas dan mempertahankan sisi yang masih cukup ruang. Scroll/resize memperbarui posisi; hover ditutup jika objek sudah tidak berada di bawah kursor. Observer, event listener, dan RAF dibersihkan ketika popup ditutup/unmount.

## Hasil implementasi

- Hero dan foto About Me menggunakan tooltip bersama dengan konten yang didukung source awal.
- Ekor tooltip terdiri dari dua SVG path tipis terpisah, dengan sela 2px di siku. Garis pertama digambar selama 120ms, garis kedua pada 120–240ms, kemudian body fade-in pada 240–400ms. Posisi dan geometri tetap diperbarui saat kursor bergerak. Reduced motion menampilkan keduanya langsung.
- Klik/tap dapat menahan tooltip agar isi interaktif dapat digunakan. Tap kedua, tap di luar, atau Escape menutup. Fokus keyboard membuka tooltip dan membawa artwork ke viewport. Copy HEX pada palette tetap berfungsi; Tab menuju tombolnya.
- Pita `ABOUT ME` yang berada di bawah foto diberi reveal dari kanan-atas (`32px -28px`) menuju offset nol. Observer yang sudah ada menjalankannya satu kali. Dimensi dan posisi akhir pita dipertahankan.
- Foto memiliki transisi filter dan lapisan tint 400ms. Hover/fokus/tap melepaskan grayscale, contrast tambahan dan tint; keluar hover atau menutup interaksi mengembalikan treatment awal. Pada revisi awal aset foto tidak diubah; pada revisi lanjutan diganti menggunakan unggahan pengguna.
- Tombol panah yang sudah ada pada masing-masing kartu membuka modal bersama. Record dipilih dari `src/data/projects.js` menggunakan ID stabil dan object proyek yang diklik.
- Modal memakai native `dialog` di top layer, label aksesibel, backdrop, tombol tutup, Escape, focus trap, pengembalian fokus, serta penguncian dan pemulihan scroll. Klik bagian dalam tidak menutup modal. Exit animation selesai sebelum komponen dilepas.
- Konten panjang dapat digulir, header/tombol tutup tetap tersedia, daftar teknologi dapat membungkus. Field yang tidak tersedia tidak ditampilkan. Gambar yang tidak tersedia disembunyikan di modal; fallback gambar pada kartu tetap seperti semula.

## Berkas diubah atau ditambahkan

| Berkas | Perubahan |
| --- | --- |
| `src/sections/HeroSection.jsx` | Mengganti implementasi tooltip lama dengan komponen bersama; mempertahankan konten dan Copy HEX. |
| `src/sections/AboutSection.jsx` | Tooltip foto, transisi foto dan reveal pita. |
| `src/sections/ProjectSection.jsx` | Pemilihan proyek dan pembukaan modal. |
| `src/components/ProjectCard.jsx` | Tombol yang sudah ada memanggil pembukaan modal. |
| `src/components/AssetImage.jsx` | Opsi menyembunyikan gambar tak tersedia, khusus digunakan modal. |
| `src/components/CursorTooltip.jsx` | Baru: portal, lifecycle, pointer/keyboard/touch dan SVG connector. |
| `src/utils/tooltipGeometry.js` | Baru: perhitungan posisi dan connector terhadap viewport. |
| `src/components/ProjectDetailsModal.jsx` | Baru: modal aksesibel dan animasi masuk/keluar. |
| `src/data/projects.js` | Baru: enam record kartu asli, ditambahkan ID stabil. |
| `src/styles/responsive.css` | Styling yang terkait tooltip, About dan modal. |
| `tests/tooltipGeometry.test.mjs` | Baru: uji batas viewport, arah connector dan viewport offset. |
| `package.json` | Menambahkan perintah `npm test`; dependency tidak berubah. |
| `README.md` | Petunjuk menjalankan dan lokasi data proyek aktual. |
| `PERBAIKAN_DAN_PENGUJIAN.md` | Catatan revisi ini. |
| `dist/` | Hasil build produksi. |

## Pengujian yang benar-benar dijalankan

- `npm ci --no-audit --no-fund`: instalasi dependency dari lockfile berhasil.
- `npm run lint`: lulus.
- `npm test`: 8 pengujian Node lulus. Mencakup kombinasi titik tepi/sudut pada viewport 320×568, 390×844, 768×1024, 1440×1000, 1920×1080 dan 320×280; empat arah connector, sisi yang stabil, dan offset visual viewport.
- `npm run build`: berhasil.
- Pengujian browser otomatis menggunakan Playwright dengan Chromium headless: 24 kelompok pemeriksaan lulus. Kelima objek Hero diuji dengan hover dan gerak cepat; posisi awal, dua path, tepi viewport, keyboard, resize, scroll, Copy HEX, dan Escape diperiksa.
- Foto About Me: konten tooltip, pelepasan filter/tint, pemulihan saat pointer keluar, tap, tap kedua dan tap luar diperiksa.
- Setiap satu dari enam tombol proyek: ID terpilih, judul, teknologi, scroll lock, fokus awal, Tab/Shift+Tab, klik bagian dalam dan pemulihan fokus diperiksa. Penutupan tombol, Escape, dan backdrop masing-masing diuji dua kali.
- Layout modal diperiksa pada 320×568, 390×844, 768×1024, 844×390 dan 1440×1000. Overflow horizontal dan akses tombol tutup diperiksa.
- Data uji sementara dengan judul/teknologi berbeda, fitur, peran, kontribusi, link dan deskripsi sangat panjang diinjeksikan hanya ke browser. Hasil memastikan detail tidak tertukar, field opsional berfungsi, dan konten panjang dapat digulir pada lebar 320px. Data uji tidak disimpan ke project.
- Dengan motion normal: urutan delay connector 0/120/240ms, koordinat awal, reveal pita dari kanan-atas, reveal satu kali, dan penundaan unmount sampai exit modal selesai diperiksa. Reduced motion juga diuji.
- Pengujian terakhir mencatat nol console error/page error aplikasi.
- Preview dari build produksi diuji pada viewport 390×844: halaman utama, tooltip Bootstrap, modal proyek keenam, penutupan Escape, dan nol error browser.
- Tampilan desktop Hero, About, kartu proyek, tooltip dan modal serta modal HP diperiksa melalui screenshot browser. Screenshot About/kartu dalam kondisi biasa identik dengan source awal pada viewport yang dibandingkan. Pada revisi awal, markup judul Hero dan semua 18 aset asli dibandingkan byte demi byte dan tetap sama. Pada revisi lanjutan, satu aset foto diganti atas permintaan pengguna; aset lainnya tetap sama.

## Batasan sumber dan lingkungan

1. **Batasan foto telah terselesaikan.** Aset monokrom lama diganti dengan foto berwarna yang diunggah pengguna pada revisi lanjutan. Efek hover kini dapat menampilkan warna aslinya.
2. **Keenam proyek masih memiliki data sumber yang identik**: “Laravel Project”, “Ecommerce web solution”, Laravel/MySQL/Tailwind/Stripe. Perbedaannya hanya path gambar, yang keenam filenya tidak ada dalam ZIP. Fitur rinci, kontribusi dan link proyek belum tercantum. Modal menampilkan record yang benar, tetapi teksnya akan tetap sama hingga data asli dilengkapi. Data contoh lain di `site.js` tidak dicampurkan karena tidak terbukti berkaitan dengan enam kartu tersebut.
3. Pengujian dilakukan pada Chromium headless dengan emulasi viewport/touch, bukan perangkat Android/iPhone fisik atau Safari/Firefox. Tidak ada klaim pengujian perangkat/browser tersebut.
4. Dependency awal memunculkan peringatan paket lama/engine legacy, Browserslist lama, dan saran plugin dari Vite. Tidak ada perubahan dependency di luar lingkup permintaan. Lint, test, dan build berhasil meskipun peringatan tersebut ada.

## Menjalankan

```bash
npm ci
npm run dev
```

Pemeriksaan dan preview produksi:

```bash
npm run lint
npm test
npm run build
npm run preview
```

`dist/` dapat digunakan untuk hosting statis dengan fallback SPA menuju `index.html`. Jangan membuka `index.html` source langsung melalui file explorer.
