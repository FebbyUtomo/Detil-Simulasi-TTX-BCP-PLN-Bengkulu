# Simulasi TTX BCP Gempa Bumi & Blackout — PT PLN (Persero) UPT Bengkulu

Aplikasi web terpadu untuk pelaksanaan dan dokumentasi syuting **Simulasi Tabletop Exercise (TTX) Business Continuity Plan (BCP)** bencana gempa bumi tektonik 7,3 M dan pemadaman total (*blackout*) wilayah kerja PT PLN (Persero) UPT Bengkulu – UIP3B Sumatera.

---

## 🌟 Dua Mode Tampilan Terintegrasi

Proyek ini menyediakan 2 antarmuka yang saling terhubung:

### 1. 📺 Tampilan Layar TV Simulasi (`index.html`)
Dirancang khusus untuk layar TV 16:9 (full-screen) di **Ruang Komando Raflesia**:
- **Simulasi 6 Fase Interaktif**: Normal (Pra) → Gempa & Blackout → Rekomendasi BCP → Black-Start PLTA Tes 09.50 & BCP Aktif → Pemulihan 100% Hari ke-5 → BCP Ditutup Hari ke-15.
- **Single Line Diagram (SLD) 150 kV & GITET**: Status jalur transmisi, gardu induk, dan subsistem Bengkulu.
- **Monitoring CCTV (4 Kamera)**: GI Sukamerindu, GI Tes, Kantor UPT (Ruang Raflesia), dan jalur transmisi SUTT 150 kV.
- **Telemetri & KPI Real-Time**: Penyaluran beban (%), frekuensi sistem (Hz), gardu induk beroperasi, status SCADA, dan seismograf gempa.
- **Tombol Cepat**: Akses langsung ke Naskah & Blocking (`🎬 NASKAH & BLOCKING`).

### 2. 🎬 Dashboard Skrip Final & Blocking TTX (`skrip.html`)
Dirancang untuk **Facilitator, Sutradara, dan Peserta Simulasi** (dapat diakses nyaman melalui laptop, tablet, atau smartphone):
- **Dashboard & Dokumen Administrasi**: Identitas resmi, standar acuan (Edaran Direksi No. 0036.E/DIR/2022, KMRO No. 0001.I-KMRO-2023), grafik pencapaian RTO F1 (2 jam) & F2 (1 minggu), dan lembar pengesahan (Manager UPT & GM UIP3BS).
- **Naskah 20 Scene Lengkap**: Teks dialog setiap tokoh, arahan gerakan/blocking pemeran, dan cue tampilan visual monitor dengan filter pencarian per fase atau kata kunci.
- **Daftar 15 Pemeran BCM**: Tabel nama pejabat, jabatan struktural, peran dalam tim simulasi, dan mode kehadiran (Ruang Komando Fisik, Virtual Video Call, atau Interkom).
- **Linimasa 6 Fase**: Kronologis durasi dan alur penanganan darurat dari menit ke-0 hingga penutupan hari ke-15.
- **Sketsa Blocking Ruangan**: Denah visual tata letak meja komando, posisi monitor utama, layar sub-monitor video conference, dan posisi duduk masing-masing pejabat di Ruang Raflesia.
- **Tombol Navigasi**: Tautan kembali ke Layar TV Simulasi (`📺 Buka Layar TV Simulasi ↗`).

---

## 📁 Struktur File

```
Simulasi-TTX-BCP-PLN-Bengkulu/
├── index.html        # Tampilan TV 16:9 Simulasi (SCADA, CCTV, SLD 150 kV)
├── skrip.html        # Dashboard Naskah Scene, Pemeran, Blocking & Dokumen BCP
├── skrip.css         # Styling modern dark theme untuk dashboard skrip
├── skrip.js          # Logika interaktif, filter naskah, pencarian & Chart.js
├── vercel.json       # Konfigurasi deployment Vercel
└── README.md         # Dokumentasi lengkap proyek
```

---

## 🚀 Cara Menjalankan di Komputer Lokal

Cukup buka salah satu file HTML langsung di peramban (browser) web apa pun (Google Chrome, Edge, Firefox):
- Buka `index.html` untuk tampilan TV Simulasi.
- Buka `skrip.html` untuk tampilan naskah dan alur blocking.

---

## 🌐 Cara Deploy ke GitHub & Vercel

1. **Buat Repository Baru di GitHub**:
   - Buka [github.com/new](https://github.com/new).
   - Beri nama repository, misalnya: `Simulasi-TTX-BCP-PLN-Bengkulu`.
   - Pilih **Public** (atau Private sesuai preferensi Anda).
   - Klik **Create repository**.

2. **Upload / Push File ke GitHub**:
   - Anda dapat mengunggah file `index.html`, `skrip.html`, `skrip.css`, `skrip.js`, `vercel.json`, dan `README.md` langsung melalui web GitHub (*Upload files*) atau menggunakan Git CLI / GitHub Desktop.

3. **Deploy di Vercel**:
   - Masuk ke akun [vercel.com](https://vercel.com).
   - Klik **Add New...** → **Project**.
   - Pilih repository baru yang baru saja Anda buat di GitHub.
   - Klik **Deploy**.
   - Dalam beberapa detik, web Anda akan live dengan URL Vercel resmi!

---

## 📌 Identitas Dokumen Skenario

| Komponen Dokumen | Keterangan / Detail Administrasi |
|---|---|
| **Judul Kegiatan** | Simulasi Tabletop Exercise (TTX) Rencana Keberlangsungan Usaha (BCP) Bencana Gempa Bumi Tektonik & Blackout |
| **Nomor Referensi** | `SKP/TTX.BCP/UPT-BKL/2026.002` |
| **Unit Pelaksana** | PT PLN (Persero) Unit Pelaksana Transmisi Bengkulu — UIP3B Sumatera |
| **Tanggal Pelaksanaan** | 07 November 2026 |
| **Ketua Tim BCM** | Devy Martoni (Manager UPT Bengkulu) |
| **BC Director** | Elvanto Yanuar Ikhsan (GM UIP3BS) |
| **Fungsi Kritis F1** | Mengelola Operasi Sistem Tenaga Listrik (RTO: 2 jam, MAO: 6 jam) — *Tercapai 1 jam 50 menit* |
| **Fungsi Kritis F2** | Mengelola Operasi Sistem Transmisi (RTO: 1 minggu, MAO: 1 bulan) — *Tercapai Hari ke-5* |
| **Capaian K3L** | **103 Personel 100% Selamat — Zero Accident** |

