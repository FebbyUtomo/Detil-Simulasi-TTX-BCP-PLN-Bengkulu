// ===================================================================
// DATA: Semua data diambil dari dokumen resmi Skrip TTX BCP PLN UPT Bengkulu
// ===================================================================

const pemeranData = [
    { no: 1, nama: 'Facilitator / Moderator', jabatan: 'Specialist Risk & Continuity Management', peran: 'Pengendali Skenario & Inject Master', mode: 'Fisik' },
    { no: 2, nama: 'Direktur Transmisi', jabatan: 'Direktur Transmisi & Perencanaan Sistem PT PLN (Persero) Pusat', peran: 'Direktur Pembina BCM Korporat (Approver)', mode: 'Virtual' },
    { no: 3, nama: 'Elvanto Yanuar Ikhsan', jabatan: 'General Manager PLN UIP3B Sumatera', peran: 'Business Continuity Director / CM Leader', mode: 'Virtual' },
    { no: 4, nama: 'Hendrawan Susanto', jabatan: 'Senior Manager Operasi Sistem (SM OPSIS) UIP3BS', peran: 'BC Coordinator / PIC F1 Operasi Sistem', mode: 'Virtual' },
    { no: 5, nama: 'Muh. Taufik A. / Rikardo S.', jabatan: 'Senior Manager Sistem Transmisi (SM SISTRANS I/II)', peran: 'BC Coordinator / PIC F2 Transmisi', mode: 'Virtual' },
    { no: 6, nama: 'Yenti Elfina', jabatan: 'Senior Manager Keuangan, Komunikasi & Umum UIP3BS', peran: 'BC Personel / PIC CMP Humas & Logistik', mode: 'Virtual' },
    { no: 7, nama: 'Devy Martoni', jabatan: 'Manager PLN UPT Bengkulu', peran: 'Koordinator BCP UPT / CM Sub-Leader', mode: 'Fisik' },
    { no: 8, nama: 'Asrul Abdika Hasibuan', jabatan: 'Manager ULTG Pekalongan', peran: 'PIC ERP/CMP Wilayah Bengkulu Utara', mode: 'Fisik' },
    { no: 9, nama: 'Muhammad Afrizal', jabatan: 'Manager ULTG Lahat', peran: 'PIC ERP/CMP Wilayah Penyangga Selatan', mode: 'Fisik' },
    { no: 10, nama: 'Joffrian M', jabatan: 'Assistant Manager Perencanaan & Evaluasi UPT', peran: 'Tim Sekretariat BCM & Evaluator', mode: 'Fisik' },
    { no: 11, nama: 'Rio Rona Andika', jabatan: 'Assistant Manager Konstruksi & Penyaluran UPT', peran: 'Coordinator Tim Teknis Pemulihan F2', mode: 'Fisik' },
    { no: 12, nama: 'Rachmad Fajar', jabatan: 'Assistant Manager PDKB UPT Bengkulu', peran: 'Koordinator Penanganan Darurat Jalur', mode: 'Fisik' },
    { no: 13, nama: 'Arnold Siagian', jabatan: 'Assistant Manager Keuangan & Umum UPT', peran: 'Koordinator Logistik & Alternate Site', mode: 'Fisik' },
    { no: 14, nama: 'Hendra Herawan', jabatan: 'Team Leader K3L & Keamanan UPT Bengkulu', peran: 'Koordinator Keselamatan Jiwa & Akses', mode: 'Fisik' },
    { no: 15, nama: 'Dispatcher / Operator GI', jabatan: 'Dispatcher UP2B & Operator GI Sukamerindu/Tes', peran: 'Pelaksana Operasional Lapangan', mode: 'Hybrid' },
];

const sceneData = [
    {
        fase: 1, faseLabel: 'ERP (0–60 MENIT)', scene: 1, title: 'Pembukaan Simulasi TTX',
        blocking: 'Seluruh tim UPT Bengkulu duduk di Meja Komando UPT. Facilitator berdiri di depan monitor utama. Devy Martoni di kepala meja.',
        visual: 'TABLETOP EXERCISE (TTX) BCP - SKENARIO BENCANA GEMPA BUMI TEKTONIK & BLACKOUT WILAYAH PLN UPT BENGKULU',
        dialogs: [
            { speaker: 'Facilitator / Moderator', text: 'Selamat pagi Bapak dan Ibu sekalian. Hari ini kita melaksanakan Tabletop Exercise (TTX) BCP UPT Bengkulu dengan skenario kondisi terburuk bencana gempa bumi tektonik berkekuatan 7,3 M yang mengguncang pesisir dan daratan Bengkulu. Simulasi ini dirancang untuk menguji kesiapsiagaan tanggap darurat (ERP), koordinasi krisis (CMP), serta pemulihan fungsi kritis F1 – Mengelola Operasi Sistem Tenaga Listrik dan F2 – Mengelola Operasi Sistem Transmisi. Mari kita mulai. Simulasi dibuka.' }
        ]
    },
    {
        fase: 1, faseLabel: 'ERP (0–60 MENIT)', scene: 2, title: 'Inject 1 – Gempa Dahsyat & Blackout Total',
        blocking: 'Suara sirine indikator gempa berbunyi pelan. Facilitator menunjuk monitor utama. Seluruh peserta menunjukkan gestur siaga.',
        visual: 'INJECT 1 (08.00 WIB) - GEMPA 7,3 M BENGKULU - SUTT 150 KV TRIP BERSAMAAN - TELEMETRI SCADA DROP - BLACKOUT AREA BENGKULU',
        dialogs: [
            { speaker: 'Facilitator / Moderator', text: 'Inject 1 dibuka. Pada pukul 08.00 WIB, terjadi gempa bumi tektonik kuat dengan episentrum 45 km barat daya Kota Bengkulu. Guncangan dirasakan sangat kuat selama 45 detik. Dalam hitungan detik, seluruh sirkit transmisi 150 kV penghubung Pekalongan - Sukamerindu - Pulau Baai - Manna trip secara bersamaan. Pasokan alternatif terputus. Terjadi pemadaman total (blackout) di seluruh Provinsi Bengkulu. Kanal komunikasi serat optik dan jaringan seluler utama di beberapa GI melumpuh. Lakukan respons awal ERP!' }
        ]
    },
    {
        fase: 1, faseLabel: 'ERP (0–60 MENIT)', scene: 3, title: 'Respons Evakuasi & Penyelamatan Personel (0–15 Menit)',
        blocking: 'Hendra Herawan (TL K3L) berdiri dan langsung memberikan instruksi penanganan keselamatan dengan nada tegas.',
        visual: 'ALUR TANGGAP DARURAT K3L - EVAKUASI MANDIRI KE ASSEMBLY POINT & ROLL CALL',
        dialogs: [
            { speaker: 'Hendra Herawan (TL K3L & KAM)', text: 'Izin melaporkan Pak Manager! Saat guncangan terjadi, seluruh pegawai dan mitra kerja di Kantor UPT dan GI terdekat telah melaksanakan prosedur Drop, Cover, and Hold On. Pasca-guncangan, evakuasi mandiri telah diarahkan menuju Titik Kumpul di area terbuka. Saya telah menginstruksikan Satpam dan Petugas K3L di seluruh GI (Sukamerindu, Pulau Baai, Tes, Pekalongan, Manna) untuk melakukan roll-call keselamatan, memadamkan sakelar utama gedung jika ada percikan api, dan mengamankan perimeter dari bahaya struktur retak!' }
        ]
    },
    {
        fase: 1, faseLabel: 'ERP (0–60 MENIT)', scene: 4, title: 'Laporan dari ULTG & Identifikasi Instalasi Terisolasi (15–30 Menit)',
        blocking: 'Asrul Abdika Hasibuan (Manager ULTG Pekalongan) dan Muhammad Afrizal (Manager ULTG Lahat) membuka peta jaringan dan radio komunikasi darurat.',
        visual: 'PETA SEBARAN KERUSAKAN TRANSMISI & STATUS KANAL KOMUNIKASI DARURAT',
        dialogs: [
            { speaker: 'Asrul Abdika Hasibuan (Man ULTG Pekalongan)', text: 'Lapor Pak Manager UPT, kontak awal melalui radio VHF darurat mengonfirmasi personel GI Sukamerindu dan GI Pekalongan selamat. Namun, GI Tes dan GI Pulau Baai mengalami black-out communication (kontak terputus total). Secara visual dari GI Sukamerindu, terlihat bushing Trafo Daya 1 60 MVA retak dan terdapat indikasi kebocoran minyak trafo akibat guncangan. Jalur transmisi 150 kV Pekalongan - Tes terindikasi putus terhambat longsor jalan nasional.' },
            { speaker: 'Muhammad Afrizal (Man ULTG Lahat)', text: 'Dari sisi ULTG Lahat, GI Manna dan GI Pagar Alam melaporkan adanya guncangan keras. SUTT 150 kV Lahat - Manna trip. Tim penelusur jaringan disiapkan, namun akses darat Lahat - Manna tertutup material tanah longsor di daerah Bukit Sumbul.' }
        ]
    },
    {
        fase: 1, faseLabel: 'ERP (0–60 MENIT)', scene: 5, title: 'Konsolidasi Awal F1/F2 dan Eskalasi ke UIP3B Sumatera (30–60 Menit)',
        blocking: 'Devy Martoni mengambil alih koordinasi meja, mendengarkan masukan Asman Konlan dan Asman Renval, lalu menyalakan layar konferensi menuju UIP3B Sumatera.',
        visual: 'DASHBOARD ERP UPT BENGKULU - ESKALASI KRISIS KE GENERAL MANAGER UIP3B SUMATERA',
        dialogs: [
            { speaker: 'Devy Martoni (Manager UPT Bengkulu)', text: 'Terima kasih tim. Fokus utama kita: pastikan 103 personel se-UPT Bengkulu terdata selamat, amankan lokasi kebocoran minyak, dan aktifkan radio satelit untuk GI yang hilang kontak. Pak Joffrian (Asman Renval), rekap seluruh dampak awal. Saya akan segera melaporkan kondisi krisis Bengkulu kepada General Manager PLN UIP3B Sumatera!' },
            { speaker: 'Devy Martoni (Menghubungi GM via Video Conf)', text: 'Selamat pagi Pak GM Elvanto. Izin melaporkan, telah terjadi gempa bumi 7,3 M yang memicu blackout total di wilayah kerja UPT Bengkulu. Seluruh pasokan transmisi 150 kV trip, komunikasi GI Tes dan Pulau Baai terputus, dan akses jalan tertutup longsor. Seluruh pegawai UPT dalam kondisi selamat di titik kumpul. Kami memohon arahan untuk penetapan langkah krisis selanjutnya.' }
        ]
    },
    {
        fase: 2, faseLabel: 'AKTIVASI BCP (60–120 MENIT)', scene: 6, title: 'Inject 2 – Dampak Kritikal & Rekomendasi BCP',
        blocking: 'Facilitator menampilkan grafik disrupsi fungsi F1 dan F2 di layar utama.',
        visual: 'INJECT 2 (10.00 WIB) - SKALA BENCANA: KATASTROPIK (LEVEL RISIKO 21) - RTO F1 (2 JAM) TERANCAM - REKOMENDASI AKTIVASI BCP',
        dialogs: [
            { speaker: 'Facilitator / Moderator', text: 'Inject 2 dibuka. Memasuki jam ke-2 pasca-gempa, hasil verifikasi menunjukkan 2 Gardu Induk (Tes dan Pulau Baai) masih terisolasi total tanpa telemetri SCADA. Kerusakan fisik trafo dan konduktor transmisi membutuhkan perbaikan skala besar. Kantor UPT Bengkulu mengalami retak struktur dinding dan tidak aman digunakan. Target RTO F1 (2 jam) terancam terlampaui jika tidak dilakukan alih kendali. Skala bencana berada pada Level Risiko 21 (Tinggi/Katastropik).' }
        ]
    },
    {
        fase: 2, faseLabel: 'AKTIVASI BCP (60–120 MENIT)', scene: 7, title: 'Rekomendasi Aktivasi BCP oleh Manager UPT',
        blocking: 'Joffrian M (Asman Renval) memberikan dokumen analisis BIA dan kriteria aktivasi BCP kepada Devy Martoni.',
        visual: 'ANALISIS MATRIKS BIA 2026 - KRITERIA AKTIVASI BCP DISRUPSI F1 & F2',
        dialogs: [
            { speaker: 'Joffrian M (Asman Renval)', text: 'Pak Manager, berdasarkan analisa kondisi terburuk, UPT Bengkulu tidak dapat menjalankan operasi rutin dalam 24 jam ke depan akibat kerusakan infrastruktur dan gedung. Sesuai juknis BCP, kami menyarankan Bapak merekomendasikan Aktivasi BCP Gempa Bumi kepada GM UIP3B Sumatera dan pemindahan posko komando ke Alternate Site di GI Sukamerindu / Komplek Kantor Baru yang struktur bangunannya utuh.' },
            { speaker: 'Devy Martoni (Manager UPT Bengkulu)', text: 'Rekomendasi disetujui. Pak Arnold (Asman Keuangan & Umum), segera siapkan mobilisasi peralatan kerja darurat dan tenda posko di lokasi Alternate Site yang aman!' }
        ]
    },
    {
        fase: 2, faseLabel: 'AKTIVASI BCP (60–120 MENIT)', scene: 8, title: 'Koordinasi Tim BCM UIP3B Sumatera',
        blocking: 'Layar sebelah kanan menampilkan General Manager Elvanto Yanuar Ikhsan didampingi SM OPSIS Hendrawan Susanto dan SM SISTRANS Muh. Taufik A.',
        visual: 'POSKO BCM UIP3B SUMATERA (PEKANBARU) - PENILAIAN KRISIS BENGKULU',
        dialogs: [
            { speaker: 'Hendrawan Susanto (SM OPSIS UIP3BS)', text: 'Pak GM, kehilangan telemetri dan pasokan di sistem Bengkulu berdampak langsung pada kestabilan Subsistem Sumbagteng dan Sumbagsel. Untuk mempertahankan fungsi F1, kita harus segera mengambil alih pemantauan dan skema black-start PLTA Tes melalui UP2B Sumbagteng/DRC, serta mengaktifkan BCP UPT Bengkulu.' },
            { speaker: 'Elvanto Yanuar Ikhsan (GM PLN UIP3B Sumatera)', text: 'Baik! Berdasarkan laporan Manager UPT Bengkulu dan analisa SM OPSIS, saya selaku Business Continuity Director menyetujui aktivasi BCP. Namun sesuai Edaran Direksi 0036.E/DIR/2022, saya akan meminta pengesahan resmi dari Direktur Transmisi dan Perencanaan Sistem.' }
        ]
    },
    {
        fase: 2, faseLabel: 'AKTIVASI BCP (60–120 MENIT)', scene: 9, title: 'Eskalasi kepada Direktur Transmisi & Penetapan Status BCP',
        blocking: 'GM Elvanto Yanuar menghubungi Direktur Transmisi via Video Call. Seluruh peserta di UPT Bengkulu menyimak dengan posisi berdiri/siaga.',
        visual: 'ESKALASI KORPORAT - DIREKTUR TRANSMISI & PERENCANAAN SISTEM PT PLN (PERSERO)',
        dialogs: [
            { speaker: 'Elvanto Yanuar Ikhsan (GM UIP3BS)', text: 'Selamat pagi Pak Direktur. Izin melaporkan bahwa wilayah kerja UPT Bengkulu dilanda gempa bumi 7,3 M yang mengakibatkan blackout total dan kerusakan instalasi transmisi. Seluruh 103 pegawai dilaporkan selamat. Mengingat ancaman terhadap kestabilan sistem grid Sumatera dan terputusnya fungsi F1/F2 di unit pelaksana, kami mengusulkan deklarasi aktivasi BCP Gempa Bumi UPT Bengkulu secara resmi.' },
            { speaker: 'Direktur Transmisi & Perencanaan Sistem', text: 'Terima kasih atas laporan cepat dan tepatnya Pak GM UIP3BS dan Manager UPT Bengkulu. Utamakan keselamatan jiwa! Saya nyatakan Business Continuity Plan (BCP) Gempa Bumi UPT Bengkulu RESMI DIAKTIFKAN ! Segera gerakkan bantuan tim teknis dan material dari UPT Palembang dan UPT Lubuk Linggau. Lakukan pemulihan F1 dalam RTO 2 jam dan pertahankan penyaluran beban prioritas MBCO!' },
            { speaker: 'Elvanto Yanuar Ikhsan (GM UIP3BS)', text: 'Siap laksanakan arahan, Pak Direktur!' }
        ]
    },
    {
        fase: 3, faseLabel: 'CMP (2–24 JAM)', scene: 10, title: 'Membuka Posko Tertutup di Alternate Site',
        blocking: 'Tata letak set berubah secara visual. Banner layar bertuliskan "ALTERNATE SITE - POSKO KOMANDO DARURAT GI SUKAMERINDU". Arnold Siagian mengatur jaringan komunikasi darurat.',
        visual: 'POSKO KOMANDO ALTERNATE SITE - GI SUKAMERINDU BENGKULU - KOORDINASI CRISIS MANAGEMENT PLAN',
        dialogs: [
            { speaker: 'Devy Martoni (Manager UPT Bengkulu)', text: 'Rekan-rekan Tim BCM UPT Bengkulu, BCP telah resmi diaktifkan oleh Direktur Transmisi. Posko Komando krisis sekarang berpusat di Alternate Site GI Sukamerindu. Agenda utama CMP: pastikan kelancaran jalur pemulihan F1 melalui black-start PLTA Tes, dan pimpin pemulihan fisik F2. Pak Arnold, pastikan catu daya genset darurat dan katering logistik tim siaga 24 jam!' },
            { speaker: 'Arnold Siagian (Asman Keuangan & Umum)', text: 'Siap Pak Manager. Tenda komando, genset mobile 10 kVA, sambungan telepon satelit, dan suplai logistik air/makanan untuk 3 hari ke depan sudah siap di GI Sukamerindu!' }
        ]
    },
    {
        fase: 3, faseLabel: 'CMP (2–24 JAM)', scene: 11, title: 'Pemulihan Fungsi F1 (Pengendalian Operasi Sistem)',
        blocking: 'Dispatcher melalui radio interkom melaporkan koordinasi black-start. Hendrawan Susanto (SM OPSIS) memberikan arahan dari Posko Induk.',
        visual: 'MANUVER BLACK-START PLTA TES - PENORMALAN SUBSISTEM BENGKULU ISOLATED (TARGET RTO F1: 2 JAM TERCAPAI)',
        dialogs: [
            { speaker: 'Hendrawan Susanto (SM OPSIS UIP3BS)', text: 'Instruksi untuk Dispatcher dan Operator GI Tes: Lakukan pemulihan tegangan sendiri (black-start) menggunakan unit PLTA Tes. Bentuk sistem terisolasi (island system) untuk memberi tegangan pada GI Tes dan GI Pekalongan, lalu komunikasikan parameternya setiap 5 menit via radio log HF.' },
            { speaker: 'Dispatcher UP2B (Via Interkom)', text: 'Lapor SM OPSIS dan Manager UPT, pukul 09.50 WIB (1 Jam 50 Menit pasca-gempa), tegangan dari PLTA Tes berhasil masuk ke Busbar GI Tes dan GI Pekalongan. Fungsi F1 pengawasan sistem tenaga listrik lokal pulih sebelum batas RTO 2 jam!' }
        ]
    },
    {
        fase: 3, faseLabel: 'CMP (2–24 JAM)', scene: 12, title: 'Penanganan Gangguan Fungsi F2 (Transmisi & GI)',
        blocking: 'Rio Rona Andika (Asman Konlan) dan Rachmad Fajar (Asman PDKB) memaparkan rencana pembersihan jalur dan penggantian peralatan.',
        visual: 'STRATEGI MOBILISASI TIM PDKB & BANTUAN UPT LINTAS UNIT (TARGET RTO F2: 1 MINGGU)',
        dialogs: [
            { speaker: 'Rio Rona Andika (Asman Konlan)', text: 'Untuk fungsi F2, hasil isolasi gangguan menunjukkan Trafo 1 GI Sukamerindu memerlukan penggantian bushing dan penataan ulang minyak trafo. Material bushing cadangan disiapkan dari Gudang UPT Bengkulu. Namun untuk GI Pulau Baai, konduktor SUTT 150 kV yang putus butuh penanganan tim PDKB.' },
            { speaker: 'Rachmad Fajar (Asman PDKB)', text: 'Tim PDKB UPT Bengkulu berkoordinasi dengan BPBD untuk menerobos material longsor jalan nasional menggunakan alat berat. Kami siap memanjat dan menyambung konduktor SUTT 150 kV Pulau Baai begitu akses dinyatakan aman oleh K3L!' }
        ]
    },
    {
        fase: 3, faseLabel: 'CMP (2–24 JAM)', scene: 13, title: 'Pemenuhan Dukungan Bantuan Lintas Unit',
        blocking: 'Muhammad Afrizal (Manager ULTG Lahat) melaporkan koordinasi bantuan dari UPT Lubuk Linggau dan UPT Palembang.',
        visual: 'LOGISTIK BANTUAN LINTAS UNIT - MOBILISASI TRAFO MOBILE & TIM ELEKTRIKAL UPT LUBUK LINGGAU',
        dialogs: [
            { speaker: 'Muhammad Afrizal (Man ULTG Lahat)', text: 'Melaporkan Pak Manager UPT, bantuan 1 tim spesialis pemeliharaan elektrikal dan 1 unit Trafo Mobile 30 MVA dari UPT Lubuk Linggau sedang bergerak menuju lokasi melalui jalur darat alternatif Lahat - Pagar Alam. Diperkirakan tiba di lokasi dalam 6 jam.' }
        ]
    },
    {
        fase: 3, faseLabel: 'CMP (2–24 JAM)', scene: 14, title: 'Publikasi Humas & Management Stakeholder',
        blocking: 'Yenti Elfina (SM Keuangan, Komunikasi & Umum UIP3BS) memaparkan materi rilis pers krisis di layar monitor.',
        visual: 'PRESS RELEASE KRISIS & REKAPITULASI PENORMALAN BEBAN PRIORITAS (MBCO 8.135 MW)',
        dialogs: [
            { speaker: 'Yenti Elfina (SM Keuangan, Komunikasi & Umum UIP3BS)', text: 'Tim Crisis Communication telah mengeluarkan pernyataan pers resmi kepada media dan Pemda Provinsi Bengkulu. Kami menyampaikan bahwa penanganan darurat gempa berjalan solid, keselamatan pegawai 100% terjaga, dan pemulihan pasokan listrik fasilitas vital (Rumah Sakit M. Yunus, Bandara Fatmawati, dan Kantor Gubernur) diprioritaskan utama sesuai target MBCO!' }
        ]
    },
    {
        fase: 4, faseLabel: 'BRP (1–7 HARI)', scene: 15, title: 'Inject 3 – Penormalan Aset & Akses Jalan Pulih',
        blocking: 'Facilitator memperbarui status penanganan jalan dan peralatan di layar.',
        visual: 'INJECT 3 (HARI KE-3) - LONGSOR BERHASIL DIBERSIHKAN - TRANSMISI 150 KV PEKALONGAN-TES-SUKAMERINDU INTERKONEKSI KEMBALI',
        dialogs: [
            { speaker: 'Facilitator / Moderator', text: 'Inject 3 dibuka. Memasuki Hari ke-3 pasca-gempa, akses jalan darat menuju GI Tes dan GI Pulau Baai telah berhasil dibuka oleh Tim Gabungan BPBD dan PLN. Perbaikan bushing trafo GI Sukamerindu dan penyambungan SUTT 150 kV rampung dikerjakan. Pengujian komisioning ulang siap dilaksanakan.' }
        ]
    },
    {
        fase: 4, faseLabel: 'BRP (1–7 HARI)', scene: 16, title: 'Pengujian Teknis & Penormalan Sistem F2 (Hari ke-5)',
        blocking: 'Rio Rona Andika dan Asrul Abdika Hasibuan menunjukkan laporan pengujian kelayakan trafo dan proteksi.',
        visual: 'LAPORAN PENGUJIAN KOMISIONING TRAFO 1 GI SUKAMERINDU & RE-ENERGIZING SUTT 150 KV (RTO F2 TERCAPAI)',
        dialogs: [
            { speaker: 'Rio Rona Andika (Asman Konlan)', text: 'Pak Manager, hasil uji tahanan isolasi, tegangan tembus minyak, dan fungsi relai proteksi Trafo 1 GI Sukamerindu serta SUTT 150 kV Pulau Baai dinyatakan LULUS UJI / KELAYAKAN 100% . Pengisian tegangan (re-energizing) telah sukses dilakukan tanpa komplikasi.' },
            { speaker: 'Asrul Abdika Hasibuan (Man ULTG Pekalongan)', text: 'Dengan beroperasinya kembali seluruh sirkit 150 kV dan GI penyangga, penyaluran tenaga listrik ke seluruh Kabupaten/Kota di Bengkulu telah pulih penuh 100%. Target RTO F2 (1 minggu) berhasil kita capai pada Hari ke-5!' }
        ]
    },
    {
        fase: 5, faseLabel: 'RECOVERY (HARI 15–30)', scene: 17, title: 'Inject Terakhir – Pemulihan 100% & Kliring Kedaerahan',
        blocking: 'Facilitator menunjukkan grafik ketersediaan sistem 100% normal dan kliring keselamatan gedung utama Kantor UPT.',
        visual: 'INJECT TERAKHIR (HARI KE-15) - RECOVERY STATUS: 100% - KANTOR UPT BENGKULU SELESAI RENOVASI STRUKTUR & SIAP RE-ENTRY',
        dialogs: [
            { speaker: 'Facilitator / Moderator', text: 'Inject terakhir. Memasuki Hari ke-15, perbaikan struktur gedung Kantor UPT Bengkulu telah selesai direnovasi dan dinyatakan safety cleared oleh Tim K3L Korporat. Seluruh fungsi operasional, telemetri SCADA utama, dan pelayanan administrasi siap kembali bekerja normal (re-entry) dari Kantor Utama UPT Bengkulu.' }
        ]
    },
    {
        fase: 5, faseLabel: 'RECOVERY (HARI 15–30)', scene: 18, title: 'Re-Entry ke Kantor Utama & Persiapan Closing BCP',
        blocking: 'Arnold Siagian dan Hendra Herawan menyerahkan berita acara kliring keselamatan gedung UPT Bengkulu kepada Devy Martoni.',
        visual: 'BERITA ACARA SAFETY CLEARANCE RE-ENTRY KANTOR UPT BENGKULU',
        dialogs: [
            { speaker: 'Arnold Siagian (Asman Keuangan & Umum)', text: 'Melaporkan Pak Manager, seluruh fasilitas kerja di Kantor Utama UPT Bengkulu telah difungsikan kembali. Jaringan IT, server lokal, dan sarana kerja pegawai telah dites dan beroperasi normal. Proses re-entry pegawai dari Alternate Site ke Kantor Utama telah rampung 100%.' },
            { speaker: 'Devy Martoni (Manager UPT Bengkulu)', text: 'Luar biasa! Terima kasih atas kerja keras seluruh tim. Saya akan segera melakukan eskalasi kepada GM UIP3B Sumatera dan Direktur Transmisi untuk rekomendasi pengakhiran status krisis BCP.' }
        ]
    },
    {
        fase: 5, faseLabel: 'RECOVERY (HARI 15–30)', scene: 19, title: 'Eskalasi kepada Direktur Transmisi & Releasing Status BCP',
        blocking: 'Devy Martoni dan GM Elvanto Yanuar terhubung via Video Conference layar lebar dengan Direktur Transmisi.',
        visual: 'RAPAT PENUTUPAN BCP - DIREKTUR TRANSMISI & PERENCANAAN SISTEM PT PLN (PERSERO)',
        dialogs: [
            { speaker: 'Elvanto Yanuar Ikhsan (GM UIP3BS)', text: 'Selamat pagi Pak Direktur Transmisi. Izin melaporkan bahwa seluruh tahapan pemulihan krisis gempa bumi UPT Bengkulu telah selesai 100%. Fungsi F1 pulih dalam 1 jam 50 menit, fungsi F2 pulih penuh pada hari ke-5, dan seluruh pegawai beserta gedung utama telah Re-Entry dengan aman. Kami mengusulkan pengakhiran resmi status BCP Gempa Bumi UPT Bengkulu.' },
            { speaker: 'Direktur Transmisi & Perencanaan Sistem', text: 'Apresiasi setinggi-tingginya kepada GM UIP3BS, Manager UPT Bengkulu, dan seluruh tim BCM lapangan atas dedikasi tangguh mengatasi krisis gempa bumi ini tanpa insiden K3L (zero accident). Dengan ini, status Business Continuity Plan (BCP) Gempa Bumi UPT Bengkulu RESMI DITUTUP ! Lanjutkan dengan After Action Review (AAR) untuk penyempurnaan dokumen keberlangsungan usaha ke depan.' },
            { speaker: 'Devy Martoni (Manager UPT Bengkulu)', text: 'Siap, terima kasih banyak atas arahan dan dukungan penuh Pak Direktur dan Pak GM!' }
        ]
    },
    {
        fase: 6, faseLabel: 'AAR & CLOSING', scene: 20, title: 'After Action Review & Penutupan Simulasi TTX',
        blocking: 'Seluruh pemeran berdiri menghadap kamera/monitor utama. Facilitator berada di samping Devy Martoni.',
        visual: 'TABLETOP EXERCISE (TTX) COMPLETED - AFTER ACTION REVIEW (AAR) & LESSONS LEARNED PLN UPT BENGKULU',
        dialogs: [
            { speaker: 'Devy Martoni (Manager UPT Bengkulu)', text: 'Alhamdulillah, simulasi Tabletop Exercise BCP Gempa Bumi UPT Bengkulu telah berjalan dengan sangat lancar dan sukses. Kami mencatat beberapa poin lessons learned penting: pertama, krusialnya keandalan radio satelit saat komunikasi seluler lumpuh; kedua, efektivitas koordinasi bantuan material antar-UPT; dan ketiga, pentingnya pemeliharaan rutin black-start PLTA Tes. Seluruh hasil evaluasi ini akan dituangkan ke dalam Action Plan BCP TW III 2026. Terima kasih kepada seluruh peserta dan manajemen. Simulasi TTX resmi ditutup!' }
        ]
    },
];

const faseData = [
    { fase: 1, title: 'Pembukaan & Emergency Response Plan (ERP)', duration: '0 – 60 Menit', scenes: 'Scene 1–5', desc: 'Pembukaan simulasi, inject 1 gempa 7,3 M & blackout total, evakuasi Drop Cover Hold On, laporan kerusakan instalasi ULTG, dan eskalasi krisis ke GM UIP3B Sumatera.' },
    { fase: 2, title: 'Asesmen Khusus & Keputusan Aktivasi BCP', duration: '60 – 120 Menit', scenes: 'Scene 6–9', desc: 'Inject 2 Level Risiko 21, rekomendasi aktivasi BCP oleh Asman Renval & Manager UPT, koordinasi BCM UIP3B Sumatera, dan deklarasi resmi aktivasi BCP oleh Direktur Transmisi PLN Pusat.' },
    { fase: 3, title: 'Crisis Management Plan (CMP) di Posko Alternatif', duration: '2 – 24 Jam', scenes: 'Scene 10–14', desc: 'Pemindahan posko ke Alternate Site GI Sukamerindu, black-start PLTA Tes pukul 09.50 WIB (RTO F1 1 jam 50 menit tercapai), penanganan trafo & SUTT, mobilisasi Trafo Mobile 30 MVA UPT Lubuk Linggau, dan rilis pers humas.' },
    { fase: 4, title: 'Stabilisasi & Business Recovery Plan (BRP)', duration: 'Hari ke-1 s.d. 7', scenes: 'Scene 15–16', desc: 'Inject 3 pembukaan akses longsor BPBD + PLN, perbaikan konduktor SUTT & penggantian bushing trafo, pengujian komisioning lulus 100%, dan penyaluran pulih 100% pada Hari ke-5 (RTO F2 tercapai).' },
    { fase: 5, title: 'Recovery Full, Normalisasi & Penutupan BCP', duration: 'Hari ke-15 s.d. 30', scenes: 'Scene 17–19', desc: 'Inject terakhir, renovasi kantor UPT selesai, safety cleared Tim K3L, re-entry pegawai 100% ke kantor utama, dan penutupan resmi status BCP oleh Direktur Transmisi.' },
    { fase: 6, title: 'After Action Review (AAR) & Closing', duration: 'Penutupan', scenes: 'Scene 20', desc: 'Evaluasi menyeluruh, pencatatan lessons learned (radio satelit, bantuan antar-UPT, keandalan black-start PLTA Tes), dan penutupan simulasi TTX secara resmi.' },
];

// ===================================================================
// NAVIGATION TABS
// ===================================================================
function showSection(sectionId, btnElement) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('section-' + sectionId);
    if (target) target.classList.add('active');

    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================================================================
// RENDER SCENES
// ===================================================================
let currentFilter = 'all';
let currentSearch = '';

function renderScenes() {
    const container = document.getElementById('sceneContainer');
    container.innerHTML = '';

    const filtered = sceneData.filter(s => {
        const matchFase = currentFilter === 'all' || s.fase === currentFilter;
        if (!matchFase) return false;
        if (!currentSearch) return true;

        const q = currentSearch.toLowerCase();
        const inTitle = s.title.toLowerCase().includes(q);
        const inBlocking = s.blocking.toLowerCase().includes(q);
        const inVisual = s.visual.toLowerCase().includes(q);
        const inDialog = s.dialogs.some(d => d.speaker.toLowerCase().includes(q) || d.text.toLowerCase().includes(q));
        return inTitle || inBlocking || inVisual || inDialog;
    });

    if (filtered.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:#94a3b8;font-size:15px;">Tidak ditemukan adegan yang cocok dengan pencarian Anda.</div>';
        return;
    }

    filtered.forEach(scene => {
        const card = document.createElement('div');
        card.className = 'scene-card';
        card.dataset.fase = scene.fase;

        let dialogsHTML = '';
        scene.dialogs.forEach(d => {
            dialogsHTML += `
                <div class="dialog-entry">
                    <div class="dialog-speaker">${d.speaker}</div>
                    <div class="dialog-text">"${d.text}"</div>
                </div>`;
        });

        card.innerHTML = `
            <div class="scene-card-header" onclick="this.parentElement.classList.toggle('open')">
                <div class="scene-header-left">
                    <span class="scene-toggle-icon">▶</span>
                    <span class="scene-title">Scene ${scene.scene}: ${scene.title}</span>
                </div>
                <span class="scene-fase-badge fase-${scene.fase}">FASE ${scene.fase} • ${scene.faseLabel}</span>
            </div>
            <div class="scene-card-body">
                <div class="scene-visual">🖥️ TAMPILAN MONITOR: ${scene.visual}</div>
                <div class="scene-block">
                    <div class="scene-block-label">ARAHAN BLOCKING / GERAKAN PEMERAN:</div>
                    <div class="scene-block-content">${scene.blocking}</div>
                </div>
                <div class="scene-dialog">
                    <div class="scene-block-label">DIALOG NASKAH:</div>
                    ${dialogsHTML}
                </div>
            </div>`;
        container.appendChild(card);
    });
}

function filterFase(fase, btn) {
    currentFilter = fase;
    document.querySelectorAll('.fase-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderScenes();
}

function searchScenes(query) {
    currentSearch = query.trim();
    renderScenes();
}

// ===================================================================
// RENDER PEMERAN TABLE
// ===================================================================
function renderPemeranTable() {
    const tbody = document.querySelector('#pemeranTable tbody');
    tbody.innerHTML = '';

    pemeranData.forEach(p => {
        const modeClass = p.mode === 'Fisik' ? 'status-fisik' :
                          p.mode === 'Virtual' ? 'status-virtual' : 'status-hybrid';
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><code class="mono-code">${p.no}</code></td>
            <td><strong>${p.nama}</strong></td>
            <td>${p.jabatan}</td>
            <td>${p.peran}</td>
            <td><span class="status-badge ${modeClass}">${p.mode === 'Fisik' ? '🏢 Ruang Komando' : p.mode === 'Virtual' ? '💻 Virtual / VC' : '🔗 Interkom / Audio'}</span></td>`;
        tbody.appendChild(tr);
    });
}

// ===================================================================
// RENDER TIMELINE
// ===================================================================
function renderTimeline() {
    const container = document.querySelector('.timeline-container');
    container.innerHTML = '';

    faseData.forEach(f => {
        const item = document.createElement('div');
        item.className = `timeline-item fase-c-${f.fase}`;
        item.innerHTML = `
            <div class="timeline-title">Fase ${f.fase}: ${f.title}</div>
            <div class="timeline-duration">⏱️ ${f.duration} • Adegan: ${f.scenes}</div>
            <div class="timeline-scenes">${f.desc}</div>`;
        container.appendChild(item);
    });
}

// ===================================================================
// CHARTS
// ===================================================================
Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = '#1e3352';
Chart.defaults.font.family = "'Barlow', -apple-system, sans-serif";

function createRecoveryChart() {
    const ctx = document.getElementById('recoveryChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['F1: Operasi Sistem', 'F2: Transmisi & GI'],
            datasets: [
                {
                    label: 'Target RTO Standar',
                    data: [120, 10080], // dalam menit
                    backgroundColor: 'rgba(59, 130, 246, 0.35)',
                    borderColor: '#3b82f6',
                    borderWidth: 2,
                    borderRadius: 6,
                    barPercentage: 0.5,
                },
                {
                    label: 'Capaian Aktual TTX',
                    data: [110, 7200], // F1: 1 jam 50 mnt (110m), F2: 5 hari (7200m)
                    backgroundColor: 'rgba(16, 185, 129, 0.45)',
                    borderColor: '#10b981',
                    borderWidth: 2,
                    borderRadius: 6,
                    barPercentage: 0.5,
                }
            ]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                legend: { position: 'bottom', labels: { padding: 14, usePointStyle: true, font: { size: 12 } } },
                tooltip: {
                    backgroundColor: '#131f33',
                    borderColor: '#1e3352',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: ctx => {
                            const v = ctx.parsed.x;
                            if (v >= 1440) return ` ${ctx.dataset.label}: ${Math.round(v/1440)} hari (${v === 7200 ? 'Lulus Komisioning Hari ke-5' : 'Target 1 Minggu'})`;
                            if (v >= 60) return ` ${ctx.dataset.label}: ${Math.floor(v/60)} jam ${v%60} menit (${v === 110 ? '09.50 WIB via PLTA Tes' : 'Target Batas RTO'})`;
                            return ` ${ctx.dataset.label}: ${v} menit`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(30, 51, 82, 0.5)' },
                    ticks: {
                        callback: v => {
                            if (v >= 1440) return `${Math.round(v/1440)} hari`;
                            if (v >= 60) return `${Math.floor(v/60)} jam`;
                            return `${v} m`;
                        }
                    }
                },
                y: { grid: { display: false } }
            }
        }
    });
}

function createPhaseChart() {
    const ctx = document.getElementById('phaseChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Fase 1 (ERP)', 'Fase 2 (BCP)', 'Fase 3 (CMP)', 'Fase 4 (BRP)', 'Fase 5 (Recov)', 'Fase 6 (AAR)'],
            datasets: [{
                label: 'Jumlah Adegan (Scene)',
                data: [5, 4, 5, 2, 3, 1],
                backgroundColor: [
                    'rgba(239, 68, 68, 0.65)',
                    'rgba(245, 158, 11, 0.65)',
                    'rgba(59, 130, 246, 0.65)',
                    'rgba(16, 185, 129, 0.65)',
                    'rgba(139, 92, 246, 0.65)',
                    'rgba(236, 72, 153, 0.65)',
                ],
                borderColor: ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899'],
                borderWidth: 2,
                borderRadius: 8,
                barPercentage: 0.6,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: { backgroundColor: '#131f33', borderColor: '#1e3352', borderWidth: 1 }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(30, 51, 82, 0.5)' }, ticks: { stepSize: 1 } },
                x: { grid: { display: false } }
            }
        }
    });
}

function createAttendanceChart() {
    const ctx = document.getElementById('attendanceChart').getContext('2d');
    const fisik = pemeranData.filter(p => p.mode === 'Fisik').length;
    const virtual = pemeranData.filter(p => p.mode === 'Virtual').length;
    const hybrid = pemeranData.filter(p => p.mode === 'Hybrid').length;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [`Ruang Komando Fisik (${fisik})`, `Video Call / Virtual (${virtual})`, `Interkom / Hybrid (${hybrid})`],
            datasets: [{
                data: [fisik, virtual, hybrid],
                backgroundColor: ['rgba(59, 130, 246, 0.8)', 'rgba(139, 92, 246, 0.8)', 'rgba(245, 158, 11, 0.8)'],
                borderColor: '#131f33',
                borderWidth: 3,
                hoverOffset: 8,
            }]
        },
        options: {
            responsive: true,
            cutout: '62%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { padding: 14, usePointStyle: true, font: { size: 12 } }
                }
            }
        }
    });
}

// ===================================================================
// INITIALIZATION
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderScenes();
    renderPemeranTable();
    renderTimeline();
    createRecoveryChart();
    createPhaseChart();
    createAttendanceChart();
});

