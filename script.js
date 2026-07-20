document.getElementById('year').textContent = new Date().getFullYear();

// Local time (WIB)
const clock = document.getElementById('clock');
const tick = () => {
    clock.textContent = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit'
    });
};
tick(); setInterval(tick, 15000);

// Scroll reveal
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// i18n
const id = {
    nav_exp: "Pengalaman", nav_proj: "Proyek", nav_contact: "Kontak",
    role: "Backend Software Engineer",
    headline: "Backend engineer yang <em>telaten soal detail</em>.",
    about: "3+ tahun membangun aplikasi production untuk perusahaan edukasi, HR, dan sales-enablement — utamanya PHP/Laravel dan Go. Saya memodernisasi sistem legacy, merancang REST API, dan mengelola layanan ter-container, memegang proyek dari desain sistem sampai deployment dan security testing.",
    status: "Terbuka untuk peluang",
    edu: "S1 Sistem Informasi, Telkom University (IPK 3,89)",
    cta_contact: "Hubungi saya",
    h_exp: "Pengalaman", h_skills: "Keahlian", h_proj: "Proyek", h_contact: "Kontak",
    remote: "Surabaya, Remote", present: "Sekarang",
    j1_title: "Backend Developer", j1_date: "Nov 2024 — Sekarang",
    j1_desc: "Memodernisasi Sistem Manajemen Sekolah legacy dari CodeIgniter/PHP 5.6 ke Laravel, dan membangun Broadcaster — layanan notifikasi multi-kanal berbasis Go — plus deployment dan security testing di seluruh stack.",
    j2_title: "Freelance Software Engineer", j2_org: "Wiraswasta · Remote",
    j2_desc: "Sistem informasi rumah sakit (SIMRS), aplikasi penjadwalan mata kuliah berbasis pewarnaan graf, dan integrasi payment gateway untuk berbagai klien.",
    j3_title: "Software Engineer", j3_loc: "Tangerang Selatan, Remote",
    j3_desc: "Membangun aplikasi web dan mobile enterprise — sales performance monitoring, e-learning, dan manajemen SDM — dengan Laravel, Vue.js, dan Flutter, termasuk rilis penuh ke app store.",
    j4_title: "Web Developer (Magang)",
    j4_desc: "Pengembangan front-end dan back-end aplikasi web klien, plus dukungan pengujian dan rilis.",
    exp_more: "Detail lengkap di LinkedIn",
    s1: "Bahasa Pemrograman", s4: "Database & Cloud", s_cert: "Sertifikasi",
    s_pay: "Integrasi Payment Gateway", s_test: "Automated Testing", s_pentest: "Web Penetration Testing",
    p1: "Layanan notifikasi multi-kanal yang menyatukan beberapa penyedia pesan pihak ketiga di balik satu API.",
    p2_t: "Sistem Informasi Manajemen Sekolah",
    p2: "Platform end-to-end untuk kesiswaan, akademik, keuangan sekolah, dan penerimaan siswa baru.",
    p3_t: "Sistem Manajemen SDM",
    p3: "Platform web dan mobile terintegrasi untuk data karyawan, payroll, dan HR self-service.",
    p4_t: "Sales Activity Performance Monitoring",
    p4: "Pelacakan aktivitas sales lapangan dan analitik performa untuk pelaporan manajemen.",
    p5_t: "Integrasi Pembayaran LinkAja",
    p5: "Integrasi Host-to-Host (H2H) pembayaran LinkAja ke aplikasi klien yang sudah berjalan, memperluas kanal pembayaran yang tersedia.",
    p6_t: "Sistem Informasi Rumah Sakit (SIMRS)",
    p6: "Sistem informasi manajemen rumah sakit dengan sistem antrean pasien terintegrasi, beserta landing page publik rumah sakit.",
    proj_note: "Sebagian besar adalah <em>sistem proprietary</em> yang dibangun untuk perusahaan dan klien, sehingga source code-nya tidak tersedia secara publik.",
    role_label: "Peran",
    contact_big: "Mari bangun sesuatu yang <em>kokoh</em>.",
    contact_blurb: "Terbuka untuk peluang backend engineering dan proyek freelance. Cara tercepat menghubungi saya adalah lewat email."
};

const en = {};
document.querySelectorAll('[data-i18n]').forEach(el => {
    en[el.dataset.i18n] = el.innerHTML;
});

let lang = 'en';
const toggle = document.getElementById('langToggle');
toggle.addEventListener('click', () => {
    lang = lang === 'en' ? 'id' : 'en';
    const dict = lang === 'en' ? en : id;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const t = dict[el.dataset.i18n];
        if (t !== undefined) el.innerHTML = t;
    });
    toggle.innerHTML = lang === 'en' ? '<b>EN</b> / ID' : 'EN / <b>ID</b>';
    document.documentElement.lang = lang;
});
