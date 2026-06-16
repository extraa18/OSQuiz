const MODULES = [
  {
    id: "modul9",
    name: "Modul 9",
    title: "Manajemen Memory",
    icon: "🧠",
    color: "#8B5CF6",
    colorLight: "#EDE9FE",
    multipleChoice: [
      {
        q: "Teknik manajemen memori yang memungkinkan sebuah proses dieksekusi meskipun tidak seluruh bagiannya berada di memori fisik disebut...",
        options: ["Swapping", "Virtual Memory", "Segmentasi Statis", "Paging Tetap"],
        answer: 1,
        explanation: "Virtual Memory memungkinkan eksekusi proses yang ukurannya lebih besar dari memori fisik dengan hanya memuat bagian yang dibutuhkan ke RAM."
      },
      {
        q: "Algoritma penggantian halaman yang mengganti halaman yang paling lama tidak digunakan adalah...",
        options: ["FIFO", "LRU (Least Recently Used)", "Optimal (Belady)", "Clock Algorithm"],
        answer: 1,
        explanation: "LRU (Least Recently Used) mengganti halaman yang sudah paling lama tidak diakses, berdasarkan prinsip lokalitas waktu."
      },
      {
        q: "Page fault terjadi ketika...",
        options: ["CPU tidak dapat memproses instruksi", "Halaman yang dibutuhkan tidak ada di memori fisik", "Memori fisik sepenuhnya penuh", "Proses mengakses alamat yang salah"],
        answer: 1,
        explanation: "Page fault adalah interupsi yang terjadi saat proses mengakses halaman yang valid secara logis, namun belum dimuat ke memori fisik (RAM)."
      },
      {
        q: "Kondisi thrashing terjadi ketika...",
        options: ["CPU utilization sangat tinggi secara konstan", "Proses menghabiskan lebih banyak waktu untuk paging daripada eksekusi nyata", "Memori virtual telah habis terpakai", "Algoritma LRU mengalami kegagalan"],
        answer: 1,
        explanation: "Thrashing terjadi saat sistem terus-menerus melakukan page-in dan page-out, sehingga CPU lebih banyak mengelola paging daripada menjalankan proses."
      },
      {
        q: "Internal fragmentation umumnya terjadi pada teknik manajemen memori...",
        options: ["Segmentasi dinamis", "Paging", "Partisi dinamis", "Sistem tanpa manajemen memori"],
        answer: 1,
        explanation: "Paging membagi memori menjadi frame berukuran tetap. Jika halaman terakhir suatu proses tidak memenuhi frame sepenuhnya, sisa ruang tersebut terbuang (internal fragmentation)."
      },
      {
        q: "TLB (Translation Lookaside Buffer) berfungsi untuk...",
        options: ["Menyimpan halaman yang sering digunakan langsung di disk", "Mempercepat translasi alamat virtual ke alamat fisik sebagai cache page table", "Mengatur pembuatan proses baru secara cepat", "Mengelola dan mendistribusikan interrupt dari perangkat keras"],
        answer: 1,
        explanation: "TLB adalah cache hardware berkecepatan tinggi yang menyimpan entri page table yang sering diakses, sehingga translasi alamat tidak harus selalu mengakses page table di memori."
      },
      {
        q: "Alamat logis dalam sistem paging terdiri dari...",
        options: ["Nomor segmen dan offset", "Nomor halaman (page number) dan offset", "Alamat basis dan limit", "Alamat fisik dan cache tag"],
        answer: 1,
        explanation: "Alamat logis pada paging dibagi menjadi dua bagian: page number (untuk mengindeks page table) dan offset (posisi byte dalam halaman tersebut)."
      },
      {
        q: "Working set model pada manajemen memori digunakan terutama untuk mencegah...",
        options: ["Page fault yang sporadis", "Deadlock antar proses", "Thrashing dengan memastikan setiap proses memiliki cukup frame", "External fragmentation"],
        answer: 2,
        explanation: "Working set model melacak halaman yang aktif digunakan oleh proses dalam jendela waktu tertentu, memastikan frame yang dimiliki proses cukup untuk menghindari thrashing."
      },
      {
        q: "Algoritma penggantian halaman Optimal (Belady) mengganti halaman yang...",
        options: ["Paling lama sudah berada di memori fisik", "Tidak akan digunakan untuk waktu terpanjang di masa depan", "Paling sering diakses oleh proses", "Pertama kali masuk ke memori (FIFO)"],
        answer: 1,
        explanation: "Algoritma Optimal (teoritik) mengganti halaman yang tidak akan digunakan paling lama ke depan. Ini menghasilkan page fault minimum, namun tidak bisa diimplementasikan secara nyata."
      },
      {
        q: "Demand paging berarti...",
        options: ["Semua halaman proses dimuat ke memori sebelum eksekusi dimulai", "Halaman hanya dimuat ke memori ketika benar-benar diperlukan oleh proses", "Halaman dilepas dari memori secara berkala tanpa diminta", "Proses secara eksplisit meminta alokasi memori sendiri"],
        answer: 1,
        explanation: "Demand paging adalah teknik lazy loading: halaman tidak dimuat ke RAM sampai proses benar-benar membutuhkan halaman tersebut, menghemat memori fisik."
      },
      {
        q: "Copy-on-Write (COW) dalam manajemen memori digunakan untuk...",
        options: ["Membuat backup otomatis semua data proses", "Memungkinkan proses induk dan anak berbagi halaman sampai salah satunya melakukan modifikasi", "Menyalin seluruh address space saat pemanggilan fork()", "Mengoptimalkan penggunaan ruang swap space"],
        answer: 1,
        explanation: "COW memungkinkan proses hasil fork() berbagi halaman memori yang sama. Salinan baru hanya dibuat saat salah satu proses menulis ke halaman tersebut."
      },
      {
        q: "Tabel halaman (page table) digunakan untuk...",
        options: ["Menyimpan data dan instruksi proses aktif", "Memetakan setiap alamat logis/virtual ke alamat fisik yang sesuai", "Mengalokasikan ruang disk untuk file sistem", "Mengatur prioritas dan penjadwalan proses"],
        answer: 1,
        explanation: "Page table adalah struktur data yang dikelola OS untuk memetakan page number dari alamat virtual ke frame number di memori fisik."
      },
      {
        q: "Masalah utama pada algoritma FIFO untuk penggantian halaman adalah...",
        options: ["Kompleksitas implementasi yang sangat tinggi", "Anomali Belady: menambah jumlah frame bisa meningkatkan page fault", "Tidak dapat digunakan pada sistem dengan memori besar", "Membutuhkan hardware TLB yang mahal"],
        answer: 1,
        explanation: "Anomali Belady adalah fenomena kontra-intuitif di mana FIFO dapat mengalami lebih banyak page fault ketika diberi lebih banyak frame memori."
      },
      {
        q: "Teknik memory-mapped files memungkinkan...",
        options: ["File disimpan langsung di RAM secara permanen", "Operasi I/O file dipetakan ke operasi memori biasa menggunakan virtual memory", "Kompresi otomatis semua file di sistem", "Enkripsi file secara transparan di latar belakang"],
        answer: 1,
        explanation: "Memory-mapped files memetakan file ke ruang alamat virtual proses, sehingga baca/tulis file menjadi seperti akses memori biasa, meningkatkan performa I/O."
      },
      {
        q: "Segmentasi berbeda dari paging karena pada segmentasi...",
        options: ["Memori dibagi menjadi unit-unit berukuran tetap", "Memori dibagi berdasarkan unit logis berukuran variabel sesuai struktur program", "Tidak ada tabel pemetaan yang diperlukan", "Alamat fisik sama dengan alamat logis"],
        answer: 1,
        explanation: "Segmentasi membagi program menjadi segmen logis (kode, data, stack) yang dapat berukuran berbeda-beda, berbeda dengan paging yang menggunakan ukuran tetap."
      }
    ],
    essay: [
      {
        q: "Jelaskan perbedaan antara paging dan segmentasi dalam manajemen memori! Sebutkan kelebihan dan kekurangan masing-masing metode!",
        modelAnswer: "**Paging:** Membagi memori menjadi frame berukuran tetap (physical) dan halaman berukuran tetap (logical). Kelebihan: tidak ada external fragmentation, implementasi sederhana. Kekurangan: internal fragmentation (sisa frame tidak terpakai), overhead page table yang besar.\n\n**Segmentasi:** Membagi program menjadi segmen logis berukuran variabel (code, data, stack, heap). Kelebihan: mencerminkan struktur logis program, tidak ada internal fragmentation, mendukung proteksi per segmen. Kekurangan: external fragmentation, perlu compaction.\n\nBanyak sistem modern menggabungkan keduanya (segmented paging) untuk memanfaatkan kelebihan masing-masing."
      },
      {
        q: "Apa yang dimaksud dengan thrashing? Jelaskan penyebab dan cara-cara mencegah thrashing dalam sistem operasi!",
        modelAnswer: "**Thrashing** adalah kondisi di mana sistem operasi menghabiskan sebagian besar waktunya untuk melakukan paging (swapping halaman masuk-keluar) daripada mengeksekusi proses secara produktif, menyebabkan CPU utilization turun drastis.\n\n**Penyebab:** Terlalu banyak proses berjalan bersamaan (degree of multiprogramming terlalu tinggi) sehingga tiap proses mendapat terlalu sedikit frame.\n\n**Pencegahan:**\n1. Working Set Model: pastikan setiap proses memiliki cukup frame untuk working set-nya\n2. Page Fault Frequency (PFF): monitor frekuensi page fault; jika terlalu tinggi tambah frame, jika terlalu rendah ambil frame\n3. Kurangi degree of multiprogramming dengan suspend sebagian proses\n4. Lokal vs global replacement: gunakan local replacement agar thrashing satu proses tidak menular ke proses lain"
      },
      {
        q: "Jelaskan cara kerja algoritma penggantian halaman LRU dan bandingkan dengan algoritma FIFO! Apa keunggulan LRU?",
        modelAnswer: "**FIFO (First In First Out):** Mengganti halaman yang paling pertama masuk ke memori. Mudah diimplementasi dengan queue, namun mengabaikan pola akses aktual. Bisa mengalami Anomali Belady.\n\n**LRU (Least Recently Used):** Mengganti halaman yang paling lama tidak diakses berdasarkan lokalitas waktu (temporal locality). Implementasi membutuhkan stack atau counter.\n\n**Keunggulan LRU atas FIFO:**\n- Memanfaatkan informasi historis akses, lebih mendekati algoritma Optimal\n- Tidak mengalami Anomali Belady\n- Page fault lebih sedikit dalam praktik nyata\n\n**Implementasi LRU:** Menggunakan stack (halaman terakhir diakses selalu di atas) atau counter (setiap akses simpan timestamp, ganti yang timestamp-nya terlama)."
      },
      {
        q: "Apa fungsi TLB (Translation Lookaside Buffer) dan bagaimana pengaruhnya terhadap performa sistem manajemen memori?",
        modelAnswer: "**TLB** adalah cache hardware asosiatif berkecepatan sangat tinggi yang menyimpan entri-entri page table yang baru-baru ini digunakan.\n\n**Fungsi:** Mempercepat translasi alamat virtual ke fisik. Tanpa TLB, setiap akses memori memerlukan dua akses: satu ke page table di RAM, satu ke data aktual. Dengan TLB, jika terjadi TLB hit, hanya satu akses yang diperlukan.\n\n**Effective Access Time (EAT):**\nEAT = (hit ratio × 1) + ((1 - hit ratio) × 2) akses memori\nJika hit ratio = 0.99, EAT = 0.99(1) + 0.01(2) = 1.01 (hampir setara akses langsung)\n\n**Pengaruh performa:** TLB dengan hit ratio tinggi (>95%) membuat overhead virtual memory hampir tidak terasa. TLB miss menyebabkan TLB reload dari page table yang memerlukan akses memori tambahan."
      },
      {
        q: "Jelaskan konsep virtual memory dan bagaimana demand paging bekerja dalam implementasinya!",
        modelAnswer: "**Virtual Memory** adalah teknik yang memberikan setiap proses ilusi memiliki ruang alamat yang sangat besar dan kontinu, melebihi kapasitas memori fisik. OS mengelola perpindahan halaman antara RAM dan disk (swap space).\n\n**Demand Paging:** Halaman hanya dimuat ke RAM saat benar-benar dibutuhkan:\n1. Proses dimulai dengan tidak ada halaman di memori (atau minimal)\n2. Saat proses mengakses halaman yang belum di RAM → **page fault**\n3. OS menangkap page fault, mengambil halaman dari disk ke frame RAM kosong\n4. Jika tidak ada frame kosong, OS memilih halaman korban menggunakan algoritma penggantian\n5. Update page table, restart instruksi yang menyebabkan fault\n\n**Keuntungan:** Memori fisik yang dibutuhkan lebih sedikit, lebih banyak proses bisa berjalan bersamaan, waktu startup program lebih cepat."
      }
    ]
  },
  {
    id: "modul11",
    name: "Modul 11",
    title: "Mass Storage",
    icon: "💾",
    color: "#0EA5E9",
    colorLight: "#E0F2FE",
    multipleChoice: [
      {
        q: "Algoritma disk scheduling yang memberikan layanan berdasarkan urutan kedatangan permintaan secara murni adalah...",
        options: ["SSTF (Shortest Seek Time First)", "SCAN (Elevator)", "FCFS (First Come First Served)", "C-SCAN (Circular SCAN)"],
        answer: 2,
        explanation: "FCFS melayani permintaan disk sesuai urutan kedatangannya. Sederhana dan adil, namun tidak efisien karena head disk bisa bergerak bolak-balik jauh."
      },
      {
        q: "Kelemahan utama algoritma SSTF (Shortest Seek Time First) adalah...",
        options: ["Throughput yang sangat rendah dibanding FCFS", "Potensi starvation untuk permintaan yang berada jauh dari posisi head saat ini", "Tidak cocok diimplementasikan pada HDD modern", "Waktu respons rata-rata yang terlalu lambat"],
        answer: 1,
        explanation: "SSTF memilih permintaan dengan seek time terpendek dari posisi head saat ini. Akibatnya, permintaan yang lokasinya jauh bisa terus-menerus diabaikan (starvation)."
      },
      {
        q: "Algoritma SCAN dalam disk scheduling sering disebut juga sebagai...",
        options: ["Round Robin Algorithm", "Elevator Algorithm", "First Come First Served", "Priority Scheduling"],
        answer: 1,
        explanation: "SCAN disebut Elevator Algorithm karena head bergerak seperti lift: melayani permintaan saat bergerak ke satu arah, kemudian berbalik arah saat mencapai ujung silinder."
      },
      {
        q: "RAID level 1 menggunakan teknik redundansi melalui...",
        options: ["Striping data tanpa redundansi", "Mirroring (duplikasi data ke disk kedua)", "Distribusi parity di semua disk", "Striping dengan parity tunggal"],
        answer: 1,
        explanation: "RAID 1 (Disk Mirroring) menyimpan salinan identik data pada dua disk atau lebih. Jika satu disk gagal, data masih tersedia dari disk mirror-nya."
      },
      {
        q: "RAID level 5 menyimpan informasi parity secara...",
        options: ["Terpusat pada satu disk khusus parity", "Terdistribusi secara merata di semua disk anggota array", "Hanya pada disk pertama dalam array", "Di cache memori sistem"],
        answer: 1,
        explanation: "RAID 5 mendistribusikan parity block ke semua disk, menghindari bottleneck disk parity tunggal (seperti RAID 4). Dapat mentoleransi kegagalan satu disk."
      },
      {
        q: "Waktu akses total sebuah hard disk terdiri dari komponen-komponen...",
        options: ["Read time dan write time saja", "Seek time, rotational latency, dan transfer time", "Access time dan idle time", "Seek time dan transfer time saja"],
        answer: 1,
        explanation: "Seek time = waktu head mencapai track target. Rotational latency = waktu menunggu sektor target berputar ke posisi head. Transfer time = waktu membaca/menulis data aktual."
      },
      {
        q: "SSD (Solid State Drive) secara fundamental berbeda dari HDD karena...",
        options: ["SSD jauh lebih murah per gigabyte", "SSD tidak memiliki bagian mekanis yang bergerak, menggunakan flash memory", "SSD lebih lambat dalam operasi baca sekuensial", "SSD memiliki kapasitas maksimum yang jauh lebih kecil"],
        answer: 1,
        explanation: "SSD menggunakan NAND flash memory tanpa komponen mekanis. Hasilnya: akses jauh lebih cepat, lebih tahan guncangan, konsumsi daya lebih rendah, namun harga per GB lebih mahal."
      },
      {
        q: "Perbedaan utama antara SCAN dan C-SCAN adalah...",
        options: ["C-SCAN lebih lambat dari SCAN", "C-SCAN hanya melayani permintaan saat bergerak satu arah, lalu kembali ke awal tanpa melayani", "SCAN tidak bisa mencapai silinder terakhir", "C-SCAN menggunakan dua head sekaligus"],
        answer: 1,
        explanation: "C-SCAN (Circular SCAN) melayani permintaan hanya saat bergerak satu arah (misalnya dari silinder 0 ke maksimum), lalu langsung kembali ke silinder 0 tanpa melayani permintaan saat balik. Ini memberikan waktu tunggu yang lebih seragam."
      },
      {
        q: "Bad blocks pada disk ditangani oleh sistem melalui teknik...",
        options: ["Menghapus seluruh partisi yang mengandung bad block", "Sector sparing (remapping) ke sektor cadangan yang sudah disiapkan", "Memformat ulang seluruh disk", "Mengabaikan bad block tersebut secara permanen"],
        answer: 1,
        explanation: "Sector sparing memetakan bad sector ke sektor cadangan (spare sector) yang disediakan manufaktur di setiap zona disk. OS atau firmware disk melakukan remapping ini secara transparan."
      },
      {
        q: "RAID level 0 memberikan keuntungan berupa...",
        options: ["Redundansi penuh dengan duplikasi data", "Performa I/O tinggi melalui striping tanpa redundansi apapun", "Distribusi parity untuk toleransi kegagalan disk", "Kombinasi mirroring dan striping"],
        answer: 1,
        explanation: "RAID 0 menggunakan striping: data dibagi dan ditulis secara paralel ke beberapa disk. Performa baca/tulis meningkat signifikan, namun tidak ada redundansi—kegagalan satu disk berarti data hilang semua."
      },
      {
        q: "Rotational latency pada HDD adalah...",
        options: ["Waktu yang dibutuhkan untuk menggerakkan head ke track yang tepat", "Waktu menunggu sektor yang dituju berputar ke posisi head baca/tulis", "Waktu total untuk mentransfer blok data", "Waktu disk untuk spin up dari keadaan idle"],
        answer: 1,
        explanation: "Setelah head mencapai track yang benar (seek), disk harus berputar sampai sektor yang diinginkan berada tepat di bawah head. Rata-rata rotational latency = setengah putaran penuh."
      },
      {
        q: "RAID level 6 meningkatkan toleransi kegagalan dibanding RAID 5 dengan cara...",
        options: ["Menambahkan satu disk parity tambahan (total dua parity)", "Menggunakan dua tingkat parity berbeda untuk mentoleransi kegagalan dua disk sekaligus", "Menggabungkan mirroring penuh dengan striping", "Menggunakan algoritma parity yang lebih kuat"],
        answer: 1,
        explanation: "RAID 6 menggunakan dua skema parity yang berbeda (P dan Q parity), sehingga array tetap beroperasi meski dua disk gagal secara bersamaan."
      },
      {
        q: "Konsep wear leveling pada SSD bertujuan untuk...",
        options: ["Meningkatkan kecepatan baca data pada sel NAND", "Mendistribusikan operasi tulis secara merata agar tidak ada sel yang cepat aus", "Mengurangi konsumsi daya saat idle", "Meningkatkan kapasitas penyimpanan efektif"],
        answer: 1,
        explanation: "Sel NAND flash memiliki batas jumlah siklus tulis (P/E cycles). Wear leveling memastikan semua sel digunakan secara merata sehingga tidak ada sel yang aus jauh lebih cepat dari sel lainnya."
      },
      {
        q: "NVM (Non-Volatile Memory) seperti flash NAND memiliki karakteristik...",
        options: ["Volatile: data hilang saat catu daya diputus", "Non-volatile dengan akses acak lebih cepat dari HDD, lebih lambat dari DRAM", "Memerlukan operasi refresh berkala seperti DRAM", "Performa identik dengan DRAM"],
        answer: 1,
        explanation: "Flash NAND adalah non-volatile (data tetap ada tanpa daya), kecepatan akses jauh di atas HDD namun masih di bawah DRAM. Ini menjadikannya ideal sebagai penyimpanan sekunder."
      },
      {
        q: "Hierarchical Storage Management (HSM) bekerja dengan cara...",
        options: ["Menyimpan semua data secara eksklusif pada SSD tercepat", "Otomatis memindahkan data antar media penyimpanan berbeda berdasarkan frekuensi penggunaan", "Menggunakan konfigurasi RAID untuk semua level penyimpanan", "Mengenkripsi semua data sebelum disimpan ke disk"],
        answer: 1,
        explanation: "HSM memindahkan data yang sering diakses ke media cepat (SSD/NVMe) dan data yang jarang diakses ke media lebih lambat/murah (HDD, tape), mengoptimalkan biaya dan performa."
      }
    ],
    essay: [
      {
        q: "Jelaskan cara kerja algoritma disk scheduling SCAN dan C-SCAN! Hitung total pergerakan head untuk urutan permintaan: 98, 183, 37, 122, 14, 124, 65, 67 dengan posisi awal head di silinder 53, arah gerakan ke atas (increasing)!",
        modelAnswer: "**Algoritma SCAN:** Head bergerak ke satu arah (misalnya naik), melayani semua permintaan yang dilewati, lalu berbalik dan melayani permintaan di arah sebaliknya.\n\n**Urutan SCAN (dari 53, arah naik):**\nTerurut: 14, 37, 53, 65, 67, 98, 122, 124, 183\nNaik: 53→65→67→98→122→124→183, lalu turun: 183→37→14\nTotal: (183-53) + (183-14) = 130 + 169 = **299 silinder** \n\n**Urutan C-SCAN (dari 53, arah naik):**\nNaik: 53→65→67→98→122→124→183, lalu langsung ke 0→14→37\nTotal: (183-53) + 183 + 37 = 130 + 183 + 37 = **350 silinder**\n\n**Perbedaan:** SCAN lebih efisien dalam pergerakan total, namun C-SCAN memberikan waktu tunggu yang lebih seragam/adil untuk semua permintaan."
      },
      {
        q: "Jelaskan perbedaan antara RAID 0, RAID 1, RAID 5, dan RAID 6! Kapan masing-masing konfigurasi paling tepat digunakan?",
        modelAnswer: "**RAID 0 (Striping):** Data dibagi dan ditulis paralel ke semua disk. Performa tinggi, tidak ada redundansi. Kegagalan satu disk = semua data hilang. Cocok untuk: data sementara, video editing, cache.\n\n**RAID 1 (Mirroring):** Data diduplikasi identik ke dua disk. Toleransi kegagalan satu disk. Kapasitas efektif 50%. Cocok untuk: database kritis, sistem operasi, data yang tidak bisa hilang.\n\n**RAID 5 (Striping + Distributed Parity):** Membutuhkan minimal 3 disk. Parity didistribusikan. Toleransi kegagalan 1 disk. Kapasitas efektif (n-1)/n disk. Cocok untuk: file server, NAS, keseimbangan performa-kapasitas-redundansi.\n\n**RAID 6 (Double Parity):** Minimal 4 disk, dua blok parity berbeda. Toleransi kegagalan 2 disk bersamaan. Cocok untuk: sistem yang tidak bisa downtime, critical enterprise storage.\n\n**Kombinasi umum:** RAID 10 (RAID 1+0) = mirroring + striping, terbaik untuk performa dan keandalan."
      },
      {
        q: "Jelaskan kelebihan dan kekurangan SSD dibanding HDD dari perspektif sistem operasi modern!",
        modelAnswer: "**Kelebihan SSD:**\n- Latensi sangat rendah (0.1ms vs 5-10ms HDD)\n- IOPS (I/O Per Second) jauh lebih tinggi (ratusan ribu vs ratusan)\n- Tidak ada seek time dan rotational latency\n- Tidak ada komponen mekanis → lebih tahan getaran, tidak berisik\n- Konsumsi daya lebih rendah\n- Boot time dan load aplikasi jauh lebih cepat\n\n**Kekurangan SSD:**\n- Harga per GB masih lebih mahal\n- Kapasitas maksimum lebih rendah untuk harga yang sama\n- Batas siklus tulis (wear) pada NAND flash\n- Performa bisa turun saat sel sudah banyak terpakai\n\n**Implikasi untuk OS:**\n- Algoritma disk scheduling (SCAN, SSTF) tidak relevan untuk SSD karena tidak ada mekanis\n- OS modern menggunakan scheduler NOOP atau kyber untuk SSD\n- Wear leveling memerlukan penanganan khusus dari firmware/OS (TRIM command)"
      },
      {
        q: "Apa yang dimaksud dengan bad blocks? Jelaskan bagaimana sistem operasi dan firmware disk menangani bad blocks!",
        modelAnswer: "**Bad Blocks** adalah sektor atau kelompok sektor pada disk yang tidak dapat lagi menyimpan data secara andal karena kerusakan fisik permukaan magnetik (HDD) atau sel flash yang rusak (SSD).\n\n**Tipe bad blocks:**\n1. **Hard bad blocks:** Rusak saat manufaktur, diidentifikasi sebelum pengiriman\n2. **Soft bad blocks:** Berkembang saat penggunaan, bisa karena usia, guncangan, atau keausan\n\n**Penanganan oleh Firmware Disk:**\n- **Sector Sparing (Remapping):** Setiap disk dilengkapi spare sectors. Bad sector dipetakan ke spare sector secara transparan\n- **Sector Slipping:** Memindahkan data ke sektor berikutnya secara berurutan\n\n**Penanganan oleh OS:**\n- Low-level format: menandai bad blocks di disk initialization\n- Filesystem-level: filesystem mencatat bad blocks dan tidak menggunakannya (chkdsk di Windows, fsck di Linux)\n- SCSI/ATA Error Recovery: protokol dengan mekanisme koreksi error built-in\n\n**Pada SSD:** Firmware mengelola bad blocks secara internal menggunakan wear leveling dan over-provisioning."
      },
      {
        q: "Jelaskan struktur fisik hard disk (HDD) dan faktor-faktor yang mempengaruhi performa total waktu akses!",
        modelAnswer: "**Struktur Fisik HDD:**\n- **Platter:** Piringan berputar berlapis material magnetik, bisa terdiri dari beberapa platter\n- **Track:** Lingkaran konsentris pada permukaan platter\n- **Sector:** Subdivisi dari track, unit penyimpanan terkecil (512B atau 4KB)\n- **Cylinder:** Kumpulan track yang berada di posisi radial yang sama di semua platter\n- **Read/Write Head:** Per permukaan platter, bergerak bersama pada aktuator\n- **Spindle:** Poros yang memutar semua platter (5400 RPM, 7200 RPM, 10000 RPM, 15000 RPM)\n\n**Komponen Waktu Akses:**\n1. **Seek Time:** Waktu menggerakkan head ke track yang tepat (rata-rata 3-15ms)\n2. **Rotational Latency:** Waktu menunggu sektor berputar ke head (rata-rata = 1/2 putaran)\n3. **Transfer Time:** Waktu membaca/menulis data = ukuran data / kecepatan transfer\n\n**Faktor yang mempengaruhi:**\n- RPM (kecepatan putar) memengaruhi rotational latency\n- Densitas track/platter memengaruhi kapasitas dan transfer rate\n- Kualitas aktuator memengaruhi seek time"
      }
    ]
  },
  {
    id: "modul12",
    name: "Modul 12",
    title: "I/O System",
    icon: "🔌",
    color: "#10B981",
    colorLight: "#D1FAE5",
    multipleChoice: [
      {
        q: "Kelemahan utama metode Polling (busy waiting) untuk I/O adalah...",
        options: ["Implementasinya terlalu kompleks", "CPU terus-menerus memeriksa status perangkat, membuang siklus CPU yang berharga", "Tidak dapat digunakan untuk perangkat I/O kecepatan tinggi", "Memerlukan hardware interrupt controller tambahan"],
        answer: 1,
        explanation: "Polling mengharuskan CPU terus-menerus memeriksa (looping) status perangkat I/O hingga siap. Ini membuang waktu CPU yang bisa digunakan untuk tugas produktif lain."
      },
      {
        q: "DMA (Direct Memory Access) digunakan dalam sistem I/O untuk...",
        options: ["Meningkatkan keamanan transfer data antar proses", "Memindahkan data antara perangkat I/O dan memori tanpa keterlibatan langsung CPU setiap byte", "Mengontrol mekanisme perlindungan memori virtual", "Mengelola antrian interrupt dari berbagai perangkat"],
        answer: 1,
        explanation: "DMA controller mengambil alih transfer data bulk antara I/O device dan RAM. CPU hanya memerintahkan DMA untuk mulai, dan DMA memberitahu CPU (interrupt) saat selesai, membebaskan CPU untuk tugas lain."
      },
      {
        q: "Device driver dalam arsitektur sistem I/O berfungsi sebagai...",
        options: ["Komponen hardware dari perangkat keras itu sendiri", "Lapisan antarmuka antara kernel OS dan perangkat keras spesifik", "Protokol jaringan untuk komunikasi antar perangkat", "Algoritma penjadwalan untuk antrian I/O"],
        answer: 1,
        explanation: "Device driver adalah kode software (biasanya bagian dari kernel) yang memahami detail spesifik sebuah perangkat keras dan mengekspos antarmuka standar ke subsistem I/O kernel."
      },
      {
        q: "Interrupt-driven I/O berbeda dari polling karena...",
        options: ["Interrupt-driven lebih lambat dalam semua skenario", "Perangkat mengirim sinyal interrupt ke CPU saat siap, CPU tidak perlu terus memeriksa", "Hanya bekerja untuk jenis perangkat tertentu saja", "Tidak memerlukan device driver sama sekali"],
        answer: 1,
        explanation: "Dengan interrupt-driven I/O, CPU memulai operasi I/O lalu melanjutkan pekerjaan lain. Saat perangkat selesai, ia mengirim interrupt signal ke CPU untuk memberitahu hasilnya."
      },
      {
        q: "Spooling (Simultaneous Peripheral Operations On-Line) digunakan terutama untuk...",
        options: ["Enkripsi data sebelum dikirim ke perangkat", "Buffering output untuk perangkat yang tidak dapat berbagi seperti printer", "Kompresi data secara real-time", "Autentikasi pengguna sebelum akses perangkat"],
        answer: 1,
        explanation: "Spooling menyimpan output (misal: dokumen cetak) ke disk sementara, memungkinkan banyak proses 'mencetak' secara bersamaan. Print daemon kemudian melayani antrian satu per satu ke printer."
      },
      {
        q: "Memory-mapped I/O berarti...",
        options: ["File dimuat sepenuhnya ke dalam RAM sebelum diproses", "Register kontrol perangkat I/O dipetakan ke ruang alamat memori proses", "Seluruh operasi I/O diproses melalui cache L1/L2", "I/O dilakukan menggunakan halaman virtual memory"],
        answer: 1,
        explanation: "Pada memory-mapped I/O, register-register perangkat keras (status, control, data) ditempatkan di range alamat memori tertentu. CPU mengaksesnya dengan instruksi baca/tulis memori biasa."
      },
      {
        q: "Perbedaan antara character devices dan block devices adalah...",
        options: ["Character devices secara inheren lebih cepat dari block devices", "Block devices mentransfer data dalam blok berukuran tetap; character devices mentransfer byte per byte", "Character devices tidak memerlukan device driver", "Block devices hanya digunakan untuk penyimpanan saja"],
        answer: 1,
        explanation: "Block devices (HDD, SSD) mengakses data dalam blok (512B-4KB) dan mendukung random access. Character devices (keyboard, serial port) mengalirkan data byte per byte secara sekuensial."
      },
      {
        q: "Interrupt vector table menyimpan...",
        options: ["Data payload dari setiap interrupt yang tertunda", "Alamat dari interrupt handler (ISR) untuk setiap jenis interrupt", "Snapshot register CPU saat interrupt terjadi", "Level prioritas dari setiap sumber interrupt"],
        answer: 1,
        explanation: "Interrupt Vector Table (IVT) adalah array yang memetakan nomor interrupt ke alamat memori dari Interrupt Service Routine (ISR) yang sesuai. CPU menggunakannya untuk melompat ke handler yang tepat."
      },
      {
        q: "Double buffering dalam konteks I/O digunakan untuk...",
        options: ["Menyediakan keamanan berlapis untuk data sensitif", "Mengurangi waktu tunggu dengan menggunakan dua buffer bergantian (satu diisi, satu diproses)", "Enkripsi data secara dua tahap sebelum transfer", "Menduplikasi data untuk redundansi"],
        answer: 1,
        explanation: "Double buffering menggunakan dua buffer: saat satu buffer sedang diproses/dikonsumsi, buffer lain sedang diisi dengan data baru. Ini mengeliminasi waktu idle antara batch I/O."
      },
      {
        q: "Asynchronous I/O memungkinkan proses untuk...",
        options: ["Melakukan I/O dengan enkripsi otomatis", "Melanjutkan eksekusi tanpa menunggu operasi I/O selesai", "Melakukan I/O dengan prioritas lebih rendah", "Mengakses perangkat I/O yang terkunci proses lain"],
        answer: 1,
        explanation: "Dengan asynchronous I/O, proses memulai operasi I/O dan langsung mendapat kontrol kembali. Proses dapat diberitahu melalui callback, signal, atau polling status saat I/O selesai."
      },
      {
        q: "Blocking I/O berarti...",
        options: ["Proses diblokir oleh OS karena kesalahan keamanan", "Proses di-suspend (menunggu) sampai operasi I/O yang diminta selesai sepenuhnya", "I/O diblokir oleh firewall sistem", "Data diblokir di buffer dan tidak diteruskan"],
        answer: 1,
        explanation: "Pada blocking I/O (synchronous), proses yang memanggil read() atau write() akan diblokir (masuk state waiting) sampai data tersedia atau operasi tulis selesai."
      },
      {
        q: "Vectored I/O (scatter/gather I/O) memungkinkan...",
        options: ["Pengiriman data ke beberapa perangkat secara bersamaan", "Satu pemanggilan sistem I/O untuk membaca/menulis ke beberapa buffer non-kontigu sekaligus", "Enkripsi data yang dikirim ke berbagai tujuan", "Prioritas berbeda untuk setiap permintaan I/O"],
        answer: 1,
        explanation: "Scatter/gather I/O (readv/writev di UNIX) memungkinkan satu system call untuk mengumpulkan (gather) data dari beberapa buffer non-kontigu untuk write, atau menyebarkan (scatter) data ke beberapa buffer saat read."
      },
      {
        q: "Buffering dalam kernel I/O subsystem berfungsi untuk...",
        options: ["Menyimpan data secara permanen di memori kernel", "Menangani perbedaan kecepatan antara produsen dan konsumen data, serta perbedaan ukuran transfer", "Mengenkripsi data sebelum dikirim ke perangkat", "Mendeteksi dan memperbaiki kesalahan data"],
        answer: 1,
        explanation: "Buffer menjadi penampung sementara saat ada mismatch: kecepatan antara CPU dan perangkat I/O, atau ukuran data yang diinginkan proses vs ukuran transfer perangkat."
      },
      {
        q: "I/O port (port-mapped I/O) digunakan untuk...",
        options: ["Komunikasi data antara dua komputer dalam jaringan", "Mengakses register kontrol dan data perangkat melalui instruksi IN/OUT khusus", "Menyimpan data buffer sementara di memori cache", "Mendistribusikan penanganan interrupt ke berbagai CPU core"],
        answer: 1,
        explanation: "I/O port menggunakan ruang alamat terpisah dari memori. CPU menggunakan instruksi khusus (IN/OUT di x86) untuk membaca/menulis ke port I/O, berbeda dari memory-mapped I/O."
      },
      {
        q: "Perbedaan antara polling dan interrupt dalam penanganan I/O dari sudut pandang efisiensi CPU...",
        options: ["Polling selalu lebih efisien untuk semua jenis perangkat", "Interrupt lebih efisien untuk perangkat lambat; polling bisa lebih efisien untuk perangkat sangat cepat (throughput tinggi)", "Interrupt tidak dapat digunakan untuk perangkat kecepatan tinggi", "Tidak ada perbedaan efisiensi yang signifikan antara keduanya"],
        answer: 1,
        explanation: "Untuk perangkat lambat (keyboard, mouse), interrupt sangat efisien karena CPU bebas mengerjakan hal lain. Untuk perangkat sangat cepat (NVMe SSD), overhead interrupt handling bisa lebih besar dari keuntungannya—polling singkat bisa lebih efisien."
      }
    ],
    essay: [
      {
        q: "Jelaskan tiga metode I/O: Polling, Interrupt-driven I/O, dan DMA! Bandingkan efisiensi ketiganya untuk berbagai skenario!",
        modelAnswer: "**1. Polling (Busy Waiting):**\nCPU terus memeriksa status register perangkat dalam loop. Sangat sederhana implementasinya. Efisien hanya untuk perangkat yang sangat cepat atau saat latensi rendah sangat kritis. Masalah: membuang siklus CPU untuk perangkat lambat.\n\n**2. Interrupt-driven I/O:**\nCPU memulai I/O dan melanjutkan tugas lain. Perangkat mengirim interrupt saat selesai. CPU menangani interrupt, lanjut. Efisien untuk perangkat dengan latensi tidak pasti (keyboard, disk). Overhead: context switch untuk setiap interrupt.\n\n**3. DMA (Direct Memory Access):**\nCPU memerintahkan DMA controller untuk transfer data bulk. DMA langsung mengakses bus memori tanpa CPU. Setelah selesai, DMA mengirim satu interrupt ke CPU. Paling efisien untuk transfer data besar (disk, network).\n\n**Perbandingan:**\n- Throughput: DMA > Interrupt > Polling (untuk data besar)\n- Overhead CPU: DMA paling rendah, Polling paling tinggi\n- Latensi: Polling terendah, Interrupt dan DMA lebih tinggi\n- Kesesuaian: Polling→NVMe/GPU, Interrupt→keyboard/mouse, DMA→disk/network"
      },
      {
        q: "Apa fungsi buffering dan caching dalam kernel I/O subsystem? Jelaskan perbedaan keduanya!",
        modelAnswer: "**Buffering:**\nBuffer adalah area memori sementara untuk menampung data dalam perjalanan antara dua tempat. Fungsi:\n1. Menangani perbedaan kecepatan (producer-consumer mismatch): CPU cepat vs disk lambat\n2. Menangani perbedaan ukuran transfer: proses ingin 1KB, disk transfer 4KB blok\n3. Copy semantics: buffer memastikan data yang ditulis ke disk adalah versi saat write() dipanggil, bukan versi setelah dimodifikasi proses\n\n**Caching:**\nCache adalah area memori untuk menyimpan salinan data yang sering diakses agar akses berikutnya lebih cepat. Fungsi:\n1. Mempercepat akses data yang sering dibaca (disk blocks cache / page cache)\n2. Mengurangi jumlah akses fisik ke perangkat I/O\n\n**Perbedaan:**\n- Buffer: data hanya ada di buffer (sementara dalam perjalanan)\n- Cache: data ada baik di cache maupun di storage aslinya (salinan untuk kecepatan)\n- Buffer fokus pada sinkronisasi, Cache fokus pada performa\n\nDalam implementasi nyata, seringkali digabungkan (unified buffer cache): disk block di-cache sekaligus di-buffer."
      },
      {
        q: "Jelaskan perbedaan antara blocking I/O dan non-blocking I/O! Berikan contoh penggunaan masing-masing!",
        modelAnswer: "**Blocking I/O (Synchronous):**\nProses memanggil operasi I/O dan diblokir (state: waiting) sampai operasi selesai dan data tersedia. Alur eksekusi proses dihentikan sementara.\n\nContoh: fread() di C—program menunggu sampai file selesai dibaca sebelum melanjutkan. Cocok untuk program single-threaded sederhana seperti utilitas command-line.\n\n**Non-blocking I/O:**\nSistem call I/O langsung kembali, bahkan jika data belum tersedia (mengembalikan EAGAIN/EWOULDBLOCK). Proses harus memeriksa kembali atau menggunakan event notification.\n\nContoh: socket dengan flag O_NONBLOCK—server web yang menangani ribuan koneksi bersamaan (Nginx, Node.js) menggunakan non-blocking I/O + event loop.\n\n**Asynchronous I/O (AIO):**\nProses memulai I/O dan langsung mendapat kontrol kembali. OS memberitahu proses (callback, signal, completion queue) saat I/O benar-benar selesai.\n\n**Kapan menggunakan:**\n- Blocking: program sederhana, single-threaded, logika sekuensial\n- Non-blocking: high-performance servers, event-driven architectures\n- Async: I/O berat dengan banyak operasi paralel (database, file server)"
      },
      {
        q: "Bagaimana interrupt handling bekerja dalam sistem operasi? Jelaskan langkah-langkahnya dari interrupt terjadi hingga proses dilanjutkan!",
        modelAnswer: "**Langkah-langkah Interrupt Handling:**\n\n1. **Perangkat menghasilkan interrupt:** Device mengirim sinyal ke interrupt controller (PIC/APIC)\n\n2. **CPU menyelesaikan instruksi saat ini:** CPU tidak langsung berhenti di tengah instruksi\n\n3. **CPU mengakui (acknowledge) interrupt:** Interrupt controller memberi tahu nomor interrupt\n\n4. **Save context:** Hardware atau OS menyimpan register CPU (PC, SP, PSW, register umum) ke stack kernel atau PCB proses yang sedang berjalan\n\n5. **Lookup ISR:** CPU menggunakan nomor interrupt sebagai index ke Interrupt Vector Table untuk menemukan alamat Interrupt Service Routine\n\n6. **Eksekusi ISR (First-level handler):** ISR minimal mengumpulkan data dari perangkat dan membersihkan flag interrupt\n\n7. **Deffered Interrupt Processing:** Pekerjaan berat dilakukan di interrupt thread atau tasklet (bottom half di Linux)\n\n8. **Restore context:** CPU me-restore register yang disimpan, kembali ke instruksi yang sebelumnya dieksekusi\n\n9. **Resume proses:** Proses yang diinterupsi (atau proses lain jika ada preemption) dilanjutkan\n\n**Overhead:** Setiap interrupt menyebabkan context switch parsial, cache pollution, dan TLB flush parsial."
      },
      {
        q: "Jelaskan peran device driver dalam sistem I/O dan bagaimana kernel berinteraksi dengan berbagai perangkat keras yang berbeda!",
        modelAnswer: "**Device Driver** adalah software kernel yang berfungsi sebagai penerjemah antara antarmuka generik kernel dan detail spesifik perangkat keras tertentu.\n\n**Lapisan Arsitektur I/O (dari atas ke bawah):**\n1. User space: aplikasi menggunakan system call (read, write, ioctl)\n2. Kernel I/O subsystem: scheduling, buffering, caching, error handling\n3. Device driver: implementasi spesifik perangkat\n4. Hardware: controller dan perangkat fisik\n\n**Fungsi Device Driver:**\n- Menerima request I/O dari kernel (dalam format command abstrak)\n- Menerjemahkan ke urutan operasi hardware spesifik (menulis ke register perangkat)\n- Menangani interrupt dari perangkat\n- Melaporkan status dan error ke kernel\n- Menyediakan antarmuka standar (file operations: open, read, write, close, ioctl)\n\n**Interaksi Kernel dengan Berbagai Perangkat:**\nKernel menggunakan abstraksi: semua block devices terlihat sama dari atas. Driver yang berbeda mengimplementasikan interface yang sama. Ini memungkinkan kernel yang sama bekerja dengan ribuan perangkat berbeda tanpa perubahan kode kernel inti."
      }
    ]
  },
  {
    id: "modul13fs",
    name: "Modul 13A",
    title: "File System Interface",
    icon: "📁",
    color: "#F59E0B",
    colorLight: "#FEF3C7",
    multipleChoice: [
      {
        q: "File dalam konteks sistem operasi dapat didefinisikan sebagai...",
        options: ["Program yang sedang berjalan dalam memori", "Kumpulan informasi berkaitan yang diberi nama dan disimpan di storage sekunder", "Blok memori fisik yang dialokasikan untuk suatu proses", "Entri tunggal dalam tabel direktori"],
        answer: 1,
        explanation: "File adalah abstraksi OS untuk penyimpanan: kumpulan data yang berkaitan, diberi nama, dan disimpan secara persisten di storage sekunder (disk, SSD, dll)."
      },
      {
        q: "Operasi file yang memindahkan file pointer (current-file-position pointer) tanpa melakukan transfer data aktual adalah...",
        options: ["Read", "Write", "Seek", "Open"],
        answer: 2,
        explanation: "Seek (atau lseek di UNIX) mengubah posisi pointer baca/tulis dalam file ke lokasi tertentu tanpa membaca atau menulis data apapun."
      },
      {
        q: "Kelemahan utama direktori single-level (satu tingkat) adalah...",
        options: ["Terlalu kompleks untuk diimplementasikan", "Semua file harus memiliki nama yang unik secara global, tidak ada organisasi logis", "Tidak mendukung operasi baca/tulis file", "Tidak dapat digunakan di sistem multiuser"],
        answer: 1,
        explanation: "Direktori single-level menyimpan semua file dalam satu direktori. Masalah: (1) penamaan unik sulit saat banyak file/pengguna, (2) tidak ada pengelompokan logis."
      },
      {
        q: "Acyclic graph directory structure memungkinkan...",
        options: ["Direktori membentuk siklus referensi", "File atau sub-direktori dapat dibagi pakai (shared) oleh beberapa direktori berbeda", "Hanya satu pengguna yang dapat mengakses direktori pada satu waktu", "Direktori tanpa hierarki parent-child"],
        answer: 1,
        explanation: "Acyclic graph memungkinkan satu file atau direktori memiliki lebih dari satu parent (shared), tapi tanpa siklus. Diimplementasikan melalui hard link atau symbolic link."
      },
      {
        q: "Perbedaan utama antara hard link dan symbolic link adalah...",
        options: ["Hard link lebih lambat diakses", "Hard link menunjuk langsung ke inode; symbolic link menunjuk ke nama file (path)", "Symbolic link tidak dapat dihapus", "Hard link hanya tersedia di Windows NTFS"],
        answer: 1,
        explanation: "Hard link berbagi inode yang sama dengan file asli—jika file asli dihapus, hard link masih valid. Symbolic link hanya menyimpan path ke file asli—jika file asli dihapus, symlink menjadi dangling."
      },
      {
        q: "Mount point dalam sistem file digunakan untuk...",
        options: ["Menginstal sistem operasi ke partisi baru", "Menghubungkan file system tambahan ke titik dalam pohon direktori yang ada", "Memformat partisi disk menjadi file system baru", "Membuat partisi virtual di memori"],
        answer: 1,
        explanation: "Mounting menggabungkan file system dari perangkat/partisi lain ke dalam pohon direktori yang sudah ada di titik (mount point) tertentu, membentuk namespace direktori yang terpadu."
      },
      {
        q: "File Control Block (FCB) atau inode dalam sistem UNIX menyimpan...",
        options: ["Konten/isi data dari file", "Metadata file: permission, owner, timestamps, ukuran, dan lokasi blok data di disk", "Nama file dalam format string", "Isi entri direktori"],
        answer: 1,
        explanation: "Inode menyimpan semua metadata tentang file (mode, UID, GID, ukuran, atime/mtime/ctime, pointer ke blok data) KECUALI nama file. Nama file disimpan di entri direktori."
      },
      {
        q: "Access Control List (ACL) dalam proteksi file memungkinkan...",
        options: ["Enkripsi otomatis setiap file", "Mendefinisikan izin akses secara rinci per pengguna atau grup tertentu", "Backup otomatis file saat dimodifikasi", "Kompresi transparan file saat disimpan"],
        answer: 1,
        explanation: "ACL memperluas model permission UNIX standar (owner/group/other) dengan memungkinkan pemberian izin berbeda-beda untuk setiap user atau grup secara individual."
      },
      {
        q: "Dalam sistem UNIX/Linux, tipe file ditentukan oleh...",
        options: ["Ekstensi nama file (.txt, .exe, dll)", "Metadata tipe yang disimpan dalam inode (regular, directory, symlink, device, dll)", "Ukuran file dalam bytes", "Tanggal pembuatan file"],
        answer: 1,
        explanation: "UNIX menggunakan bit tipe dalam mode field inode untuk membedakan: regular file (-), directory (d), symbolic link (l), character device (c), block device (b), FIFO (p), socket (s)."
      },
      {
        q: "Open file table pada level sistem (system-wide open file table) menyimpan...",
        options: ["Seluruh daftar file yang ada di disk", "Informasi tentang setiap file yang sedang dibuka: posisi, mode, referensi count, dll", "Permission dari semua file dalam direktori", "Lokasi fisik direktori root"],
        answer: 1,
        explanation: "Kernel memelihara system-wide open file table yang berisi entri untuk setiap file yang sedang dibuka oleh proses manapun, termasuk file offset dan flags. Per-process file descriptor table menunjuk ke entri ini."
      },
      {
        q: "Virtual File System (VFS) dalam sistem operasi modern berfungsi untuk...",
        options: ["Menyimpan file-file penting di memori virtual", "Menyediakan antarmuka abstrak seragam untuk berbagai implementasi file system yang berbeda", "Enkripsi otomatis semua file yang disimpan", "Kompresi file secara transparan"],
        answer: 1,
        explanation: "VFS mendefinisikan antarmuka generik (vnode, vfs operations) yang harus diimplementasikan oleh setiap file system (ext4, NTFS, FAT, tmpfs). Ini memungkinkan user space menggunakan system call yang sama untuk semua file system."
      },
      {
        q: "Umask di sistem UNIX digunakan untuk...",
        options: ["Menyembunyikan file dari tampilan direktori", "Menentukan bit permission yang akan dikurangi/dimatikan saat file atau direktori baru dibuat", "Mengenkripsi file sebelum disimpan", "Menghapus permission dari file yang sudah ada"],
        answer: 1,
        explanation: "Umask adalah mask yang menentukan permission mana yang TIDAK diberikan secara default. Misalnya umask 022: file baru dibuat dengan 666-022=644, direktori dengan 777-022=755."
      },
      {
        q: "Metode akses file Direct (Random) Access cocok digunakan untuk...",
        options: ["Log file yang hanya ditambah di akhir (append-only)", "Database yang membutuhkan akses ke record di posisi manapun secara langsung", "Transfer file sequensial antara dua komputer", "Backup file yang harus dibaca dari awal"],
        answer: 1,
        explanation: "Direct access memungkinkan lompat langsung ke blok/record manapun dalam file tanpa harus membaca dari awal. Sangat penting untuk database dan file sistem yang besar."
      },
      {
        q: "File locking dalam sistem operasi digunakan untuk...",
        options: ["Mengenkripsi file agar tidak dapat dibaca tanpa kunci", "Mencegah akses bersamaan yang inkonsisten ke file dari beberapa proses", "Membuat backup otomatis sebelum modifikasi", "Mengkompresi file agar menghemat ruang disk"],
        answer: 1,
        explanation: "File locking (shared lock untuk baca bersamaan, exclusive lock untuk tulis eksklusif) memastikan konsistensi data saat beberapa proses mengakses file yang sama secara bersamaan."
      },
      {
        q: "Dalam indexed sequential access method, index file digunakan untuk...",
        options: ["Mengenkripsi pointer ke data", "Menyimpan key-pointer pairs yang memungkinkan pencarian cepat ke lokasi dalam file sekuensial", "Membuat backup otomatis file", "Mengurutkan data secara otomatis"],
        answer: 1,
        explanation: "Indexed access menggunakan index file terpisah berisi key dan pointer. Cari key di index (O(log n)), lalu gunakan pointer untuk langsung jump ke record di file data."
      }
    ],
    essay: [
      {
        q: "Jelaskan struktur direktori tree (pohon) dan acyclic graph! Apa kelebihan acyclic graph dibanding struktur tree murni?",
        modelAnswer: "**Direktori Tree (Pohon):**\nStruktur hierarki di mana setiap direktori (kecuali root) memiliki tepat satu parent. File hanya bisa berada di satu direktori. Sederhana dan mudah dipahami. Traversal dan penghapusan rekursif mudah dilakukan.\n\n**Acyclic Graph:**\nMemperbolehkan satu file atau sub-direktori memiliki lebih dari satu parent (link ke beberapa direktori), namun tanpa siklus (acyclic). Diimplementasikan melalui:\n- Hard links (berbagi inode yang sama)\n- Symbolic links (pointer ke path file)\n\n**Kelebihan Acyclic Graph:**\n1. **Sharing:** File yang sama dapat diakses dari beberapa lokasi direktori yang berbeda tanpa duplikasi\n2. **Efisiensi ruang:** Tidak perlu menyimpan salinan data yang sama\n3. **Konsistensi:** Modifikasi terlihat dari semua referensi\n4. **Flexibilitas:** Mendukung proyek tim yang berbagi file di direktori masing-masing\n\n**Tantangan:** Penghapusan file dengan multiple references harus dikelola (reference counting di hard links). Deteksi siklus diperlukan jika symbolic links ke direktori diperbolehkan."
      },
      {
        q: "Jelaskan perbedaan antara hard link dan symbolic link! Kapan menggunakan masing-masing?",
        modelAnswer: "**Hard Link:**\n- Menunjuk langsung ke inode file\n- Berbagi inode yang sama dengan file asli (link count bertambah)\n- Jika file asli dihapus, hard link masih valid (data masih ada sampai link count = 0)\n- Tidak dapat melintasi file system (filesystem boundary)\n- Tidak bisa dibuat untuk direktori (umumnya)\n- Tidak memiliki overhead storage (hanya entri direktori)\n\n**Symbolic Link (Symlink/Soft Link):**\n- File terpisah yang menyimpan path string ke file target\n- Memiliki inode sendiri dengan tipe 'symbolic link'\n- Jika file target dihapus/dipindah, symlink menjadi 'dangling' (broken)\n- Dapat melintasi file system boundary\n- Dapat dibuat untuk direktori\n- Ada overhead kecil untuk penyimpanan path\n\n**Kapan menggunakan:**\n- Hard link: file sering dipindah, backup versioning, ketika perlu referensi yang selalu valid\n- Symlink: mengarah ke direktori, path berubah-ubah, lintas file system, library versioning (/usr/lib/libc.so → libc.so.6)"
      },
      {
        q: "Apa itu Virtual File System (VFS)? Mengapa VFS penting dalam sistem operasi modern seperti Linux?",
        modelAnswer: "**Virtual File System (VFS)** adalah lapisan abstraksi dalam kernel yang mendefinisikan antarmuka standar (interface) yang harus diimplementasikan oleh setiap file system konkret.\n\n**Struktur VFS di Linux:**\n- **Superblock:** Merepresentasikan file system yang di-mount (metadata seluruh FS)\n- **Inode:** Merepresentasikan file individual (metadata per file)\n- **Dentry (Directory Entry):** Cache struktur direktori untuk performa\n- **File object:** Merepresentasikan file yang sedang dibuka oleh proses\n\n**Mengapa VFS Penting:**\n\n1. **Transparansi:** User dan aplikasi menggunakan system call yang sama (open, read, write) untuk ext4, NTFS, NFS, procfs, tmpfs, dll—tanpa perlu tahu tipe file system\n\n2. **Modularitas:** File system baru dapat ditambahkan ke kernel sebagai modul tanpa memodifikasi kode kernel inti\n\n3. **Interoperabilitas:** Satu pohon direktori dapat berisi campuran berbagai file system yang di-mount di berbagai titik\n\n4. **Special File Systems:** VFS memungkinkan pseudo-filesystem seperti /proc (informasi proses) dan /sys (informasi hardware) yang tidak mewakili storage fisik apapun"
      },
      {
        q: "Jelaskan tiga metode akses file: Sequential Access, Direct Access, dan Indexed Access! Berikan contoh penggunaan masing-masing!",
        modelAnswer: "**1. Sequential Access:**\nData dibaca/ditulis secara berurutan dari awal ke akhir. File pointer bergerak maju setiap operasi. Operasi: read/write (maju pointer), reset (ke awal).\n\nContoh: Pemrosesan log file, tape backup, pemutar audio/video yang memutar dari awal, compiler yang memproses source file.\n\n**2. Direct (Random) Access:**\nDapat melompat ke posisi manapun dalam file secara langsung menggunakan operasi seek(). File dianggap sebagai array blok bernomor.\n\nContoh: Database (PostgreSQL, MySQL) yang mengakses record di posisi manapun, virtual memory yang mengakses halaman dari swap file, sistem file flat-file database.\n\n**3. Indexed Access:**\nMenggunakan file index terpisah yang berisi key dan pointer. Cari key di index → dapatkan pointer → akses langsung ke record di file data.\n\nContoh: Database dengan B-tree index, ISAM (Indexed Sequential Access Method) dalam sistem lama, sistem katalog perpustakaan.\n\n**Perbandingan:**\n| Aspek | Sequential | Direct | Indexed |\n|-------|-----------|--------|--------|\n| Kompleksitas | Rendah | Sedang | Tinggi |\n| Kecepatan akses acak | Lambat | Cepat | Sangat Cepat |\n| Overhead penyimpanan | Minimal | Minimal | Ada (index) |\n| Cocok untuk | Stream data | Database sederhana | Database besar |"
      },
      {
        q: "Bagaimana sistem proteksi file bekerja di UNIX/Linux? Jelaskan konsep owner, group, dan other beserta bit permission!",
        modelAnswer: "**Model Proteksi UNIX:**\nSetiap file/direktori memiliki metadata permission yang terdiri dari:\n- **Owner (User):** Pengguna yang memiliki file\n- **Group:** Grup pengguna yang berasosiasi dengan file  \n- **Other:** Semua pengguna lainnya\n\n**Permission Bits (9 bit):**\n```\n rwxrwxrwx\n ||||||||\\\\\\\n |||||||  \\other: rwx\n |||||\\\\\\\n |||||  group: rwx\n ||\\\\\\\n ||  owner: rwx\n```\n\n- **r (read):** File: dapat dibaca. Direktori: dapat list isi\n- **w (write):** File: dapat ditulis. Direktori: dapat buat/hapus file\n- **x (execute):** File: dapat dieksekusi. Direktori: dapat traversal (cd)\n\n**Special Bits:**\n- **SUID (4000):** Program berjalan dengan UID pemilik file, bukan UID pemanggil\n- **SGID (2000):** Seperti SUID tapi untuk GID\n- **Sticky bit (1000):** Di direktori: hanya pemilik yang bisa hapus file miliknya\n\n**Representasi oktal:** chmod 755 = rwxr-xr-x (owner: semua, group+other: read+execute)\n\n**Penentuan akses:** OS cek secara berurutan: apakah user adalah owner? Jika ya, gunakan bit owner. Jika user dalam group? Gunakan bit group. Jika tidak keduanya, gunakan bit other."
      }
    ]
  },
  {
    id: "modul13um",
    name: "Modul 13B",
    title: "User Management",
    icon: "👥",
    color: "#EC4899",
    colorLight: "#FCE7F3",
    multipleChoice: [
      {
        q: "Superuser (root) di sistem Linux memiliki karakteristik...",
        options: ["Batasan akses keamanan yang sama seperti user biasa", "Akses penuh ke seluruh resource sistem tanpa pembatasan permission", "Hanya akses ke file-file di direktori home-nya sendiri", "Akses terbatas hanya ke direktori /etc dan /usr"],
        answer: 1,
        explanation: "Root (UID=0) adalah akun dengan hak akses penuh. Kernel melewati semua pemeriksaan permission untuk proses yang berjalan sebagai root."
      },
      {
        q: "File yang menyimpan informasi akun pengguna di sistem Linux adalah...",
        options: ["/etc/users", "/etc/passwd", "/etc/accounts", "/etc/user.conf"],
        answer: 1,
        explanation: "/etc/passwd menyimpan informasi user: username, UID, GID, GECOS info, home directory, dan shell. Dapat dibaca oleh semua user (world-readable)."
      },
      {
        q: "Password yang di-hash disimpan di file...",
        options: ["/etc/passwd", "/etc/shadow", "/etc/password", "/etc/crypt"],
        answer: 1,
        explanation: "/etc/shadow menyimpan hash password dan informasi expiry. File ini hanya dapat dibaca oleh root (permission 000 atau 640), mencegah brute force offline."
      },
      {
        q: "Grup di Linux digunakan untuk...",
        options: ["Mengelompokkan proses yang berjalan bersamaan", "Memberikan hak akses yang sama kepada beberapa pengguna sekaligus", "Mengenkripsi data yang dibagikan antar user", "Backup otomatis file milik pengguna"],
        answer: 1,
        explanation: "Group memungkinkan administrator memberikan izin akses ke sekelompok user secara serentak. Misalnya group 'developers' mendapat akses ke direktori source code proyek."
      },
      {
        q: "UID (User ID) bernilai 0 dimiliki oleh...",
        options: ["User pertama yang dibuat saat instalasi", "Root/superuser—pemilik hak akses tertinggi", "System service user (system account)", "Guest atau anonymous user"],
        answer: 1,
        explanation: "UID 0 adalah identitas root secara kernel. Proses dengan UID efektif = 0 mendapat hak akses penuh. UID 1-999 umumnya untuk system accounts, UID 1000+ untuk user biasa."
      },
      {
        q: "Perintah sudo memungkinkan user untuk...",
        options: ["Login langsung sebagai root secara permanen", "Menjalankan perintah tertentu dengan hak akses elevated secara sementara dan terkontrol", "Menghapus user lain dari sistem", "Membuat grup baru tanpa izin admin"],
        answer: 1,
        explanation: "sudo menjalankan perintah tertentu sebagai user lain (default: root) tanpa harus login sebagai root penuh. Setiap penggunaan dilog, dan harus dikonfigurasi di /etc/sudoers."
      },
      {
        q: "File /etc/group menyimpan informasi tentang...",
        options: ["Grup pengguna, GID, dan daftar anggota setiap grup", "Hash password grup yang diproteksi", "Permission dari direktori yang dimiliki grup", "Konfigurasi hak sudo untuk setiap grup"],
        answer: 0,
        explanation: "/etc/group berisi: nama_grup:password:GID:anggota1,anggota2,... Menampilkan semua grup yang ada beserta anggotanya."
      },
      {
        q: "Primary group vs secondary group: perbedaan utama keduanya adalah...",
        options: ["Primary group memiliki izin keamanan yang lebih tinggi", "Primary group adalah grup default yang digunakan saat user membuat file baru; secondary group adalah grup tambahan", "Secondary group tidak dapat digunakan untuk permission file", "Tidak ada perbedaan fungsional antara keduanya"],
        answer: 1,
        explanation: "Saat user membuat file, GID file di-set ke primary group user. Secondary groups memberikan akses tambahan ke resource grup lain, namun tidak mempengaruhi GID file yang dibuat."
      },
      {
        q: "Perintah usermod digunakan untuk...",
        options: ["Membuat akun user baru di sistem", "Memodifikasi atribut akun user yang sudah ada (UID, grup, shell, dll)", "Menghapus akun user dari sistem", "Mengunci akun user agar tidak bisa login"],
        answer: 1,
        explanation: "usermod memodifikasi user yang sudah ada: mengubah username (-l), UID (-u), home directory (-d), shell (-s), menambah ke grup (-aG), dll."
      },
      {
        q: "Home directory untuk user reguler biasanya berada di...",
        options: ["/home/username", "/usr/username", "/var/home/username", "/etc/users/username"],
        answer: 0,
        explanation: "Konvensi Linux menempatkan home directory user di /home/username. Home directory menyimpan file personal, konfigurasi aplikasi (.bashrc, .config/), dan dokumen user."
      },
      {
        q: "Perintah chown digunakan untuk...",
        options: ["Mengubah permission bit file (read, write, execute)", "Mengubah pemilik (owner) dan/atau group dari file atau direktori", "Mengubah timestamp akses/modifikasi file", "Membuat symbolic link ke file"],
        answer: 1,
        explanation: "chown mengubah ownership file: 'chown user:group file' atau 'chown user file'. Hanya root yang dapat mengubah owner ke user lain."
      },
      {
        q: "Kolom ke-7 dalam format file /etc/passwd menentukan...",
        options: ["Password hash user (dalam format kriptografi)", "UID numerik dari user", "Shell default yang digunakan saat user login", "Path home directory user"],
        answer: 2,
        explanation: "Format /etc/passwd: username:password:UID:GID:GECOS:home_dir:shell. Field ke-7 adalah login shell (misalnya /bin/bash, /bin/zsh, atau /sbin/nologin untuk system accounts)."
      },
      {
        q: "Perintah untuk melihat daftar user yang sedang login di sistem saat ini adalah...",
        options: ["showusers", "who", "listusers", "users -show"],
        answer: 1,
        explanation: "'who' menampilkan siapa yang sedang login: username, terminal, waktu login, dan dari host mana. 'w' memberikan informasi lebih detail termasuk apa yang sedang dilakukan."
      },
      {
        q: "Lock akun user (usermod -L) di Linux bekerja dengan cara...",
        options: ["Menghapus password user dari sistem", "Menambahkan karakter '!' di depan hash password di /etc/shadow", "Mengubah shell user menjadi /bin/false", "Memindahkan home directory user ke lokasi tidak dapat diakses"],
        answer: 1,
        explanation: "usermod -L (lock) menambahkan '!' sebelum hash password di /etc/shadow. Ini membuat otentikasi password tidak mungkin berhasil tanpa menghapus data apapun."
      },
      {
        q: "Perintah untuk menambah user yang sudah ada ke grup tambahan (secondary group) adalah...",
        options: ["groupadd username groupname", "usermod -aG groupname username", "addgroup username groupname", "chgrp groupname username"],
        answer: 1,
        explanation: "usermod -aG groupname username menambahkan user ke grup sebagai secondary group. Flag -a (append) penting—tanpa -a, user akan dihapus dari semua grup lain."
      }
    ],
    essay: [
      {
        q: "Jelaskan struktur file /etc/passwd! Apa arti setiap field yang ada di dalamnya? Berikan contoh baris nyata!",
        modelAnswer: "**Format /etc/passwd:**\n```\nusername:password:UID:GID:GECOS:home_directory:shell\n```\n\n**Contoh:**\n```\njohn:x:1001:1001:John Doe,,,:/home/john:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nroot:x:0:0:root:/root:/bin/bash\n```\n\n**Penjelasan field:**\n1. **username:** Nama login pengguna (max 32 karakter)\n2. **password:** 'x' berarti hash disimpan di /etc/shadow (dahulu berisi hash langsung)\n3. **UID:** User ID numerik (0=root, 1-999=system, 1000+=user biasa)\n4. **GID:** Primary Group ID (mereferensi entri di /etc/group)\n5. **GECOS:** Info deskriptif: nama lengkap, nomor telepon, dll (bisa kosong)\n6. **home_directory:** Path direktori home user (/home/john, /root, dll)\n7. **shell:** Program yang dijalankan saat login (/bin/bash, /sbin/nologin untuk service accounts)\n\n**Catatan:** File ini world-readable karena program seperti ls memerlukan pemetaan UID→username. Ini aman karena password hash sudah dipindah ke /etc/shadow."
      },
      {
        q: "Apa perbedaan antara useradd dan adduser di Linux? Jelaskan juga bagaimana cara membuat user lengkap dengan home directory!",
        modelAnswer: "**useradd:**\n- Program tingkat rendah (low-level)\n- Tersedia di hampir semua distro Linux\n- Tidak otomatis membuat home directory kecuali diberi flag -m\n- Tidak interaktif (semua parameter harus diberikan via argumen)\n- Contoh: `useradd -m -s /bin/bash -G sudo john`\n\n**adduser:**\n- Script Perl/Python yang lebih user-friendly (high-level wrapper)\n- Tersedia di Debian-based distros (Ubuntu, dll)\n- Otomatis membuat home directory dan menyalin /etc/skel\n- Interaktif: meminta password, nama lengkap, dll\n- Contoh: `adduser john` → dialog interaktif\n\n**Membuat user lengkap dengan useradd:**\n```bash\n# Buat user dengan home directory\nuseradd -m -s /bin/bash -c 'John Doe' john\n\n# Set password\npasswd john\n\n# Tambah ke grup sudo (opsional)\nusermod -aG sudo john\n\n# Verifikasi\nid john\nls -la /home/john\n```\n\n**File yang otomatis disalin ke home directory baru dari /etc/skel:**\n.bash_profile, .bashrc, .bash_logout (template konfigurasi default)"
      },
      {
        q: "Jelaskan konsep sudo dan bagaimana konfigurasinya dilakukan melalui /etc/sudoers!",
        modelAnswer: "**sudo (Superuser Do)** adalah mekanisme yang memungkinkan user biasa menjalankan perintah tertentu dengan hak akses elevated (biasanya root) secara sementara dan terkontrol.\n\n**Mengapa sudo lebih baik dari login root langsung:**\n- Setiap penggunaan dilog di /var/log/auth.log (audit trail)\n- Akses terbatas hanya untuk perintah yang diizinkan\n- Mengurangi resiko kesalahan yang tidak disengaja sebagai root\n- Tidak perlu berbagi password root\n\n**Format /etc/sudoers:**\n```\n# Siapa  HOST=(Run_as) Perintah\nroot    ALL=(ALL:ALL) ALL\n%sudo   ALL=(ALL:ALL) ALL\njohn    ALL=(ALL) /usr/bin/apt, /sbin/reboot\n```\n\n**Elemen konfigurasi:**\n- `%sudo`: Semua anggota grup sudo\n- `ALL=(ALL:ALL)`: Di semua host, sebagai semua user dan grup\n- `NOPASSWD:`: Tidak perlu password\n- `/usr/bin/apt`: Hanya perintah ini yang diizinkan\n\n**Edit sudoers dengan aman:** Selalu gunakan `visudo` (memvalidasi syntax sebelum menyimpan, mencegah file korup yang bisa mengunci akses root)"
      },
      {
        q: "Bagaimana sistem grup di Linux bekerja? Jelaskan primary group, secondary group, dan bagaimana keduanya memengaruhi akses file!",
        modelAnswer: "**Konsep Grup di Linux:**\nGrup adalah kumpulan user yang berbagi akses ke resource tertentu. Setiap user memiliki:\n\n**Primary Group (atau login group):**\n- Ditentukan oleh field GID di /etc/passwd\n- Digunakan sebagai group owner saat user membuat file baru\n- User hanya memiliki satu primary group\n- Tersimpan di /etc/passwd dan /etc/group\n\n**Secondary Groups (supplementary groups):**\n- Grup tambahan yang dimiliki user\n- Memberikan akses ke resource grup tersebut\n- User bisa memiliki banyak secondary groups\n- Tersimpan di /etc/group sebagai daftar anggota\n\n**Pengaruh terhadap akses file:**\n```\n# File dengan permission:\n-rw-r----- 1 alice developers 1024 file.txt\n```\n- alice (owner): bisa baca & tulis\n- Anggota grup 'developers': bisa baca saja\n- User lain: tidak bisa akses\n\n**Bob bisa akses jika:**\n`id bob` menampilkan 'developers' dalam daftar grupnya\n\n**Melihat grup efektif:**\n- `id` - tampilkan semua grup\n- `groups` - tampilkan nama grup\n- `newgrp developers` - ubah primary group aktif sementara"
      },
      {
        q: "Jelaskan siklus lengkap User Account Management di Linux: membuat, memodifikasi, mengunci, dan menghapus akun user!",
        modelAnswer: "**1. MEMBUAT AKUN (Create)**\n```bash\nuseradd -m -s /bin/bash -c 'Nama Lengkap' username\npasswd username          # Set password\nusermod -aG sudo username # Tambah ke grup (opsional)\n```\n\n**2. MEMODIFIKASI AKUN (Modify)**\n```bash\nusermod -l newname oldname      # Ubah username\nusermod -d /home/newdir -m user # Pindah home dir\nusermod -s /bin/zsh user        # Ubah shell\nusermod -e 2025-12-31 user      # Set expiry date\nusermod -aG groupname user      # Tambah ke grup\npasswd username                  # Ubah password\nchage -M 90 username            # Password expire 90 hari\n```\n\n**3. MENGUNCI AKUN (Lock)**\n```bash\nusermod -L username    # Lock (tambah ! di shadow)\npasswd -l username     # Alternatif lock\n# Atau ganti shell:\nusermod -s /sbin/nologin username\n```\n\n**4. MEMBUKA KUNCI (Unlock)**\n```bash\nusermod -U username    # Unlock\npasswd -u username     # Alternatif unlock\n```\n\n**5. MENGHAPUS AKUN (Delete)**\n```bash\nuserdel username       # Hapus user (pertahankan home)\nuserdel -r username    # Hapus user + home directory\ngroupdel groupname     # Hapus grup\n```\n\n**Best Practices:** Sebelum hapus, backup home directory. Lock dulu sebelum hapus definitif untuk verifikasi tidak ada proses berjalan."
      }
    ]
  },
  {
    id: "modul14",
    name: "Modul 14",
    title: "Pemrograman Shell",
    icon: "🖥️",
    color: "#6366F1",
    colorLight: "#E0E7FF",
    multipleChoice: [
      {
        q: "Shebang line (#!/bin/bash) pada awal script shell berfungsi untuk...",
        options: ["Menulis komentar dokumentasi standar", "Menentukan interpreter yang akan digunakan untuk menjalankan script", "Mendeklarasikan variabel global script", "Mengimpor library atau modul eksternal"],
        answer: 1,
        explanation: "Shebang (#!) diikuti path interpreter (misal #!/bin/bash, #!/usr/bin/env python3) memberitahu kernel program apa yang harus digunakan untuk mengeksekusi script ini."
      },
      {
        q: "Untuk membuat file script shell menjadi dapat dieksekusi di Linux, perintah yang digunakan adalah...",
        options: ["execute script.sh", "chmod +x script.sh", "run script.sh", "bash --executable script.sh"],
        answer: 1,
        explanation: "chmod +x menambahkan execute bit ke file. Setelah ini, script bisa dijalankan langsung dengan ./script.sh (asalkan ada shebang yang benar)."
      },
      {
        q: "Variabel dalam bash shell dideklarasikan dengan cara yang benar adalah...",
        options: ["var nama = 'nilai'", "nama='nilai' (tanpa spasi di sekitar =)", "declare nama = 'nilai'", "set nama = 'nilai'"],
        answer: 1,
        explanation: "Dalam bash, assignment variabel TIDAK boleh ada spasi di sekitar '='. Contoh benar: nama='John' atau angka=42. Spasi di sekitar = akan menyebabkan error."
      },
      {
        q: "Untuk mengakses nilai dari sebuah variabel dalam bash, digunakan simbol...",
        options: ["@ sebelum nama variabel", "# sebelum nama variabel", "$ sebelum nama variabel", "& sebelum nama variabel"],
        answer: 2,
        explanation: "$ (dollar sign) digunakan untuk mengakses nilai variabel. Contoh: nama='Ali'; echo $nama atau echo ${nama}. Kurung kurawal berguna saat disambiguasi nama variabel."
      },
      {
        q: "Pernyataan if-else dalam bash shell diakhiri dengan keyword...",
        options: ["end", "endif", "fi", "done"],
        answer: 2,
        explanation: "'fi' (kebalikan 'if') menutup blok if-elif-else dalam bash. 'done' digunakan untuk menutup loop (for, while, until)."
      },
      {
        q: "Variabel khusus $? dalam bash menyimpan...",
        options: ["ID proses (PID) dari perintah terakhir", "Exit status (return code) dari perintah terakhir yang dieksekusi", "Nama script yang sedang berjalan", "Argumen pertama yang diberikan ke script"],
        answer: 1,
        explanation: "$? menyimpan exit code dari perintah terakhir. 0 berarti sukses, non-zero berarti gagal. Sangat penting untuk pengecekan kondisi dan error handling."
      },
      {
        q: "Redirection operator > (single greater-than) dalam bash digunakan untuk...",
        options: ["Mengambil input dari sebuah file", "Menulis stdout ke file (menimpa/overwrite jika file sudah ada)", "Menambahkan (append) output ke akhir file", "Mengirim output ke proses lain via pipe"],
        answer: 1,
        explanation: "> meredirect stdout ke file dan menimpa isinya jika sudah ada. Contoh: echo 'hello' > output.txt. Gunakan >> untuk append tanpa menimpa."
      },
      {
        q: "Operator >> (double greater-than) dalam bash digunakan untuk...",
        options: ["Redirect stdout dan stderr sekaligus ke file", "Menambahkan (append) output ke akhir file yang sudah ada", "Redirect error ke file", "Pipe output ke dua proses berbeda"],
        answer: 1,
        explanation: ">> meredirect stdout dan menambahkan ke akhir file (tidak menimpa). Contoh: echo 'log entry' >> app.log. Jika file belum ada, file baru dibuat."
      },
      {
        q: "Variabel khusus $# dalam bash menyimpan...",
        options: ["PID dari script yang sedang berjalan", "Jumlah argumen positional yang diberikan ke script/fungsi", "Exit status dari perintah terakhir", "Nama script (sama dengan $0)"],
        answer: 1,
        explanation: "$# adalah jumlah argumen yang diberikan. Jika script dipanggil dengan './script.sh a b c', maka $# = 3. $1, $2, $3 adalah argumen pertama, kedua, ketiga."
      },
      {
        q: "Pipe (|) dalam bash digunakan untuk...",
        options: ["Menggabungkan konten dua file menjadi satu", "Mengirimkan stdout dari perintah pertama sebagai stdin perintah berikutnya", "Menjalankan dua perintah secara paralel bersamaan", "Redirect output ke file dan terminal sekaligus"],
        answer: 1,
        explanation: "Pipe menghubungkan perintah: output satu perintah menjadi input perintah berikutnya. Contoh: cat file.txt | grep 'error' | sort | uniq -c"
      },
      {
        q: "Perintah grep dalam shell scripting digunakan untuk...",
        options: ["Membuat file baru dengan konten tertentu", "Mencari dan menampilkan baris yang cocok dengan pola (pattern) dalam file/stdin", "Mengompresi file menjadi archive", "Menyalin file ke lokasi lain"],
        answer: 1,
        explanation: "grep (Global Regular Expression Print) mencari baris yang cocok dengan pola dalam file atau stdin. grep -i (case-insensitive), -r (rekursif), -n (nomor baris), -E (extended regex)."
      },
      {
        q: "Fungsi dalam bash shell didefinisikan dengan sintaks yang benar adalah...",
        options: ["function nama_fungsi() { ... }", "def nama_fungsi(): ...", "func nama_fungsi { }", "sub nama_fungsi() { ... }"],
        answer: 0,
        explanation: "Dua cara mendefinisikan fungsi di bash: 'function nama_fungsi { ... }' atau 'nama_fungsi() { ... }'. Keduanya valid. Fungsi dipanggil hanya dengan nama: nama_fungsi arg1 arg2."
      },
      {
        q: "Perbedaan antara single quotes ('...') dan double quotes (\"...\") dalam bash adalah...",
        options: ["Single quotes lebih cepat diproses oleh shell", "Single quotes menjaga semua karakter literal; double quotes mengizinkan ekspansi variabel dan command substitution", "Double quotes lebih aman untuk string dengan spasi", "Tidak ada perbedaan fungsional antara keduanya"],
        answer: 1,
        explanation: "Single quotes: semua karakter dianggap literal, termasuk $ dan `\`. Double quotes: $ ekspansi variabel tetap berjalan ($var, $(cmd)), backslash escaping tetap berfungsi."
      },
      {
        q: "Command substitution dalam bash memungkinkan...",
        options: ["Mengganti perintah yang salah dengan yang benar", "Menyimpan output dari perintah ke dalam variabel menggunakan $(...) atau backticks", "Mengimport perintah dari script lain", "Menjalankan perintah di background"],
        answer: 1,
        explanation: "Command substitution: hasil = $(perintah) atau hasil = `perintah`. Output perintah digunakan sebagai nilai. Contoh: tanggal=$(date +%Y%m%d); echo $tanggal"
      },
      {
        q: "Loop while dalam bash digunakan untuk...",
        options: ["Mengiterasi sejumlah tetap iterasi", "Menjalankan blok perintah selama kondisi tertentu bernilai true", "Mengiterasi elemen dalam array atau list", "Menjalankan perintah satu kali dengan kondisi awal"],
        answer: 1,
        explanation: "while loop: while [ kondisi ]; do ... done. Terus berjalan selama kondisi true. Contoh: while [ $i -le 10 ]; do echo $i; ((i++)); done"
      }
    ],
    essay: [
      {
        q: "Buatlah script bash yang menerima nama sebagai argumen dan menyapa pengguna. Jika tidak ada argumen, tampilkan pesan error. Jelaskan setiap baris kodenya!",
        modelAnswer: "```bash\n#!/bin/bash\n# Baris 1: Shebang - memberitahu OS gunakan /bin/bash sebagai interpreter\n\n# Cek jumlah argumen\nif [ $# -eq 0 ]; then\n    # $# = jumlah argumen; -eq = equal (sama dengan)\n    echo \"Error: Harap berikan nama sebagai argumen!\"\n    echo \"Penggunaan: $0 <nama>\"\n    # $0 = nama script itu sendiri\n    exit 1  # Exit dengan kode error (non-zero)\nfi\n\n# Simpan argumen pertama ke variabel\nnama=$1  # $1 = argumen posisional pertama\n\n# Dapatkan jam saat ini\njam=$(date +%H)  # Command substitution, +%H = format hour (00-23)\n\n# Tentukan salam berdasarkan waktu\nif [ $jam -lt 12 ]; then\n    salam=\"Selamat Pagi\"\nelif [ $jam -lt 15 ]; then\n    salam=\"Selamat Siang\"\nelif [ $jam -lt 18 ]; then\n    salam=\"Selamat Sore\"\nelse\n    salam=\"Selamat Malam\"\nfi\n\n# Tampilkan salam\necho \"$salam, $nama! Selamat datang!\"\n# Double quotes: ekspansi variabel $salam dan $nama tetap berjalan\n```\n\n**Cara menjalankan:**\n```bash\nchmod +x sapa.sh\n./sapa.sh Budi\n# Output: Selamat Pagi, Budi! Selamat datang!\n```"
      },
      {
        q: "Jelaskan perbedaan antara single quotes dan double quotes dalam bash! Berikan contoh kasus di mana penggunaannya penting!",
        modelAnswer: "**Single Quotes (' '):**\nSemua karakter di dalam single quotes dianggap LITERAL. Tidak ada ekspansi apapun.\n\n```bash\nnama='Budi'\necho 'Halo $nama'      # Output: Halo $nama (literal, tidak diexpand)\necho 'Tanggal: $(date)' # Output: Tanggal: $(date) (literal)\necho 'It'\\''s fine'    # Cara escape single quote\n```\n\n**Double Quotes (\" \"):**\nMengizinkan ekspansi variabel ($var), command substitution ($(cmd)), dan arithmetic ($((expr))). Melindungi spasi dalam nilai variabel.\n\n```bash\nnama='Budi Santoso'\necho \"Halo $nama\"         # Output: Halo Budi Santoso\necho \"Tanggal: $(date)\"   # Output: Tanggal: [output perintah date]\necho \"2 + 2 = $((2+2))\"  # Output: 2 + 2 = 4\n```\n\n**Kasus penting - variabel dengan spasi:**\n```bash\nfile='nama file.txt'\nls $file     # ERROR: ls mencari 'nama' dan 'file.txt' terpisah\nls \"$file\"  # BENAR: spasi dalam nilai dilindungi\n```\n\n**Panduan:** Gunakan double quotes hampir selalu untuk variabel. Gunakan single quotes saat ingin teks benar-benar literal (regex, pesan yang mengandung $, dll)."
      },
      {
        q: "Bagaimana cara membuat berbagai jenis loop di bash (for, while, until)? Berikan contoh script yang menggunakan loop dengan kondisi!",
        modelAnswer: "**1. For Loop - Iterasi list:**\n```bash\n#!/bin/bash\n# Iterasi array\nbuah=(apel mangga jeruk pisang)\nfor item in \"${buah[@]}\"; do\n    echo \"Buah: $item\"\ndone\n\n# Iterasi range angka\nfor i in {1..5}; do\n    echo \"Iterasi ke-$i\"\ndone\n\n# Gaya C\nfor ((i=1; i<=10; i++)); do\n    echo -n \"$i \"\ndone\necho\n```\n\n**2. While Loop - Selama kondisi true:**\n```bash\n#!/bin/bash\n# Countdown timer\nhitung=5\nwhile [ $hitung -gt 0 ]; do\n    echo \"Countdown: $hitung\"\n    ((hitung--))\n    sleep 1\ndone\necho 'Waktu habis!'\n\n# Baca file baris per baris\nwhile IFS= read -r baris; do\n    echo \"Baris: $baris\"\ndone < /etc/passwd\n```\n\n**3. Until Loop - Sampai kondisi true:**\n```bash\n#!/bin/bash\n# Coba koneksi sampai berhasil\nuntil ping -c1 google.com &>/dev/null; do\n    echo 'Menunggu koneksi...'\n    sleep 2\ndone\necho 'Koneksi berhasil!'\n```\n\n**Kontrol Loop:** `break` keluar dari loop, `continue` lewati iterasi saat ini."
      },
      {
        q: "Jelaskan konsep fungsi dalam bash scripting! Bagaimana mendefinisikan, memanggil, dan mengembalikan nilai dari fungsi?",
        modelAnswer: "**Mendefinisikan Fungsi:**\n```bash\n# Cara 1\nfunction nama_fungsi() {\n    # isi fungsi\n    echo \"Ini fungsi\"\n}\n\n# Cara 2 (lebih POSIX compatible)\nnama_fungsi() {\n    echo \"Ini fungsi\"\n}\n```\n\n**Memanggil Fungsi:**\n```bash\nnama_fungsi           # Tanpa argumen\nnama_fungsi arg1 arg2 # Dengan argumen\n```\n\n**Parameter dalam Fungsi:**\n```bash\nsapa() {\n    local nama=$1      # local: variabel lokal fungsi\n    local kota=$2\n    echo \"Halo $nama dari $kota!\"\n}\nsapa \"Budi\" \"Jakarta\"\n```\n\n**'Return Value' (Exit Status):**\n```bash\nadalah_genap() {\n    if (( $1 % 2 == 0 )); then\n        return 0  # true/success\n    else\n        return 1  # false/failure\n    fi\n}\n\nif adalah_genap 4; then\n    echo \"4 adalah genap\"\nfi\n```\n\n**Mengembalikan String (via echo):**\n```bash\nhitung_luas() {\n    local panjang=$1\n    local lebar=$2\n    echo $((panjang * lebar))  # 'return' string via stdout\n}\n\nluas=$(hitung_luas 5 3)  # Command substitution\necho \"Luas: $luas\"        # Output: Luas: 15\n```\n\n**Catatan:** 'local' penting untuk mencegah variabel fungsi mencemari scope global."
      },
      {
        q: "Apa itu heredoc dalam bash? Bagaimana cara menggunakannya? Berikan contoh penggunaan praktis heredoc!",
        modelAnswer: "**Heredoc (Here Document)** adalah cara menyediakan multi-line input ke perintah atau menyimpan teks multi-baris dalam script tanpa perlu file terpisah.\n\n**Sintaks Dasar:**\n```bash\nperintah << DELIMITER\nbaris pertama\nbaris kedua\nbaris ketiga\nDELIMITER\n```\n\n**Contoh 1 - Menulis file konfigurasi:**\n```bash\n#!/bin/bash\ncat > /etc/myapp.conf << EOF\n# Konfigurasi aplikasi\nhost=localhost\nport=8080\ndebug=false\nuser=$(whoami)\ngenerated=$(date)\nEOF\necho 'Konfigurasi berhasil dibuat'\n```\n\n**Contoh 2 - Heredoc literal (tanpa ekspansi):**\n```bash\ncat << 'EOF'\nIni teks literal: $variabel tidak diexpand\n$(perintah) juga tidak dijalankan\nEOF\n```\n(Tanda kutip pada 'EOF' = heredoc literal)\n\n**Contoh 3 - Kirim email/pesan:**\n```bash\nmail -s 'Laporan Harian' admin@example.com << EOF\nHalo Admin,\n\nLaporan server untuk $(date +%Y-%m-%d):\n- Uptime: $(uptime -p)\n- Disk: $(df -h / | awk 'NR==2{print $5}') terpakai\n\nSalam,\nSistem Otomatis\nEOF\n```\n\n**Heredoc dengan indentasi (<<-):**\n```bash\nif true; then\n    cat <<- EOF\n        Teks ini\n        tab di depan diabaikan\n    EOF\nfi\n```"
      }
    ]
  },
  {
    id: "modul16",
    name: "Modul 16",
    title: "Security",
    icon: "🔒",
    color: "#EF4444",
    colorLight: "#FEE2E2",
    multipleChoice: [
      {
        q: "Tiga pilar utama keamanan informasi yang dikenal sebagai CIA Triad adalah...",
        options: ["Control, Identification, Authorization", "Confidentiality, Integrity, Availability", "Cryptography, Isolation, Authentication", "Compression, Integrity, Access Control"],
        answer: 1,
        explanation: "CIA Triad: Confidentiality (data hanya dapat diakses pihak berwenang), Integrity (data tidak diubah tanpa izin), Availability (sistem dan data tersedia saat dibutuhkan)."
      },
      {
        q: "Serangan yang bertujuan membuat sistem tidak dapat melayani permintaan yang sah disebut...",
        options: ["Man-in-the-Middle (MitM)", "Phishing", "Denial of Service (DoS)", "SQL Injection"],
        answer: 2,
        explanation: "DoS (Denial of Service) membuat layanan tidak tersedia bagi pengguna sah dengan cara membanjiri server dengan traffic palsu, mengeksploitasi kerentanan, atau menghabiskan sumber daya sistem."
      },
      {
        q: "Kriptografi simetris (symmetric cryptography) berarti...",
        options: ["Menggunakan kunci berbeda untuk enkripsi dan dekripsi", "Menggunakan kunci yang sama untuk enkripsi dan dekripsi", "Tidak memerlukan kunci sama sekali", "Menggunakan dua kunci publik berbeda"],
        answer: 1,
        explanation: "Kriptografi simetris menggunakan satu kunci rahasia yang sama untuk enkripsi dan dekripsi. Cepat untuk data besar, namun masalahnya adalah distribusi kunci yang aman. Contoh: AES, DES."
      },
      {
        q: "Contoh algoritma kriptografi asimetris (public-key cryptography) adalah...",
        options: ["AES (Advanced Encryption Standard)", "DES (Data Encryption Standard)", "RSA (Rivest–Shamir–Adleman)", "MD5 (Message Digest 5)"],
        answer: 2,
        explanation: "RSA adalah algoritma asimetris menggunakan pasangan kunci publik-privat. Data dienkripsi dengan kunci publik, hanya dapat didekripsi dengan kunci privat yang sesuai."
      },
      {
        q: "Perbedaan utama antara virus komputer dan worm adalah...",
        options: ["Virus lebih berbahaya dari worm dalam segala aspek", "Virus membutuhkan file host untuk menyebar; worm dapat menyebar secara mandiri melalui jaringan", "Worm tidak dapat merusak atau mengenkripsi data", "Tidak ada perbedaan teknis yang signifikan"],
        answer: 1,
        explanation: "Virus menempel pada file host (program, dokumen) dan menyebar saat file terinfeksi dibuka/dieksekusi. Worm adalah program mandiri yang mereplikasi diri melalui jaringan tanpa memerlukan host."
      },
      {
        q: "Firewall dalam sistem keamanan berfungsi untuk...",
        options: ["Mengenkripsi semua data yang masuk dan keluar jaringan", "Memantau dan mengontrol traffic jaringan berdasarkan aturan keamanan yang ditetapkan", "Mendeteksi dan menghapus virus dari file secara real-time", "Membuat backup data secara otomatis"],
        answer: 1,
        explanation: "Firewall menganalisis paket jaringan dan memutuskan apakah mengizinkan atau memblokir berdasarkan ruleset (IP address, port, protokol, state). Bisa berupa hardware atau software."
      },
      {
        q: "Perbedaan antara Authentication (autentikasi) dan Authorization (otorisasi) adalah...",
        options: ["Autentikasi lebih aman dari otorisasi", "Autentikasi memverifikasi identitas (siapa kamu?); otorisasi menentukan hak akses (apa yang boleh kamu lakukan?)", "Otorisasi selalu dilakukan sebelum autentikasi", "Keduanya adalah proses yang identik"],
        answer: 1,
        explanation: "Authentication (AuthN): membuktikan identitas (login dengan username+password). Authorization (AuthZ): setelah identitas terverifikasi, menentukan resource apa yang dapat diakses."
      },
      {
        q: "Salt dalam sistem penyimpanan password digunakan untuk...",
        options: ["Mempercepat proses hashing password", "Membuat hash unik untuk setiap password meski passwordnya identik, mencegah rainbow table attack", "Mengenkripsi password sebelum disimpan", "Mengompresi hash password agar lebih kecil"],
        answer: 1,
        explanation: "Salt adalah nilai acak yang ditambahkan ke password sebelum di-hash. Tanpa salt, user dengan password sama memiliki hash yang sama → rentan rainbow table. Dengan salt: hash selalu unik meski password sama."
      },
      {
        q: "Trojan horse dalam keamanan komputer adalah...",
        options: ["Program anti-virus yang menyamar sebagai malware", "Program yang tampak berguna/sah namun mengandung kode berbahaya tersembunyi di dalamnya", "Jenis khusus dari network worm", "Serangan fisik terhadap hardware komputer"],
        answer: 1,
        explanation: "Trojan horse menyamar sebagai program yang sah (game, utilitas, dll) untuk menipu user menginstalnya. Di balik tampilan sah, ia melakukan aktivitas berbahaya: backdoor, keylogger, dll."
      },
      {
        q: "Prinsip Least Privilege dalam keamanan sistem berarti...",
        options: ["User selalu mendapat akses maksimal untuk produktivitas", "Setiap subjek (user/proses) hanya mendapat hak akses minimum yang diperlukan untuk tugasnya", "Sistem menggunakan enkripsi sekuat mungkin", "Proses diberi prioritas penjadwalan paling rendah"],
        answer: 1,
        explanation: "Least Privilege meminimalkan damage potensial jika akun/proses dikompromisi. User akuntansi tidak perlu akses ke kode sumber; web server tidak perlu akses root."
      },
      {
        q: "Two-Factor Authentication (2FA) menggabungkan...",
        options: ["Dua password berbeda yang harus dimasukkan bersamaan", "Sesuatu yang diketahui (password) dengan sesuatu yang dimiliki (token/HP) atau biometrik", "Dua username pada sistem yang berbeda", "Kombinasi biometrik dan enkripsi data"],
        answer: 1,
        explanation: "2FA mengkombinasikan dua faktor berbeda: Something you know (password/PIN) + Something you have (OTP via HP, hardware token) atau Something you are (biometrik). Satu faktor bocor tidak cukup untuk login."
      },
      {
        q: "Buffer overflow attack terjadi ketika...",
        options: ["Buffer jaringan penuh menyebabkan packet loss", "Data yang dimasukkan melebihi kapasitas buffer, menimpa memori berdekatan dan memungkinkan eksekusi kode berbahaya", "Hard disk penuh sehingga tidak dapat menulis data", "CPU overload karena terlalu banyak proses berjalan"],
        answer: 1,
        explanation: "Buffer overflow: data lebih besar dari ukuran buffer yang dialokasikan menimpa stack/heap. Attacker dapat menimpa return address untuk mengarahkan eksekusi ke kode berbahaya (shellcode) yang mereka sisipkan."
      },
      {
        q: "Prinsip Defense in Depth dalam keamanan sistem berarti...",
        options: ["Mengandalkan satu lapisan keamanan yang sangat kuat dan terpercaya", "Menggunakan berlapis-lapis mekanisme keamanan sehingga jika satu lapisan gagal, lapisan lain masih melindungi", "Hanya menggunakan pertahanan fisik (physical security) untuk semua ancaman", "Memfokuskan semua sumber daya keamanan pada firewall saja"],
        answer: 1,
        explanation: "Defense in Depth (layered security) mengkombinasikan: physical security + network security + host security + application security + data security. Tidak ada 'silver bullet' dalam keamanan."
      },
      {
        q: "Intrusion Detection System (IDS) berfungsi untuk...",
        options: ["Secara aktif mencegah serangan dari masuk ke sistem", "Mendeteksi dan melaporkan aktivitas mencurigakan atau anomali untuk investigasi", "Mengenkripsi data yang keluar dari sistem", "Memblokir semua akses dari luar jaringan secara otomatis"],
        answer: 1,
        explanation: "IDS (berbeda dari IPS/Intrusion Prevention System) hanya mendeteksi dan melaporkan. IPS melakukan prevention aktif. IDS bisa berbasis signature (pattern matching) atau anomaly detection (baseline)."
      },
      {
        q: "Dalam konteks keamanan sistem operasi, sandboxing digunakan untuk...",
        options: ["Menyimpan data sensitif di area memori terenkripsi", "Mengisolasi program atau proses dalam lingkungan terbatas agar tidak dapat merusak sistem lain jika dikompromisi", "Membuat backup sistem secara terjadwal", "Mengenkripsi komunikasi antar proses"],
        answer: 1,
        explanation: "Sandboxing menjalankan program dalam lingkungan terisolasi dengan akses terbatas ke sistem. Digunakan browser (tab isolation), container (Docker), virtual machine, dan Android app isolation."
      }
    ],
    essay: [
      {
        q: "Jelaskan CIA Triad dalam konteks keamanan sistem operasi! Berikan contoh ancaman nyata terhadap masing-masing pilar!",
        modelAnswer: "**CIA Triad** adalah framework fundamental keamanan informasi:\n\n**1. Confidentiality (Kerahasiaan)**\nMemastikan informasi hanya dapat diakses oleh pihak yang berwenang.\n\nAncaman:\n- Eavesdropping/sniffing pada jaringan\n- Pencurian laptop/perangkat penyimpanan\n- SQL Injection yang mengekspos data database\n- Insider threat (karyawan nakal)\n- Side-channel attacks (menganalisis emisi elektromagnetik, timing)\n\nMekanisme perlindungan: enkripsi (AES, TLS), access control, data masking, VPN\n\n**2. Integrity (Integritas)**\nMemastikan data tidak dimodifikasi tanpa izin, akurat, dan dapat dipercaya.\n\nAncaman:\n- Man-in-the-Middle attack (modifikasi data dalam transit)\n- Malware yang memodifikasi file sistem\n- Ransomware yang mengenkripsi/merusak data\n- Insider mengubah record database\n- Serangan terhadap update software (supply chain attack)\n\nMekanisme: hashing (SHA-256), digital signatures, checksums, audit logs, version control\n\n**3. Availability (Ketersediaan)**\nMemastikan sistem dan data tersedia saat dibutuhkan pengguna yang berwenang.\n\nAncaman:\n- Denial of Service / Distributed DoS (DDoS)\n- Hardware failure (disk crash, power outage)\n- Ransomware yang mengenkripsi semua data\n- Bug software yang menyebabkan crash\n- Bencana alam (banjir, kebakaran data center)\n\nMekanisme: redundansi (RAID, failover), backup, load balancing, UPS, CDN, DDoS mitigation"
      },
      {
        q: "Apa perbedaan antara virus, worm, trojan horse, dan ransomware? Bagaimana sistem operasi modern melindungi diri dari masing-masing ancaman?",
        modelAnswer: "**1. Virus**\n- Menempel pada file host (program .exe, dokumen)\n- Menyebar saat file host dieksekusi dan menginfeksi file lain\n- Dapat merusak, menghapus, atau mengenkripsi data\n- Perlindungan OS: antivirus (signature + heuristic scanning), sandboxing, code signing\n\n**2. Worm**\n- Program mandiri yang mereplikasi diri melalui jaringan\n- Tidak memerlukan interaksi user atau file host\n- Memanfaatkan kerentanan layanan jaringan\n- Contoh: WannaCry (2017) memanfaatkan kerentanan SMB Windows\n- Perlindungan OS: firewall, patch management cepat, network segmentation, IDS/IPS\n\n**3. Trojan Horse**\n- Menyamar sebagai program sah/berguna\n- Bergantung pada tindakan user untuk instalasi\n- Bisa membuka backdoor, keylogger, mencuri data\n- Perlindungan OS: code signing wajib, user education, application whitelisting\n\n**4. Ransomware**\n- Mengenkripsi file korban, minta tebusan untuk kunci dekripsi\n- Contoh: WannaCry, CryptoLocker, REvil\n- Perlindungan OS: backup reguler yang terisolasi (offline), least privilege (batasi akses file), EDR (Endpoint Detection & Response), controlled folder access (Windows Defender)\n\n**Prinsip umum perlindungan OS:**\n- Update dan patch sistem secara rutin\n- Antivirus + anti-malware\n- Principle of Least Privilege\n- Defense in depth\n- User awareness training"
      },
      {
        q: "Jelaskan konsep kriptografi simetris dan asimetris! Kapan masing-masing digunakan? Bagaimana keduanya dikombinasikan dalam HTTPS?",
        modelAnswer: "**Kriptografi Simetris:**\nSatu kunci rahasia yang sama digunakan untuk enkripsi dan dekripsi.\n\nContoh algoritma: AES (128/256-bit), DES (usang), 3DES, ChaCha20\n\nKelebihan: sangat cepat, efisien untuk data besar\nKekurangan: masalah distribusi kunci (bagaimana mengirim kunci rahasia ke pihak lain dengan aman?)\n\nDigunakan untuk: enkripsi bulk data (file, disk encryption, data transfer)\n\n**Kriptografi Asimetris (Public-Key):**\nDua kunci matematically related: public key (boleh diketahui siapa saja) dan private key (rahasia).\n\nContoh: RSA, ECC (Elliptic Curve Cryptography), DH (Diffie-Hellman)\n\nKelebihan: memecahkan masalah distribusi kunci\nKekurangan: lambat, tidak praktis untuk enkripsi data besar\n\nDigunakan untuk: key exchange, digital signatures, certificate\n\n**Kombinasi dalam HTTPS (TLS Handshake):**\n1. Client meminta koneksi ke server\n2. Server mengirim sertifikat digital (berisi public key)\n3. Client verifikasi sertifikat (dari CA terpercaya)\n4. Key Exchange: client dan server negosiasi session key menggunakan Diffie-Hellman (asimetris)\n5. Setelah session key disepakati, semua komunikasi dienkripsi dengan AES (simetris)\n\nIni menggabungkan keamanan asimetris untuk key exchange + kecepatan simetris untuk data transfer."
      },
      {
        q: "Apa itu Access Control? Jelaskan tiga model access control utama: DAC, MAC, dan RBAC!",
        modelAnswer: "**Access Control** adalah mekanisme yang mengatur siapa atau apa yang dapat mengakses resource tertentu dalam sistem. Ini adalah implementasi dari otorisasi.\n\n**1. DAC (Discretionary Access Control)**\nPemilik resource menentukan sendiri siapa yang boleh mengakses.\n\nContoh: Model UNIX (owner menentukan permission rwx untuk user, group, other)\n\nKelebihan: fleksibel, mudah digunakan\nKekurangan: rentan terhadap Trojan horse, sulit audit di skala besar\n\nDigunakan di: Linux/UNIX file system, Windows NTFS, kebanyakan OS umum\n\n**2. MAC (Mandatory Access Control)**\nOS/kebijakan sistem yang menentukan akses, bukan pemilik. Setiap subjek dan objek diberi label keamanan (classification level).\n\nContoh: Bell-LaPadula model (confidentiality), Biba model (integrity). Digunakan di sistem militer (TOP SECRET, SECRET, CONFIDENTIAL, UNCLASSIFIED).\n\nKelebihan: keamanan sangat ketat, mencegah information leakage\nKekurangan: tidak fleksibel, overhead administrasi tinggi\n\nImplementasi OS: SELinux, AppArmor (kernel-level MAC di Linux)\n\n**3. RBAC (Role-Based Access Control)**\nAkses diberikan berdasarkan peran (role) user dalam organisasi, bukan identitas individual.\n\nContoh: Role 'dokter' dapat akses rekam medis pasien; role 'kasir' dapat akses transaksi pembayaran.\n\nKelebihan: mudah dikelola, sesuai struktur organisasi, audit yang mudah\nKekurangan: peran bisa overlap, privilege creep jika tidak dikelola\n\nDigunakan di: enterprise applications, cloud platforms (AWS IAM), database"
      },
      {
        q: "Jelaskan berbagai metode autentikasi pengguna! Mengapa multi-factor authentication lebih aman dari password saja?",
        modelAnswer: "**Faktor Autentikasi (tiga kategori):**\n\n**1. Something You Know (Pengetahuan)**\n- Password / passphrase\n- PIN\n- Security questions\n\nKelemahan: bisa ditebak, dicuri (phishing), leaked dari data breach, lupa\n\n**2. Something You Have (Kepemilikan)**\n- Hardware token (RSA SecurID, YubiKey)\n- Software OTP (Google Authenticator, Authy) - TOTP (Time-based One-Time Password)\n- SMS OTP (kurang aman karena SIM swapping)\n- Smart card\n\nKelemahan: bisa hilang, dicuri, SIM swapping\n\n**3. Something You Are (Biometrik)**\n- Fingerprint\n- Face recognition\n- Iris scan\n- Voice recognition\n\nKelemahan: tidak bisa diganti jika terkompromi, false positive/negative, masalah privasi\n\n**Mengapa MFA Lebih Aman:**\n\nSerangan tipikal hanya bisa mengkompromisi satu faktor:\n- Attacker tahu password kamu (from phishing) → tetap perlu OTP dari HP\n- HP kamu dicuri → attacker tidak tahu password\n- Password dan HP dicuri → masih perlu biometrik\n\nStatistik Microsoft: MFA memblokir 99.9% serangan otomatis terhadap akun.\n\n**Implementasi di OS:**\n- PAM (Pluggable Authentication Modules) di Linux memungkinkan konfigurasi MFA fleksibel\n- Windows Hello menggunakan PIN + biometrik\n- Kerberos untuk autentikasi jaringan enterprise"
      }
    ]
  }
];
