# Personal Portfolio Starter

React + Vite starter with React Router and Tailwind CSS.

## Stack

- React 19 + Vite
- React Router
- Tailwind CSS

## Structure

- `src/components` reusable UI pieces
- `src/layouts` shared page layouts
- `src/pages` route level screens
- `src/routes` router configuration
- `src/data` content and navigation data

## Quick start

```bash
npm install
npm run dev
```

## Customize

- Update content in `src/data/site.js`.
- Adjust theme tokens in `tailwind.config.js` and `src/index.css`.
- Add new routes in `src/routes/router.jsx`.

## Revisi interaksi — 25 Oktober 2026

Lihat `PERBAIKAN_DAN_PENGUJIAN.md` untuk daftar perubahan, hasil uji dan batasan aset/data.

- Data enam kartu **My Latest Project** kini berada di `src/data/projects.js` (bukan array contoh `projects` di `src/data/site.js`).
- Field yang tersedia dipertahankan. Modal juga dapat menampilkan `overview`, `features` (array string), `role`, `contributions` (array string), `year`, dan `links` (array `{ label, url }`) jika informasi aslinya sudah tersedia. Isi hanya dengan data yang benar.
- Foto menggunakan `public/assets/habib.png`, yang kini berisi foto berwarna unggahan terbaru pengguna. Efek hover menampilkan warna asli; ukuran tampilan tetap.
- Hover/fokus membuka tooltip. Klik/tap menahannya; Escape atau klik/tap luar menutup. Pada palette, klik lalu gunakan Copy HEX; pengguna keyboard dapat menekan Tab dari trigger.
- `npm test` menjalankan pengujian geometri tooltip tanpa dependency tambahan.
- `npm run build` menghasilkan `dist/`; `npm run preview` menjalankan preview produksi.

Revisi lanjutan memperbaiki backdrop My Journey agar menempel ke kiri dan mengisi area kosong backdrop My Journey/Contact. Layout dan konten lain tetap.
