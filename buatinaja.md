# Brief Implementasi Landing Page --- Buatinaja IT Consultant

## 1. Tujuan

Buat website landing page profesional untuk **Buatinaja**, sebuah
layanan **IT Consultant** yang membantu bisnis merencanakan, membangun,
mengembangkan, dan merawat solusi teknologi. Desain harus mengikuti
gambar referensi yang diberikan sedekat mungkin, terutama dari sisi
komposisi, warna, jarak, bentuk kartu, efek glassmorphism, tipografi,
dan urutan section.

**Prioritas:** kemiripan visual dengan referensi lebih penting daripada
menambahkan elemen dekoratif baru. Jangan mengubah desain menjadi
template SaaS generik yang berbeda dari referensi.

## 2. Teknologi

-   Framework: **Next.js** dengan App Router.
-   Bahasa: TypeScript bila project menggunakannya; jika project sudah
    memakai JavaScript, pertahankan JavaScript.
-   Styling: CSS Modules atau global CSS yang terorganisasi. Gunakan CSS
    biasa untuk mendapatkan kontrol visual yang presisi.
-   Ikon: gunakan satu library ikon yang konsisten, misalnya Lucide.
-   Responsif: desktop, tablet, dan mobile.
-   Jangan menambahkan backend atau database untuk landing page ini.
-   Form email boleh menggunakan validasi frontend dan menampilkan pesan
    sukses. Jangan mengklaim email benar-benar terkirim jika belum
    terhubung ke layanan backend/email.

## 3. Arahan visual dari referensi

### Kanvas dan pembungkus halaman

-   Latar luar halaman berwarna abu-abu muda, kurang lebih `#D9DDE0`.
-   Letakkan satu panel halaman utama berwarna putih/off-white di
    tengah.
-   Panel memiliki sudut membulat besar, sekitar 22--28 px pada desktop.
-   Beri ruang luar yang cukup sehingga panel terlihat seperti halaman
    web di dalam kanvas, bukan langsung memenuhi seluruh viewport.
-   Pada desktop, gunakan lebar panel sekitar 92--95% viewport dengan
    batas lebar yang nyaman. Pertahankan proporsi vertikal panjang
    seperti gambar referensi.
-   Konten utama menggunakan warna putih, dengan elemen dekoratif yang
    sangat lembut di belakang section.
-   Gunakan banyak ruang kosong dan jarak antarseksi yang lega.

### Palet warna

Gunakan palet berikut sebagai titik awal; sesuaikan sedikit jika
diperlukan agar hasil akhirnya mendekati referensi.

  Kegunaan           Warna
  ------------------ -----------
  Latar luar         `#D9DDE0`
  Latar halaman      `#FCFCFE`
  Biru utama         `#1767E8`
  Biru terang        `#58B5FF`
  Biru muda          `#D9ECFF`
  Biru sangat muda   `#EEF6FF`
  Teks utama         `#151922`
  Teks sekunder      `#8B96A8`
  Garis/border       `#E8EEF6`
  Putih              `#FFFFFF`

### Gradient dan efek

-   Hero dan CTA bagian bawah memakai gradient biru cerah, dari biru
    muda di kiri/atas menuju biru lebih kuat di kanan/bawah.
-   Tambahkan glow radial putih/biru muda untuk efek cahaya lembut.
-   Kartu dan panel memiliki gradient putih ke biru muda, border putih
    transparan, bayangan lembut, serta sedikit efek blur bila sesuai.
-   Gunakan glassmorphism secara halus: transparansi,
    `backdrop-filter: blur(...)`, border tipis, dan bayangan lembut.
-   Hindari bayangan hitam pekat, warna neon berlebihan, atau gradient
    ungu/pink yang tidak ada di referensi.
-   Tambahkan garis grid yang sangat samar pada area hero bila hasilnya
    mendukung kemiripan.
-   Dekorasi abstrak berbentuk lapisan lengkung/gelombang biru di sisi
    kiri dan kanan hero serta CTA. Buat menggunakan CSS, bukan gambar
    berlisensi yang tidak tersedia.

### Tipografi

-   Pilih font sans-serif geometris yang modern dan membulat, misalnya
    **Manrope**, **Plus Jakarta Sans**, atau font serupa.
-   Headline menggunakan weight 600--700, tracking sedikit rapat, dan
    line-height sekitar 1.15--1.25.
-   Headline utama berwarna putih pada hero.
-   Judul section berwarna hitam gelap dengan kata/frasa tertentu diberi
    warna biru.
-   Teks pendukung kecil, abu-abu kebiruan, dengan line-height nyaman.
-   Gunakan ukuran responsif melalui `clamp()`.

## 4. Struktur halaman --- urutan harus dipertahankan

### Section A --- Hero

Buat hero besar di bagian paling atas panel putih.

**Komposisi desktop:** - Hero memiliki margin kiri/kanan sekitar 8--16
px dari panel halaman dan sudut membulat sekitar 14--18 px. - Tinggi
visual sekitar 340--390 px pada tampilan desktop, menyesuaikan lebar. -
Latar gradient biru dengan glow, grid tipis, dan dekorasi abstrak
berlapis di sisi bawah/kiri/kanan. - Navbar kecil berada di dalam hero
bagian atas. - Kiri: ikon bulat biru dengan simbol abstrak/teknologi dan
tulisan **Buatinaja**. - Kanan: tombol gelap berbentuk kapsul, ikon
menu, dan label **Menu**. - Di tengah, tampilkan badge kecil berbentuk
kapsul, misalnya `IT Solutions for Modern Business`. - Headline besar,
rata tengah, maksimal 2 baris: **"Build Smarter Digital Experiences with
Buatinaja"** - Teks putih. - Sorot nama **Buatinaja** dengan elemen ikon
bulat biru/putih atau aksen yang menyatu dengan teks seperti
referensi. - Di bawah headline, buat form email berbentuk kapsul: -
Placeholder: `Your work email address` - Tombol hitam/navy di sisi kanan
dengan ikon panah/lingkaran dan teks **Get Started** - Field dan tombol
terlihat seperti satu komponen menyatu, dengan border putih
transparan. - Pada area bawah hero, tampilkan 3 kartu dashboard melayang
yang sebagian berada dekat batas bawah hero. Jangan menutupi
headline/form. 1. Kartu ringkasan proyek/layanan. 2. Kartu utama lebih
besar dengan label **IT Consultation** atau **Project Overview**. 3.
Kartu ringkasan klien atau status proyek. - Kartu memakai gaya dashboard
mini seperti referensi: putih/biru muda, rounded corners, ikon bulat,
label kecil, angka/status, dan bayangan lembut. - Kartu boleh sedikit
terpotong pada batas bawah hero agar terasa berlapis, tetapi tidak boleh
menyebabkan overflow horizontal pada seluruh halaman.

### Section B --- Social proof / trust strip

Letakkan tepat di bawah hero.

-   Judul rata tengah: **"Trusted by Businesses Building Their Digital
    Future"**
-   Sorot frasa **"Digital Future"** atau angka seperti **"10+"** dengan
    warna biru.
-   Di bawah judul, buat barisan logo/wordmark placeholder dengan jarak
    merata. Gunakan nama yang bersifat contoh seperti `Notion`, `Slack`,
    `Loom`, `Monday.com`, `Shopify`, dan `Figma` hanya sebagai dekorasi
    demonstrasi, bukan klaim bahwa mereka adalah klien Buatinaja.
-   Alternatif yang lebih aman untuk website produksi: gunakan label
    kategori bisnis seperti `Retail`, `Manufacturing`, `Healthcare`,
    `Education`, dan `Professional Services`.
-   Logo tampil kecil, pada kapsul putih/biru pucat dengan bayangan
    tipis.
-   Pada mobile, gunakan horizontal scroll yang halus atau wrap tanpa
    menyebabkan halaman melebar.

### Section C --- Layanan utama

Judul kecil di atas: `BUATINAJA IT SOLUTIONS`

Judul utama rata tengah: **"Everything You Need to Build a Better
Digital Business"**

Warnai frasa **"Better Digital Business"** dengan biru.

Di bawah judul, buat tiga kartu layanan horizontal pada desktop, dengan
kartu tengah lebih menonjol dan sedikit lebih tinggi/maju, meniru
hierarki kartu pada referensi.

**Kartu 1 --- IT Consulting** - Deskripsi singkat: strategi teknologi,
analisis kebutuhan, dan roadmap digital. - Ikon sederhana dalam
lingkaran biru. - Label kecil seperti `Strategy & Planning`.

**Kartu 2 --- Custom Software** - Jadikan kartu ini kartu utama yang
paling menonjol. - Gunakan gradient biru muda dan glow lembut. -
Deskripsi: aplikasi web dan sistem yang disesuaikan dengan proses
bisnis. - Label kecil seperti `Web Apps • Business Systems`. -
Tombol/tautan kecil: `Explore Services`.

**Kartu 3 --- Cloud & IT Support** - Deskripsi: dukungan teknis,
integrasi, pemeliharaan, dan optimasi sistem. - Label kecil seperti
`Reliable Operations`.

Setiap kartu berisi ikon, judul, deskripsi ringkas, label atau chip
kecil, dan tautan sederhana. Hindari terlalu banyak teks.

### Section D --- Cara kerja / proses layanan

Judul kecil: `BUATINAJA WORKFLOW`

Judul utama: **"A Clear Process for Every Digital Project"**

Sorot kata **"Clear Process"** dengan warna biru.

Tampilkan satu panel ilustratif utama di tengah, bergaya dashboard/form
seperti kartu invoice pada referensi, tetapi relevan dengan konsultasi
IT.

Panel dapat berisi: - `Project Discovery` - `Business Goals` -
`Recommended Solution` - `Timeline` - `Next Step`

Gunakan kartu putih dengan border tipis, glow biru, radius besar, dan
shadow lembut. Tambahkan garis penghubung tipis ke chip langkah-langkah
seperti: 1. Discover 2. Plan 3. Build 4. Improve

Tujuannya adalah menggantikan ilustrasi pembayaran pada referensi dengan
ilustrasi proses konsultasi IT, tanpa mengubah komposisi tengah yang
minimalis.

### Section E --- Keamanan dan keandalan

Judul kecil: `BUATINAJA IT SECURITY`

Judul utama: **"Keep Your Business Data Secure and Reliable"**

Sorot **"Secure and Reliable"** dengan warna biru.

-   Deskripsi singkat tentang praktik pengembangan yang memperhatikan
    keamanan, akses, backup, dan keandalan.
-   Jangan membuat klaim sertifikasi atau jaminan keamanan absolut yang
    tidak dimiliki.
-   Di tengah, tampilkan kartu dashboard status sistem:
    -   `System Status` --- `Operational` (hanya ilustrasi visual)
    -   `Data Backup` --- `Configured` (contoh visual)
    -   `Access Control` --- `Managed` (contoh visual)
-   Tambahkan chip pengguna/avatar kecil di kiri dan kanan yang
    terhubung ke kartu utama dengan garis tipis.
-   Gunakan ikon shield, lock, cloud, dan check dalam lingkaran kecil.
-   Semua status harus dipahami sebagai contoh desain, bukan pemantauan
    sistem live.

### Section F --- Solusi dalam praktik / fitur

Buat section dua kolom seperti bagian "Collect All Payments" di
referensi.

**Kolom kiri:** - Badge kecil: `DIGITAL TRANSFORMATION` - Headline:
**"Turn Complex Workflows Into Simple Digital Solutions"** - Sorot
**"Simple Digital Solutions"** dengan biru. - Paragraf pendek tentang
otomasi pekerjaan berulang, integrasi data, dan aplikasi sesuai
kebutuhan bisnis. - Di bagian bawah, tampilkan 4 chip fitur: -
`Custom Web Apps` - `Workflow Automation` - `System Integration` -
`IT Support`

**Kolom kanan:** - Kartu ilustrasi aplikasi/dashboard yang tampak
melayang. - Tampilkan ringkasan `Project Workspace`,
`Development Progress`, progress bar, dan status `Ready for Review`. -
Gunakan gaya visual dashboard yang sama dengan kartu-kartu sebelumnya. -
Pada desktop, teks di kiri dan ilustrasi di kanan. Pada mobile, susun
vertikal.

### Section G --- CTA akhir

Letakkan CTA besar menjelang footer, hampir selebar panel halaman
seperti hero.

-   Background gradient biru terang dengan glow dan bentuk abstrak
    berlapis di sisi kiri/kanan.
-   Radius sekitar 14--18 px.
-   Headline putih rata tengah: **"Let's Build Something Great
    Together"**
-   Subheadline:
    `Tell us what your business needs. We’ll help you find the right technology solution.`
-   Form email berbentuk kapsul, konsisten dengan hero:
    -   Placeholder: `Your work email address`
    -   Tombol: `Start a Project`
-   Pertahankan ruang kosong di sekeliling headline agar terasa ringan
    dan premium.

### Section H --- Footer

Footer putih/off-white, sederhana, dan tidak terlalu tinggi.

-   Kiri: logo/ikon Buatinaja dan deskripsi singkat:
    `Practical IT consulting and digital solutions for growing businesses.`
-   Kolom **Explore**:
    -   Services
    -   Our Process
    -   About Buatinaja
    -   Contact
-   Kolom **Services**:
    -   IT Consulting
    -   Custom Software
    -   Cloud & IT Support
-   Kolom **Connect**:
    -   Email
    -   LinkedIn
    -   Instagram (jika tersedia)
-   Baris paling bawah dipisahkan border tipis:
    -   Kiri: `Buatinaja`
    -   Kanan: `© [tahun berjalan] Buatinaja. All rights reserved.`
-   Jangan membuat alamat email, akun media sosial, alamat kantor, atau
    nomor telepon palsu. Gunakan placeholder yang jelas atau hapus
    sampai data resmi tersedia.

## 5. Detail layout dan ukuran

Gunakan nilai ini sebagai baseline, lalu sesuaikan setelah membandingkan
hasil render dengan gambar referensi.

-   Outer background desktop: `#D9DDE0`.
-   Main page wrapper: `width: min(100% - 48px, 1200px)` atau proporsi
    yang menghasilkan panel seperti referensi.
-   Main wrapper background: `#FCFCFE`.
-   Main wrapper radius desktop: `24px`.
-   Padding horizontal section: sekitar `48–64px` pada desktop.
-   Padding section tablet: `32px`.
-   Padding section mobile: `20–24px`.
-   Hero inset: `8–12px` dari tepi wrapper.
-   Section title: `clamp(28px, 3vw, 42px)`.
-   Hero title: `clamp(32px, 4.2vw, 56px)`.
-   Body text: `14–16px`.
-   Small badge/eyebrow: `10–12px`.
-   Card radius: `14–20px`.
-   Pill radius: `999px`.
-   Border: 1px solid dengan warna biru/abu-abu sangat pucat.
-   Gunakan `max-width` pada headline dan paragraf agar panjang baris
    tidak terlalu lebar.
-   Spacing antar section harus lega, tetapi jangan membuat halaman
    terlalu kosong dibanding referensi.
-   Hindari border yang terlalu gelap dan komponen yang terlalu padat.

## 6. Responsivitas

### Desktop (min-width: 1024px)

-   Hero headline dan email form berada di tengah.
-   Tiga kartu hero saling bertumpuk secara visual di bagian bawah.
-   Tiga kartu layanan berjajar; kartu tengah paling menonjol.
-   Section fitur memakai layout dua kolom.
-   Footer memakai beberapa kolom.

### Tablet (768px--1023px)

-   Kurangi padding dan ukuran headline.
-   Kartu layanan boleh tetap 3 kolom bila muat; jika tidak, gunakan
    grid 2 kolom dengan kartu utama membentang.
-   Pastikan kartu hero tidak bertabrakan dengan form.

### Mobile (di bawah 768px)

-   Panel utama hampir memenuhi viewport dengan margin luar kecil.
-   Kurangi radius panel agar sesuai ruang layar.
-   Hero headline 2--4 baris, tetap rata tengah.
-   Navbar tetap sederhana; tombol menu tidak boleh terpotong.
-   Kartu hero diatur ulang menjadi susunan ringkas atau sebagian
    ditampilkan; jangan memaksa 3 kartu berdampingan.
-   Semua section menjadi satu kolom.
-   Hilangkan atau sederhanakan dekorasi yang mengganggu keterbacaan.
-   Form email memiliki lebar penuh dan tetap nyaman digunakan.
-   Footer menjadi satu kolom atau accordion sederhana jika diperlukan.
-   Pastikan tidak ada horizontal overflow.

## 7. Interaksi

-   Tombol `Menu` membuka dropdown atau panel navigasi sederhana.
-   Link navbar menggulir ke section yang sesuai dengan smooth
    scrolling.
-   Form email memiliki validasi email dasar dan pesan error yang jelas.
-   Setelah submit, tampilkan pesan seperti `Thanks! We’ll be in touch.`
    hanya sebagai konfirmasi frontend. Jelaskan di kode bahwa integrasi
    backend/email perlu ditambahkan agar data benar-benar terkirim.
-   Kartu layanan dapat mengarah ke section Contact atau halaman layanan
    jika halaman tersebut tersedia.
-   Semua tombol harus memiliki aksi yang berfungsi; jangan meninggalkan
    tombol dekoratif yang terlihat aktif tetapi tidak melakukan apa-apa.
-   Tambahkan focus state keyboard dan label aksesibel pada input.

## 8. Aksesibilitas dan kualitas implementasi

-   Gunakan struktur semantik: `header`, `nav`, `main`, `section`,
    `footer`.
-   Satu `h1` utama untuk halaman; judul section menggunakan hierarki
    heading yang benar.
-   Kontras teks harus cukup terbaca, terutama teks kecil di atas
    gradient.
-   Tambahkan `aria-label` pada tombol ikon yang tidak memiliki teks.
-   Jangan menggunakan emoji sebagai pengganti semua ikon UI.
-   Gunakan animasi minimal: fade/slide pendek saat elemen masuk
    viewport dan hover halus pada kartu.
-   Hormati `prefers-reduced-motion`.
-   Jangan memakai animasi berlebihan, parallax berat, atau efek yang
    mengganggu performa.
-   Optimalkan gambar dan hindari memasang library besar hanya untuk
    efek kecil.
-   Gunakan komponen reusable, misalnya `Navbar`, `HeroSection`,
    `TrustStrip`, `ServiceCard`, `ProcessSection`, `SecuritySection`,
    `FeatureSection`, `FinalCTA`, dan `Footer`.

## 9. Arah implementasi Next.js

Jika membuat project baru, gunakan struktur App Router yang sesuai
dengan project:

``` text
Buatinaja/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── TrustStrip.tsx
│   ├── ServicesSection.tsx
│   ├── ProcessSection.tsx
│   ├── SecuritySection.tsx
│   ├── FeatureSection.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
└── public/
    └── images/
```

Sesuaikan ekstensi file dengan JavaScript atau TypeScript yang digunakan
project.

### Aturan kode

-   Pastikan semua komponen di-import dengan benar.
-   Jangan gunakan API browser seperti `window` langsung saat server
    rendering; gunakan event handler atau `useEffect` bila memang
    diperlukan.
-   Jangan menambahkan `"use client"` pada semua komponen. Gunakan hanya
    pada komponen yang memerlukan interaksi.
-   Jangan mengarang URL, akun sosial, logo klien, statistik pelanggan,
    atau testimoni nyata.
-   Jika menggunakan logo perusahaan lain sebagai placeholder, beri
    komentar bahwa itu contoh dan ganti sebelum website dipublikasikan.
-   Pastikan `npm run dev` berjalan tanpa error dan tidak ada error
    console yang belum ditangani.

## 10. Checklist kemiripan visual

Sebelum menyelesaikan, bandingkan hasil di browser dengan gambar
referensi.

-   [ ] Latar luar abu-abu muda dengan panel utama putih rounded.
-   [ ] Hero biru besar dengan glow, grid halus, dan bentuk abstrak di
    sisi.
-   [ ] Logo kecil di kiri atas dan tombol Menu gelap berbentuk kapsul
    di kanan.
-   [ ] Headline putih rata tengah dan form email kapsul.
-   [ ] Kartu dashboard mini yang overlap di bawah hero.
-   [ ] Trust strip dengan judul di tengah dan deretan logo/chip.
-   [ ] Judul section rata tengah, hitam dengan aksen biru.
-   [ ] Tiga kartu layanan, kartu tengah lebih menonjol.
-   [ ] Ilustrasi dashboard/form di tengah section proses.
-   [ ] Section keamanan dengan satu kartu status utama dan elemen kecil
    di sekelilingnya.
-   [ ] Section fitur dua kolom dengan ilustrasi kartu di kanan.
-   [ ] CTA akhir menggunakan gradient biru dan form kapsul.
-   [ ] Footer sederhana dengan beberapa kolom.
-   [ ] Radius, shadow, border, dan whitespace konsisten.
-   [ ] Tampilan mobile rapi tanpa horizontal scroll.
-   [ ] Tidak ada teks yang terpotong, elemen tumpang tindih, atau
    tombol palsu.

## 11. Instruksi akhir untuk AI coding assistant

Implementasikan landing page secara lengkap, bukan hanya membuat
wireframe atau deskripsi. Gunakan gambar referensi yang diberikan
sebagai acuan visual utama. Pertahankan urutan section, proporsi,
whitespace, warna, gradient biru, rounded corners, kartu glassmorphism,
dan tipografi yang mendekati referensi.

Ganti seluruh konten pembayaran pada referensi dengan konten **IT
Consultant Buatinaja**, tetapi pertahankan pola komposisi visualnya.
Buat tampilan awal yang polished, responsif, dan konsisten. Setelah
implementasi, periksa halaman melalui browser pada ukuran desktop dan
mobile, perbaiki masalah visual, dan berikan ringkasan file yang dibuat
serta cara menjalankannya.
