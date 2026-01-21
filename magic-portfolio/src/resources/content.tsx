import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

// --- DATA PRIBADI ---
const person: Person = {
  firstName: "Helsen",
  lastName: "Khores",
  name: "Helsen Khores Yehuda",
  role: "IT Specialist",
  avatar: "/images/helsen.jpg", 
  email: "imanuelhelsen@gmail.com",
  location: "Asia/Jakarta",
  languages: ["English", "Bahasa Indonesia"],
};

// --- NEWSLETTER ---
const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly updates about IT trends and System Engineering</>,
};

// --- SOSIAL MEDIA ---
const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hellsenkhores/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:imanuelhelsen@gmail.com",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/",
    essential: false,
  },
];

// --- HALAMAN HOME (SUDAH DIPERBARUI) ---
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>IT Infrastructure & Web Developer</>,
  featured: {
    display: false, 
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Latest Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          System Maintenance
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Experienced IT professional with a strong background in <Text as="span" weight="strong">Network Administration, Hardware Maintenance, and ERP Systems</Text>. <br/><br/>
      I combine technical infrastructure knowledge with <Text as="span" weight="strong">Web Application Development</Text> — utilizing <Text as="span" weight="strong">Laravel and Node.js</Text> — to build internal tools that optimize operational efficiency.
    </>
  ),
};

// --- HALAMAN ABOUT ---
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: {
      en: "Professional Summary",
      id: "Ringkasan Profesional"
    } as any,
    description: {
      en: (
        <Text as="div" style={{ textAlign: "justify", textJustify: "inter-word" }}>
          Experienced IT professional with a strong background in <strong style={{ display: "inline" }}>Network Administration, Hardware Maintenance, and ERP Systems</strong>.
          Recently expanded expertise into <strong style={{ display: "inline" }}>Web Application Development</strong>, utilizing <strong style={{ display: "inline" }}>Laravel and Node.js</strong> to build internal tools that optimize operational efficiency.
          <br /><br />
          Proven ability to combine technical infrastructure knowledge with software development to solve complex business problems. Dedicated, disciplined, and eager to leverage full-stack skills in a challenging environment.
        </Text>
      ),
      id: (
        <Text as="div" style={{ textAlign: "justify", textJustify: "inter-word" }}>
          Profesional IT berpengalaman dengan latar belakang yang kuat dalam <strong style={{ display: "inline" }}>Administrasi Jaringan, Pemeliharaan Perangkat Keras, dan Sistem ERP</strong>.
          Baru-baru ini memperluas keahlian ke <strong style={{ display: "inline" }}>Pengembangan Aplikasi Web</strong>, memanfaatkan <strong style={{ display: "inline" }}>Laravel dan Node.js</strong> untuk membangun alat internal yang mengoptimalkan efisiensi operasional.
          <br /><br />
          Memiliki kemampuan terbukti dalam menggabungkan pengetahuan infrastruktur teknis dengan pengembangan perangkat lunak untuk memecahkan masalah bisnis yang kompleks. Berdedikasi, disiplin, dan bersemangat untuk memanfaatkan keterampilan full-stack dalam lingkungan yang menantang.
        </Text>
      )
    } as any,
  },
  work: {
    display: true,
    title: {
      en: "Work Experience",
      id: "Pengalaman Kerja"
    } as any,
    experiences: [
      // --- PENGALAMAN BARU: PT. SINAR MULIA MAKMUR (NEWTON) ---
      {
        company: "PT. Sinar Mulia Makmur (Newton Technologi)",
        timeframe: {
            en: "Sep 2024 - Present", // Saya koreksi tahunnya jadi 2024 sesuai CV
            id: "Sep 2024 - Sekarang"
        } as any,
        role: { en: "IT System Developer & Support (Supervisor)", id: "IT System Developer & Support (Supervisor)" } as any,
        achievements: {
          en: [
            <>Full Stack Web Development: Spearheaded the end-to-end development of internal web applications (Newton Asset, L'senBox, Toner Ordering System) using Laravel to digitize manual processes.</>,
            <>IT Asset Management System: Designed "Newton Asset," a centralized inventory platform with QR Code automation and lifecycle tracking.</>,
            <>HR System Digitalization: Built "L'senBox," a secure online attendance system with real-time digital clock-in/out and performance dashboards.</>,
            <>Database & Server Administration: Managed MySQL database architecture and application deployment, ensuring data integrity and routine backups.</>,
            <>Managed Network Security (Fortinet/Mikrotik) and System Analysis to ensure secure IT environments.</>
          ],
          id: [
            <>Full Stack Web Development: Memimpin pengembangan end-to-end aplikasi web internal (Newton Asset, L'senBox, Sistem Pemesanan Toner) menggunakan Laravel untuk mendigitalkan proses manual.</>,
            <>Sistem Manajemen Aset IT: Merancang "Newton Asset," platform inventaris terpusat dengan otomatisasi Kode QR dan pelacakan siklus hidup aset.</>,
            <>Digitalisasi Sistem HR: Membangun "L'senBox," sistem absensi online aman dengan clock-in/out digital real-time dan dashboard kinerja.</>,
            <>Administrasi Database & Server: Mengelola arsitektur database MySQL dan deployment aplikasi, memastikan integritas data dan backup rutin.</>,
            <>Mengelola Keamanan Jaringan (Fortinet/Mikrotik) dan Analisis Sistem untuk memastikan lingkungan IT yang aman.</>
          ]
        } as any,
        images: [],
      },
      // ---------------------------------------------------------
      {
        company: "PT. IIDA Group Holdings",
        timeframe: "Sep 2024 - Mar 2025",
        role: { en: "IT Specialist", id: "Spesialis IT" } as any,
        achievements: {
          en: [
            <>Managed Fortinet Fortigate Firewall, including backup configurations, NAT setup, and security audits.</>,
            <>Designed the development of the ERP system (Hasmicro) and conducted UAT (User Acceptance Testing).</>,
            <>Maintained hardware/software assets and managed Microsoft 365 OneDrive applications.</>,
            <>Managed corporate website content updates and maintenance using WordPress CMS to ensure security and performance.</>,
          ],
          id: [
            <>Mengelola Firewall Fortinet Fortigate, termasuk konfigurasi backup, pengaturan NAT, dan audit keamanan.</>,
            <>Merancang pengembangan sistem ERP (Hasmicro) dan melakukan UAT (User Acceptance Testing).</>,
            <>Memelihara aset hardware/software dan mengelola aplikasi Microsoft 365 OneDrive.</>,
            <>Mengelola pembaruan konten dan pemeliharaan website perusahaan menggunakan WordPress CMS untuk menjamin keamanan dan performa.</>,
          ]
        } as any,
        images: [],
      },
      {
        company: "PT. Industri Jamu dan Farmasi Sido Muncul, tbk",
        timeframe: "Mar 2014 - Jul 2024",
        role: { en: "IT Support System and Networking", id: "IT Support System dan Networking" } as any,
        achievements: {
          en: [
            <>Diagnosed and repaired hardware issues (RAM, Hard disk, Motherboard) for desktops and laptops.</>,
            <>Managed Mikrotik setup (IP, DHCP, NAT, VPN) and Unifi/Aruba for company networking.</>,
            <>Provided technical support for SAP system users and maintained Moka POS applications.</>,
          ],
          id: [
            <>Mendiagnosa dan memperbaiki masalah perangkat keras (RAM, Hard disk, Motherboard) untuk desktop dan laptop.</>,
            <>Mengelola pengaturan Mikrotik (IP, DHCP, NAT, VPN) dan Unifi/Aruba untuk jaringan perusahaan.</>,
            <>Memberikan dukungan teknis bagi pengguna sistem SAP dan memelihara aplikasi Moka POS.</>,
          ]
        } as any,
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: { en: "Studies", id: "Pendidikan" } as any,
    institutions: [
      {
        name: "Gunadarma University",
        description: {
          en: <>Bachelor of Information System (2009-2013). GPA 3.25.</>,
          id: <>Sarjana Sistem Informasi (2009-2013). IPK 3.25.</>
        } as any,
      },
      {
        name: "SMA Mardi Waluya Bogor",
        description: {
          en: <>Senior High School (2006-2009).</>,
          id: <>Sekolah Menengah Atas (2006-2009).</>
        } as any,
      },
      {
        name: "Kama Konsultan",
        description: {
          en: <>ISO 9001:2015 & ISO 19011:2018 Certification.</>,
          id: <>Sertifikasi ISO 9001:2015 & ISO 19011:2018.</>
        } as any,
      },
    ],
  },
  technical: {
    display: true,
    title: { en: "Technical Skills", id: "Keahlian Teknis" } as any,
    skills: [
      {
        title: { en: "Networking & Security", id: "Jaringan & Keamanan" } as any,
        description: {
          en: <>Expertise in Network Security, Firewall Configuration, and Enterprise Connectivity.</>,
          id: <>Keahlian dalam Keamanan Jaringan, Konfigurasi Firewall, dan Konektivitas Perusahaan.</>
        } as any,
        tags: [
          { name: "Fortinet Security", icon: "fortinet" },
          { name: "Mikrotik Routing", icon: "mikrotik" },
          { name: "Cisco / Aruba", icon: "cisco" },
        ],
        images: [],
      },
      {
        title: { en: "Web & App Development", id: "Pengembangan Web & Aplikasi" } as any,
        description: {
          en: <>Building modern applications using PHP frameworks and JavaScript environments.</>,
          id: <>Membangun aplikasi modern menggunakan framework PHP dan lingkungan JavaScript.</>
        } as any,
        tags: [
          { name: "Laravel (PHP)", icon: "laravel" },
          { name: "Node.js", icon: "nodejs" },
          { name: "MySQL / XAMPP", icon: "database" },
        ],
        images: [],
      },
      {
        title: { en: "IT Support & Systems", id: "IT Support & Sistem" } as any,
        description: {
          en: <>Comprehensive hardware troubleshooting, OS management, and system support.</>,
          id: <>Pemecahan masalah perangkat keras yang komprehensif, manajemen OS, dan dukungan sistem.</>
        } as any,
        tags: [
          { name: "Windows / Linux", icon: "window" },
          { name: "SAP Support", icon: "database" },
          { name: "Hardware Repair", icon: "hardware" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Latest Updates",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Professional projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
        src: "/images/gallery/sample-1.jpg", 
        alt: "Office Setup",
        orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };