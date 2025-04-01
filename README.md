# Lana Portfolio Website

Portfolio website modern yang dibangun dengan Next.js, menampilkan karya dan keterampilan profesional Lana sebagai Web Developer & Designer.

## Fitur

- **Desain Responsif** - Tampilan yang optimal di berbagai perangkat (desktop, tablet, mobile)
- **Animasi Modern** - Menggunakan Framer Motion untuk animasi yang menarik dan interaktif
- **UI Komponen** - Dibangun dengan Shadcn UI dan Tailwind CSS untuk desain yang konsisten
- **Mode Gelap/Terang** - Dukungan tema gelap dan terang
- **Halaman About** - Menampilkan informasi tentang keterampilan, pengalaman, dan pendidikan
- **Portofolio** - Showcase karya dan proyek
- **Kontak** - Formulir kontak untuk menghubungi

## Teknologi

- [Next.js 15](https://nextjs.org/) - Framework React dengan fitur SSR, SSG, dan routing
- [React 19](https://react.dev/) - Library JavaScript untuk membangun antarmuka pengguna
- [Tailwind CSS 4](https://tailwindcss.com/) - Framework CSS utility-first
- [Shadcn UI](https://ui.shadcn.com/) - Komponen UI yang dapat digunakan kembali
- [Framer Motion](https://www.framer.com/motion/) - Library animasi untuk React
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript dengan tipe statis
- [Radix UI](https://www.radix-ui.com/) - Komponen UI headless yang dapat diakses
- [Tabler Icons](https://tabler-icons.io/) - Set ikon SVG yang indah

## Memulai

Pertama, clone repository ini dan install dependensi:

```bash
git clone https://github.com/maulana-tech/Lana-Developer.git
cd lana-portfolio
npm install
```

Kemudian, jalankan server pengembangan:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) dengan browser Anda untuk melihat hasilnya.

Anda dapat mulai mengedit halaman dengan memodifikasi `src/app/page.tsx`. Halaman akan diperbarui secara otomatis saat Anda mengedit file.

Proyek ini menggunakan [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) untuk mengoptimalkan dan memuat font [Geist](https://vercel.com/font), font baru dari Vercel.

## Struktur Proyek

```
/public          # Aset statis (gambar, ikon)
/src
  /app           # Halaman aplikasi (routing berbasis file)
  /components    # Komponen React yang dapat digunakan kembali
    /ui          # Komponen UI dasar (Shadcn UI)
  /lib           # Utilitas dan fungsi helper
```

## Deploy di Vercel

Cara termudah untuk men-deploy aplikasi Next.js Anda adalah menggunakan [Platform Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dari pembuat Next.js.

Lihat [dokumentasi deployment Next.js](https://nextjs.org/docs/app/building-your-application/deploying) untuk informasi lebih lanjut.
