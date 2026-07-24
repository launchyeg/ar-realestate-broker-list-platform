const siteConfig = {
  // ── Broker Identity ────────────────────────────────────────
  brokerName: "AR Realestate Redsea",
  brokerTagline: "Curated Homes. Trusted Expertise.",
  brokerLicense: "RE-2024-00123",

  // ── Logo ───────────────────────────────────────────────────
  logo: {
    src: "/images/logo.png",
    alt: "AR Realestate Redsea",
    width: 160,
    height: 40,
    textFallback: "AR Realestate", // shown when src is null
  },

  // ── Contact Details ────────────────────────────────────────
  contact: {
    phone: "+20 106 0630544",
    whatsapp: "+20 103 3709904",
    email: "sales@ar-realestate-redsea.com",
    address: "Floor 3, Building 2, Inter District, Hurghada, Red Sea, Egypt",
    googleMapsUrl: "https://maps.app.goo.gl/TwjiXwdJrjJrsCNN8",
  },

  // ── Social Media ───────────────────────────────────────────
  social: [
    {
      name: "facebook",
      href: "https://www.facebook.com/share/1EqDVfX168/?mibextid=wwXIfr",
      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/a.r_realestate/profilecard/?igsh=MWVjN29kaXgybzZhZA==",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
  ],

  // ── Theme Colors ───────────────────────────────────────────
  // theme: {
  //   primary: "#1B2B3A", // deep navy — main brand color
  //   primaryLight: "#2D4258", // hover states
  //   accent: "#CDAA81", // warm gold — CTAs, highlights
  //   accentLight: "#B49168", // lighter gold for hover
  //   background: "#FAFAF8", // off-white site background
  //   surface: "#f7f6f4", // card/panel surfaces
  //   text: "#0a0915", // primary text
  //   textMuted: "#52525a", // secondary/muted text
  // },

  // ── Typography ─────────────────────────────────────────────
  fonts: {
    display: "Playfair Display SC",
    body: "Inter",
  },

  // ── SEO & Meta ─────────────────────────────────────────────
  seo: {
    siteUrl: "https://prestigeproperties.eg",
    defaultTitle: "Prestige Properties — Curated Homes in Egypt",
    defaultDescription:
      "Browse our hand-picked selection of luxury apartments, villas, and penthouses across New Cairo, Sheikh Zayed, and the North Coast.",
    ogImage: "/og-image.jpg",
    twitterHandle: "@prestigeprops",
  },

  // ── Lead Form ──────────────────────────────────────────────
  leadForm: {
    heading: "Arrange a Viewing",
    subheading: "Our team responds within 2 business hours.",
    ctaLabel: "Send Enquiry",
  },

  // ── Feature Flags ──────────────────────────────────────────
  features: {
    showPrices: true,
    showStatusBadge: true,
    enableWhatsApp: true,
  },

  // ── Destinations / Areas ───────────────────────────────────
  destinations: [
    {
      slug: "el-gouna",
      label: "El Gouna",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAYOFBpATjKIkbknWl4D0Q6-_qqmTLxxzEVeJKEFmaig&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HL9rJ9rfRodXUcwUlE99CuTA2zCVl3s9MvIfztFlyqxLPXHJG6dtTt8&s=10",
      tagline: "A self-contained island town like no other.",
      description:
        "El Gouna is a unique lagoon city built across islands, 22km north of Hurghada. Developed by Orascom, it is entirely self-sustained with its own hospital, airport, international schools, and a vibrant marina — attracting a sophisticated international crowd.",
      stats: [
        { label: "Projects", value: "5" },
        { label: "Years Installment", value: "5" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Unique lagoon and island city layout",
        "Own airstrip, hospital and international school",
        "Active marina and watersports scene",
        "Vibrant nightlife and dining",
        "Premium property values with strong resale",
      ],
      whyInvest:
        "El Gouna consistently commands a price premium over other Red Sea destinations. Its self-contained nature, strong community, and international appeal ensure long-term value retention.",
    },
    {
      slug: "hurghada",
      label: "Hurghada",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/general/sunset-8627419_1280.jpg",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQnWFGGT8BcAiv-G7c05f63cZynGBPqdp93KjcuTXIw&s=10",
      tagline: "Egypt's most connected Red Sea city.",
      description:
        "Hurghada is the beating heart of Egypt's Red Sea Riviera. A full-service city with international airport, world-class hospitals, schools, and a thriving expat community — it offers the perfect balance of resort lifestyle and everyday convenience.",
      stats: [
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "4" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Infinty Pools",
        "Fitness Facilites",
        "24/7 Security",
        "Gourmet Dining",
        "Events",
        "Paking Facilites",
      ],
      whyInvest:
        "Hurghada offers the widest range of property types and price points in Egypt. Its established infrastructure and growing tourism numbers make it a reliable and liquid real estate market.",
    },
    {
      slug: "makadi-heights",
      label: "Makadi Heights",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-7A15v0xHibScfdK7Sme23O468duFZtndn0boDWz4w&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIITg2tOnwdAt0PXox5IpULcJi_AC9OBnW74Q1k2mzCJSWpWO2w47v5g&s=10",
      tagline: "Peaceful bay living with resort-grade amenities.",
      description:
        "Makadi Heights sits 30km south of Hurghada in a protected natural bay. Known for its calm, crystal-clear waters and spectacular coral reefs, it is home to several all-inclusive resorts and a growing residential community seeking tranquility.",
      stats: [
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Commercial Area",
        "Health and Wellness",
        "Green Spaces",
        "Clubhouse",
        "School",
        "Restaurants",
      ],
      whyInvest:
        "Makadi Heights offers excellent value compared to more established destinations, with significant upside as infrastructure continues to develop. Ideal for buyers seeking affordable beachfront entry.",
    },
    {
      slug: "makadina",
      label: "Makadina",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/Screenshot-2026-03-10-131215.png",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCLQRXwSljXbfnwZ1arU00535Fz6LUf71gZ0HIh9BTw&s=10",
      tagline: "A peninsula of pure luxury.",
      description:
        "Makadina features waterfront serviced homes, a wide array of outdoor experiences from various themed swimmable water features and walkable pathways throughout the development, a clubhouse, padel, tennis, football, volley, and basketball courts, bicycle lanes, kids areas to a wellness center and a variety of outdoor parks. It will also feature outdoor communal areas for residents to hangout, a shopping mall and various F&B and retail outlets",
      stats: [
        { label: "Projects", value: "1" },
        { label: "Years Installment", value: "8" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Private beach",
        "Hospitality",
        "Landscapes and walkways",
        "GYM",
        "2 hotels",
        "Security and Services",
      ],
      whyInvest:
        "Developed in line with Travco Properties’ vision for sustainable, self-sufficient communities, Makadina sets a modern benchmark for residential development where comfort, connectivity, and lifestyle come together in one cohesive and evolving destination.",
    },
    {
      slug: "sahl-hasheesh",
      label: "Sahl Hasheesh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jYSIoI1hoGGYbFDVmtTfwyF7DyPlrYU6AzurYmSPnw&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8JyGoDwalPNQfhPhumiTjQvPwwL5xIBKwBJ8DXh9wg&s=10",
      tagline: "Where the Red Sea meets private paradise.",
      description:
        "Sahl Hasheesh is one of Egypt's most exclusive coastal destinations — a master-planned resort town 18km south of Hurghada. Its crescent bay, pristine beaches, and car-free promenade make it a sanctuary for those seeking luxury without compromise.",
      stats: [
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "7" },
        { label: "Downpayment", value: "15%" },
      ],
      highlights: [
        "Private car-free promenade along the beach",
        "World-class diving and snorkeling reefs",
        "5-star hotel and resort facilities",
        "High rental yield investment destination",
        "Gated and secured master-planned community",
      ],
      whyInvest:
        "Sahl Hasheesh has seen consistent price growth year-on-year, driven by international demand and limited supply. Rental yields of 8–12% make it one of Egypt's strongest investment destinations.",
    },
    {
      slug: "soma-bay",
      label: "Soma Bay",
      image:
        "https://new-projects-media.propertyfinder.com/project/a667643d-c0a9-41e8-a19c-7aa14f193a6d/gallery/image/ARtlyP4jv8PRUJ655fuxVxi3Cu9l_ODWonugtCKAegA=/medium.webp",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2N8Pg8VHWQLKbgjOts4eGy8hKrLjYWyg7DpeMJZoZA&s=10",
      tagline: "A peninsula of pure luxury.",
      description:
        "At Somabay, we believe in turning dreams into reality. Our story is one of passion, dedication, and a deep appreciation for the natural beauty that surrounds us. Nestled along Egypt’s Red Sea coastline, Somabay has become synonymous with luxury living and breathtaking landscapes.",
      stats: [
        { label: "Projects", value: "14" },
        { label: "Years Installment", value: "7" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "30 minutes from Hurghada",
        "School",
        "Beach Clubs",
        "Golf Course",
        "Marina and Waterfront Promenade",
        "Kids Play Areas",
      ],
      whyInvest:
        "Soma Bay represents the top end of the Red Sea market. Limited land supply and an ultra-premium resort offering ensure strong capital preservation and appreciation over time.",
    },
    {
      slug: "ras-soma-travco",
      label: "Ras Soma Travco",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/3.png",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBBZHmEhKu5nKZE7zpuFilmPrXbqsfjGxRK0jkCyY1Q&s=10",
      tagline: "A peninsula of pure luxury.",
      description:
        "Nestled on the bay of Ras Abu Soma, Travco Group’s latest destination on the Red Sea is flourishing and ready to be the next flagship town on Egypt’s East Coast. The unique combination of world-class service and years of experience in the hospitality industry, births a one-of-a-kind International residential destination and tourist hot spot, that celebrates nature and all the wonders it has to offer- The Ras Soma resort is primed to become one of the most desirable holiday destinations along the Egyptian Red Sea.",
      stats: [
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "7" },
        { label: "Downpayment", value: "5%" },
      ],
      highlights: [
        "Private beach",
        "Hospitality",
        "Landscapes and walkways",
        "GYM",
        "2 hotels",
        "Security and Services",
      ],
      whyInvest:
        "Located on the Red Sea Coast, Ras Soma is a mere 35-minute drive from Hurghada International Airport. We are also conveniently 60 km from Downtown Hurghada. If you are into roadtrips, we are a scenic 4.5 hr drive from Cairo.",
    },
  ],

  // ── Projects ───────────────────────────────────
  projects: [
    {
      slug: "aden",
      label: "Aden",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBD0AEBCtCNx77KAfrdN1VWvZY4rXgcsixbgoyEEd2Aopn9j1rmIUUzScX&s=10",
      heroImage:
        "https://assets.live.beyond-creation.net/makadi/336021e46700d4efb06a8331167bd19f.jpg",
      destination: "makadi-heights",
      destinationLabel: "Makadi Heights",
      tagline: "Sophisticated coastal living in the heart of Makadi Heights.",
      description:
        "Aden offers an exclusive residential experience located along the stunning Red Sea coastline. Designed with elegance and comfort in mind, every unit provides residents with seamless access to elite resort amenities, breathtaking sea vistas, and a lifestyle defined by serenity and prestige.",
      stats: [
        { label: "Location", value: "Makadi Heights" },
        { label: "Delivery", value: "2027" },
        { label: "Units", value: "1" },
        { label: "Starting Price", value: "EGP 6,500,000" },
      ],
      highlights: [
        "Unobstructed views of the Red Sea coast",
        "Exclusive access to private sandy beaches",
        "World-class clubhouse and infinity pools",
        "Premium finishing with modern aesthetics",
        "Advanced smart-home system integration",
        "Secure gated community with 24/7 support",
      ],
      whyInvest:
        "Aden represents a prime investment opportunity within Sahl Hasheesh's expanding luxury market. Its strategic location, combined with high-end amenities and long-term capital appreciation potential, makes it a premier choice for discerning property investors in Hurghada.",
    },
    {
      slug: "arc-soma",
      label: "Arc Soma",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToQvobqV5xXah8NpWmgWvVRDjC4qrKynjqKlzvTnM_weVNXhOa7oohvA&s=10",
      heroImage:
        "https://somabay.com/wp-content/uploads/arc-8-1-scaled-1-1030x686.jpg",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Modern coastal architecture meets the tranquil Red Sea.",
      description:
        "Arc Soma is a contemporary residential development located in the prestigious Soma Bay area. Designed with clean, artistic lines and an emphasis on open space, the project offers a sophisticated lifestyle where modern design blends perfectly with the natural beauty of the Red Sea shores.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Delivery", value: "2027" },
        { label: "Units", value: "210" },
        { label: "Starting Price", value: "EGP 2,500,000" },
      ],
      highlights: [
        "Architecturally distinct modern design",
        "Panoramic vistas of the Red Sea horizon",
        "Access to world-class Soma Bay golf facilities",
        "Resort-style infinity pools and lounge areas",
        "High-end finishes throughout every unit",
        "Integrated smart residential technology",
      ],
      whyInvest:
        "Investing in Arc Soma provides entry into one of the Red Sea's most exclusive destinations. Its focus on modern design and proximity to premium leisure amenities ensures high appeal for both long-term residents and luxury holiday seekers, driving consistent capital growth.",
    },
    {
      slug: "bay-central",
      label: "Bay Central",
      image:
        "https://relaxredsea.com/wp-content/uploads/2021/07/WhatsApp-Image-2019-12-07-at-13.50.25.jpeg",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvwZnUK5pV0foE0ypY7DVTPTskfwOFQ55quxxOB5sRg&s=10",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Resort living redefined on the Red Sea.",
      description:
        "Veranda is a beachfront resort residential project nestled within the pristine shores of Sahl Hasheesh. Designed for those who refuse to compromise, every unit enjoys direct beach access, resort-grade amenities, and a rental management program that works while you relax.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Delivery", value: "2026" },
        { label: "Units", value: "1" },
        { label: "Starting Price", value: "EGP 11,000,000" },
      ],
      highlights: [
        "Direct private beach access for all units",
        "Fully managed rental program available",
        "Resort pools, spa and fitness facilities",
        "Furnished and unfurnished options",
        "Flexible payment plans up to 8 years",
        "High ROI — avg. 10% annual yield",
      ],
      whyInvest:
        "Veranda sits in one of Egypt's highest-demand tourist zones. Its fully managed rental program means your unit generates income even when you're not there — with historical occupancy rates above 75% year-round.",
    },
    {
      slug: "bay-west-valley",
      label: "Bay West Valley",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUDi32B9drIUcA1p_6Sw1Dufxu0l7IrhsrDoR6tKxxa5vE49kEzhBKBU&s=10",
      heroImage:
        "https://somabay.com/wp-content/uploads/Baywest-2-1-1030x773.png",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Unrivaled luxury nestled in the heart of Soma Bay.",
      description:
        "Bay West Valley offers an exclusive residential escape where modern architecture meets the serene Red Sea landscape, providing residents with privacy, premium amenities, and stunning views.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Exclusive access to private beach clubs",
        "Sophisticated contemporary architecture",
        "Panoramic sea and mountain views",
        "Integrated world-class golf amenities",
        "24/7 high-end security and concierge",
        "Serene eco-friendly landscaping design",
      ],
      whyInvest:
        "Bay West Valley represents a premier investment in one of the Red Sea's most sought-after destinations, ensuring high rental demand and long-term asset appreciation in a secure, master-planned community.",
    },
    {
      slug: "blanca",
      label: "Blanca",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUfKCy1-314yFukBADcKXCWQyE_WIFrz1QOi9XVDIOH1Yk7wYL99d6YE&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgRHJVQ35EK2ogNpvx2bK5yRL5Rjg68HH3TOrDWfTWw&s=10",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Purity and prestige on the Red Sea coast.",
      description:
        "Blanca is a refined residential project characterized by its minimalist aesthetic and seamless connection to the azure waters of Soma Bay, offering a tranquil sanctuary for luxury living.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Prime waterfront location in Soma Bay",
        "Bespoke interior design and high-end finishes",
        "Infinity edge pools overlooking the sea",
        "Access to elite diving and water sports",
        "Private residential lounge and community hub",
        "Sustainable cooling and infrastructure",
      ],
      whyInvest:
        "With its iconic design and strategic position within Soma Bay, Blanca provides a unique opportunity for investors to own a high-yield property in a mature, high-growth luxury destination.",
    },
    {
      slug: "breeze",
      label: "Breeze",
      image:
        "https://somabay.com/wp-content/uploads/Somabreeze-1-1-1-495x400.png",
      heroImage:
        "https://somabay.com/wp-content/uploads/Sombreeze-3-1030x579.jpeg",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Where the sea breeze meets refined living.",
      description:
        "Breeze captures the essence of coastal relaxation with spacious units designed for light, air, and comfort, situated in the vibrant and established community of Soma Bay.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Spacious open-plan living arrangements",
        "Expansive balconies with coastal views",
        "Direct walking paths to sandy beaches",
        "Proximity to marina and retail zones",
        "Family-oriented resort infrastructure",
        "Professional property management services",
      ],
      whyInvest:
        "Breeze offers an exceptional balance of lifestyle and investment potential, catering to the growing market of vacation home seekers who value both natural beauty and world-class resort facilities.",
    },
    {
      slug: "cala",
      label: "Cala",
      image:
        "https://tjwcefkkahkcxwljdbky.supabase.co/storage/v1/object/public/property-images/properties/1784212366372-wz5eiv74lbh.jpg",
      heroImage:
        "https://thehorizonrealestate.com/wp-content/uploads/2025/01/Cala-sahl-hasheesh-exterior-1.jpeg",
      destination: "sahl-hasheesh",
      destinationLabel: "Sahl Hasheesh",
      tagline: "Your private gateway to Sahl Hasheesh.",
      description:
        "Cala defines elegance with its Mediterranean-inspired architecture, offering residents a secluded living experience surrounded by the crystal-clear waters and white sands of Sahl Hasheesh.",
      stats: [
        { label: "Location", value: "Sahl Hasheesh" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Mediterranean-themed waterfront aesthetics",
        "Private beach accessibility for residents",
        "Proximity to the Sahl Hasheesh Old Town",
        "World-class swimming and fitness centers",
        "Quiet, lush, and landscaped surroundings",
        "Advanced gated security systems",
      ],
      whyInvest:
        "Cala is situated in Sahl Hasheesh's premium residential core, providing investors with a stable, high-demand asset that benefits from the area's reputation as a top-tier luxury tourism hotspot.",
    },
    {
      slug: "coves",
      label: "Coves",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSm5TxQGa3el6GIoydd2Gmr3kPb8DXs48Uw9tiXA5LqamZfMckZkjg50&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DT9Um9Bi-s_5IVlKGv9P3aJ_9WPdV2Ob1OTGBppTTA&s=10",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Hidden luxury along the pristine Red Sea.",
      description:
        "Coves is an exclusive enclave featuring intimate residential clusters designed to offer absolute privacy, set against the dramatic backdrop of the rugged Soma Bay coastline.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Intimate and private residential clusters",
        "Dramatic coastal and reef vistas",
        "Exclusive clubhouse and swimming lagoon",
        "High-end smart home infrastructure",
        "Pedestrian-friendly green pathways",
        "Unmatched peace and seclusion",
      ],
      whyInvest:
        "Coves targets the ultra-premium niche, offering scarcity and exclusivity in a prime location. This makes it a highly desirable asset for long-term holders seeking significant capital appreciation.",
    },
    {
      slug: "dua",
      label: "DUA",
      image:
        "https://s3.eu-central-1.amazonaws.com/prod.images.cooingestate.com/admin/inventory/brochure_images/Orascom%20Development%20Egypt/dua/a/a.png",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Fqpqw5kYwwNEUYnDPtfoTAjcuaHLOpLBy4RprtOLg9E0EePSw6hnBZZj&s=10",
      destination: "makadi-heights",
      destinationLabel: "Makadi Heights",
      tagline: "Serene architectural harmony in Makadi Heights.",
      description:
        "DUA offers a refined residential experience where clean design meets the tranquil nature of Makadi Heights, providing a sophisticated atmosphere for those seeking peace and modern comfort.",
      stats: [
        { label: "Location", value: "Makadi Heights" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Modern minimalist architectural design",
        "Prime access to Makadi Heights beaches",
        "Serene landscaped community gardens",
        "High-end clubhouse and leisure facilities",
        "Proximity to premier diving spots",
        "Secure gated community environment",
      ],
      whyInvest:
        "DUA provides a unique entry point into the established Makadi Heights luxury market, offering high potential for both rental yields and property value appreciation due to its focus on design and location.",
    },
    {
      slug: "golftown",
      label: "Golftown",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEmMgi_uie8ZKoccsmApBC0N7Ypt3xPAo58Qs3j1tILUbEkPYN6-2G3d6&s=10",
      heroImage: "https://roi-eg.b-cdn.net//photos/projects/1_a67cf_lg.webp",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Golf-front living in the heart of Soma Bay.",
      description:
        "Golftown is a premier residential destination perfectly positioned along the championship golf courses of Soma Bay, offering an active, luxury lifestyle for golf enthusiasts and families alike.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Direct views of championship golf courses",
        "Access to world-class sporting facilities",
        "Sophisticated clubhouse and dining options",
        "Spacious units with modern interiors",
        "Vibrant community atmosphere",
        "Proximity to marina and beach clubs",
      ],
      whyInvest:
        "Golftown leverages the high demand for sports-integrated luxury living in Soma Bay, making it an excellent investment for long-term rental income and consistent capital growth.",
    },
    {
      slug: "il-bayou",
      label: "Il Bayou",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIvMvkxLVBjsBc8PXPsC-UEF1TGcPRDbiTbANu14jPm3z4Ivaa5-fAQ819&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8MhJk6nFbKMB3p7vPBbSqRM5xXwjLXk9gXPKEsNzyqUJi_jUrZbW3ncx&s=10",
      destination: "sahl-hasheesh",
      destinationLabel: "Sahl Hasheesh",
      tagline: "Unmatched coastal elegance in Sahl Hasheesh.",
      description:
        "Il Bayou brings a boutique residential feel to Sahl Hasheesh, emphasizing privacy, lush greenery, and architectural excellence in a world-class tourism destination.",
      stats: [
        { label: "Location", value: "Sahl Hasheesh" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Boutique residential community design",
        "Lush, expansive greenery and gardens",
        "Proximity to Sahl Hasheesh's white sands",
        "Privacy-focused site planning",
        "High-end community amenities",
        "Modern and sustainable infrastructure",
      ],
      whyInvest:
        "Il Bayou serves as a prestigious address in Sahl Hasheesh, offering investors a rare blend of boutique exclusivity and the stability of a high-growth, high-demand coastal location.",
    },
    {
      slug: "majra",
      label: "Majra",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7G-CB7ldbPA15ByyCnUauLug5udiBD-_qiJmvfxSOV-A4mu84aESggHyK&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMWdQ1YBnrFOYQXQm4WHG0iFM3Ltps1H6vkhSou6CDEaa_odR1yb0J3c&s=10",
      destination: "hurghada",
      destinationLabel: "Hurghada",
      tagline: "Dynamic urban-resort living in Hurghada.",
      description:
        "Majra integrates the vibrancy of city living with resort-style relaxation, providing residents with modern residences in the thriving coastal hub of Hurghada.",
      stats: [
        { label: "Location", value: "Hurghada" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Central location near Hurghada attractions",
        "Dynamic urban-resort lifestyle",
        "Modern residential unit designs",
        "Integrated retail and entertainment zones",
        "Convenient access to the city's marina",
        "Excellent investment for seasonal rentals",
      ],
      whyInvest:
        "Majra capitalizes on Hurghada’s year-round popularity, providing investors with a versatile asset that is perfect for short-term vacation rentals and long-term capital appreciation.",
    },
    {
      slug: "makadi-heights",
      label: "Makadi Heights",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Bj3QO2FS69Ar_HXaUg0DV8Qdty24A8wIUljR8CW_DQwB03UF_tpWRIQ&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarr6RYQCLrjbF6GGy87iz5X2_ayQdQfxS_AjqYic_aQ&s",
      destination: "makadi-heights",
      destinationLabel: "Makadi Heights",
      tagline: "Elevation, sun, and sea in Makadi Heights.",
      description:
        "Makadi Heights is an integrated community built on elevated ground, offering panoramic views, diverse activities, and a self-sufficient lifestyle in the heart of Makadi Heights.",
      stats: [
        { label: "Location", value: "Makadi Heights" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Elevated site with panoramic views",
        "Fully integrated community services",
        "Wide range of recreational amenities",
        "Extensive parks and pedestrian paths",
        "Convenient access to private beach clubs",
        "Family-centric resort environment",
      ],
      whyInvest:
        "Makadi Heights is a proven, highly sought-after community that offers consistent rental demand and strong property value, making it an ideal choice for stable, long-term real estate investment.",
    },
    {
      slug: "makadina",
      label: "Makadina",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6EGYseL7jKSgOc6cVWVdJ43rd7Rntf4Tnfg6SXicrw&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV94gD7QQO6kx43ml1QosyVdvyfqahdXxS6cCnikZvcEjyuNnJ0GeErAYb&s=10",
      destination: "makadina",
      destinationLabel: "Makadina",
      tagline: "Boutique coastal living in Makadi Heights.",
      description:
        "Makadina offers a curated residential experience in Makadi Heights, blending comfortable, modern units with access to all the recreational and leisure benefits of this renowned Red Sea destination.",
      stats: [
        { label: "Location", value: "Makadina" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Boutique residential community",
        "Easy access to Makadi Bay’s marina",
        "Modern interiors and efficient layouts",
        "Proximity to high-end resort amenities",
        "Beautifully landscaped surroundings",
        "Strong demand for vacation rentals",
      ],
      whyInvest:
        "Makadina provides an excellent balance of affordability and luxury lifestyle, attracting a wide range of investors looking for steady returns in one of the Red Sea's most established tourist zones.",
    },
    {
      slug: "mesca",
      label: "Mesca",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4VoWuHGPAGkTG31CrngDAVaXs0m2QN2k7zkanGsNYQ&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTGmOL44LjSrV-VIC52kZwEe9ZejHJXcDSixz3axG9_zLUWyN8qD1UmXg&s=10",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Architectural purity on the Soma Bay shore.",
      description:
        "Mesca is a signature project in Soma Bay, known for its bold design, private beach access, and dedication to creating an ultra-premium lifestyle on the serene Red Sea coastline.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Projects", value: "3" },
        { label: "Years Installment", value: "6" },
        { label: "Downpayment", value: "10%" },
      ],
      highlights: [
        "Iconic modern design and architecture",
        "Exclusive private beach and marina access",
        "Bespoke residential villa and apartment mix",
        "High-end resort and spa amenities",
        "Panoramic views of the Red Sea",
        "Ultra-premium community standards",
      ],
      whyInvest:
        "As a signature development, Mesca offers significant status and capital appreciation potential, making it the top choice for discerning investors seeking premium real estate in Soma Bay.",
    },
    {
      slug: "miramar-residences",
      label: "Miramar Residences",
      image: "https://cms.elgouna.com/api/media/file/1707133518-a15659e4.webp",
      heroImage:
        "https://beeyoot.b-cdn.net/photos/projects/Miramar%20residence%20El%20gouna%20750%208_495ea_lg.webp",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "Architectural elegance on the El Gouna lagoons.",
      description:
        "A tranquil neighborhood of four exclusive buildings, offering studio, apartment, and penthouse living with direct access to Sheraton Miramar amenities.",
      stats: [
        { label: "Location", value: "El Gouna" },
        { label: "Developer", value: "Orascom" },
        { label: "Lifestyle", value: "Lagoonfront" },
        { label: "Unit Types", value: "Studios, Apts, PH" },
      ],
      highlights: [
        "Access to Sheraton Miramar hotel facilities",
        "Prime location near Abu Tig Marina",
        "Units with private gardens or pontoons",
        "Stunning views of sparkling lagoons",
        "Full concierge and housekeeping services",
        "Infinity pool for residents only",
      ],
      whyInvest:
        "As a prestigious neighborhood by Orascom, it offers high-end luxury appeal and proximity to the most popular hubs in El Gouna, ensuring consistent value.",
    },
    {
      slug: "nautilus",
      label: "Nautilus",
      image: "https://somabay.com/wp-content/uploads/NAUTILUS-pic8-495x400.jpg",
      heroImage:
        "https://somabay-homes.com/wp-content/uploads/2025/02/nautilus-somabay57-1170x785.jpg?83e451&83e451",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Premium peninsula living in Soma Bay.",
      description:
        "A sophisticated residential neighborhood featuring signature villas designed for seamless indoor-outdoor living along the private Soma Bay peninsula.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Price", value: "From EGP 77M" },
        { label: "Unit Types", value: "Villas" },
        { label: "Developer", value: "Soma Bay Real Estate" },
      ],
      highlights: [
        "Exclusive peninsula location",
        "Private beach access with day beds",
        "Signature and Prime villa layouts",
        "Access to The Social Lab hub",
        "On-site retail, dining, and clinics",
        "Modern floor-to-ceiling sea views",
      ],
      whyInvest:
        "Nautilus represents the peak of luxury in Soma Bay, offering scarcity and high-end demand for those seeking the ultimate Red Sea lifestyle.",
    },
    {
      slug: "ras-soma-travco",
      label: "Ras Soma Travco",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMv0l8vlNpEna97xXOUp-qrm3V7bxiZ7TXJ9NoMzRstw&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGuK1y4_ueHBu69ugY4V1BvmfNQeaDPCjkNFRC7e1r_bHXhxEo0K58L0B&s=10",
      destination: "ras-soma-travco",
      destinationLabel: "Ras Soma Travco",
      tagline: "Sustainable luxury on the Red Sea coast.",
      description:
        "A vast 600-acre development prioritizing nature, where 80% of the land is preserved for greenery and open space to ensure a serene environment.",
      stats: [
        { label: "Location", value: "Ras Soma Travco" },
        { label: "Down Payment", value: "10%" },
        { label: "Installments", value: "6 Years" },
        { label: "Delivery", value: "2027-2029" },
      ],
      highlights: [
        "Only 20% building density",
        "Diverse units from 70m2 apartments",
        "High-end clubhouse and cultural zones",
        "Accessible 6-year payment plans",
        "Smart spatial planning for privacy",
        "Prime coastal waterfront location",
      ],
      whyInvest:
        "The low building density and massive land footprint make this a rare sustainable investment opportunity with strong long-term growth potential.",
    },
    {
      slug: "reeftown",
      label: "Reeftown",
      image: "https://somabay.com/wp-content/uploads/Reef-Town-1-710x375.webp",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9eMJoSq4h-x92ftp8XvO_KAfBFMJvL82QczGn-4Ylw&s=10",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Turnkey comfort in Soma Bay.",
      description:
        "A well-established residential enclave within Soma Bay, featuring 52 buildings designed for efficient, turnkey resort living.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Total Units", value: "300 Keys" },
        { label: "Status", value: "Ready" },
        { label: "Developer", value: "Soma Bay" },
      ],
      highlights: [
        "Turnkey project with 300 units",
        "Efficient residential building design",
        "Access to all Soma Bay amenities",
        "Prime coastal community setting",
        "Proven infrastructure standards",
        "Ideal for immediate rental income",
      ],
      whyInvest:
        "Reeftown offers stability and immediate utility, making it an excellent choice for investors looking to generate rental income without waiting for construction.",
    },
    {
      slug: "shedwan",
      label: "Shedwan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsPHhZfrZJyAUO7WeXy-KkarP7YRYorlWjbnP1qcGuw&s=10",
      heroImage:
        "https://elgounahomes.com/wp-content/uploads/2022/02/Screenshot-2024-09-18-at-10-26-30-Shedwan-Brochure_TypeABC-Final-Digital-Medium-Res.pdf.png",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "Lakefront tranquility in El Gouna.",
      description:
        "A 419,000 sqm development centered around a 125,000 sqm lake, offering a high-end active lifestyle with extensive green corridors.",
      stats: [
        { label: "Location", value: "El Gouna" },
        { label: "Unit Types", value: "1-2 BR Apts" },
        { label: "Area", value: "From 74m2" },
        { label: "Lifestyle", value: "Active/Green" },
      ],
      highlights: [
        "Lakefront views for every unit",
        "3.1 km cycling track and jogging lanes",
        "Outdoor gym and yoga spaces",
        "22,000 sqm landscaped park",
        "Dog park and family amenities",
        "Fully finished modern interiors",
      ],
      whyInvest:
        "Shedwan’s focus on outdoor wellness and lakefront living makes it highly desirable for both families and short-term vacationers.",
    },
    {
      slug: "the-nines",
      label: "The Nines",
      image:
        "https://new-projects-media.propertyfinder.com/project/4b48b7da-0ae7-411b-b1cc-edd60d53b1fd/gallery/image/jiYimnTWIFaxYJy81AcXh-D4SFPuzLxnLeTTd4fqpP0=/medium.webp",
      heroImage: "https://devodirect.com/wp-content/uploads/2025/10/12.png",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "Nature-inspired luxury golf living.",
      description:
        "Spanning 87,000 sqm, this exclusive neighborhood features units spaced 12 meters apart for privacy, with sweeping views of the Ancient Hills Golf Course.",
      stats: [
        { label: "Location", value: "El Gouna" },
        { label: "Developer", value: "Orascom" },
        { label: "Views", value: "Golf Course" },
        { label: "Unit Types", value: "Villas, Twin/Town" },
      ],
      highlights: [
        "12-meter distance between properties",
        "Views of Ancient Hills Golf Course",
        "Desert-inspired modern finishes",
        "Integrated private water features",
        "Gated community security",
        "Near major El Gouna educational hubs",
      ],
      whyInvest:
        "The unique emphasis on privacy and golf course frontage positions The Nines as a premium, low-density asset in the El Gouna market.",
    },
    {
      slug: "the-view-residence",
      label: "The View Residence",
      image:
        "https://aqarproperty.com/wp-content/uploads/2025/08/The-View-Hurghada-residence-5-1170x700.webp",
      heroImage:
        "https://aqarproperty.com/wp-content/uploads/2025/08/The-View-Hurghada-residence-1.webp",
      destination: "hurghada",
      destinationLabel: "Hurghada",
      tagline: "Panoramic sea views in Hurghada.",
      description:
        "A luxury resort residential project featuring 150 apartments with 360-degree views, blending urban and oriental architecture.",
      stats: [
        { label: "Location", value: "Hurghada" },
        { label: "Down Payment", value: "30%" },
        { label: "Installments", value: "4 Years" },
        { label: "Unit Range", value: "84-873m2" },
      ],
      highlights: [
        "90% of units feature sea views",
        "Private beach and beach bar",
        "Serviced hotel suites available",
        "Eco-friendly waste and EV charging",
        "On-site clubhouse and gym",
        "Handicap accessible infrastructure",
      ],
      whyInvest:
        "The massive range of unit sizes and hotel-serviced model make it an excellent choice for diverse investment strategies in central Hurghada.",
    },
    {
      slug: "town-walk",
      label: "Town Walk",
      image:
        "https://assets.live.beyond-creation.net/makadi/7afe478682166ba4f401dbb24c666909.jpg",
      heroImage:
        "https://assets.live.beyond-creation.net/makadi/a53ff134f5dd79c77ae7fdb322b6b095.jpg",
      destination: "makadi-heights",
      destinationLabel: "Makadi Heights",
      tagline: "Vibrant living at Makadi Heights.",
      description:
        "A diverse residential phase within the Makadi Heights community, offering apartments, duplexes, and townhouses with modern architectural layouts.",
      stats: [
        { label: "Location", value: "Makadi Heights" },
        { label: "Starting Price", value: "EGP 8.5M" },
        { label: "Unit Types", value: "Apts, Town, Duplex" },
        { label: "Phase", value: "Makadi Heights" },
      ],
      highlights: [
        "Variety of unit sizes (79-152m2)",
        "Integrated community facilities",
        "Modern penthouses with terraces",
        "Access to Makadi Heights amenities",
        "Family-friendly environment",
        "Strong established developer",
      ],
      whyInvest:
        "Being part of the massive, successful Makadi Heights community guarantees high rental demand and ongoing infrastructure support.",
    },
    {
      slug: "tuban",
      label: "Tuban",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYINmZv4sj09BN-ZyNWyVsocCHSwTrMU_Yl59fQnjdAFbL_ikOS_z3MBo&s=10",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGlpRou0YaEMnc_9xGOI1V3DriVolizj3awVVxbcMvc0XK-qOmP7uw06T&s=10",
      destination: "el-gouna",
      destinationLabel: "El Gouna",
      tagline: "The largest district in El Gouna.",
      description:
        "Launched in 2024, this 1,000,000 sqm district features signature cascading waterfalls along its central waterway and a mix of premium residences.",
      stats: [
        { label: "Location", value: "El Gouna" },
        { label: "Down Payment", value: "15%" },
        { label: "Installments", value: "5 Years" },
        { label: "Delivery", value: "2027" },
      ],
      highlights: [
        "Unique central cascading waterfalls",
        "Largest district in El Gouna",
        "Waterfront promenade and boat docks",
        "Boutique hotel and luxury senior living",
        "Fully finished with AC and cabinetry",
        "Quarterly installments over 5 years",
      ],
      whyInvest:
        "As the newest and largest flagship district in El Gouna, Tuban offers the best potential for early-stage capital appreciation.",
    },
    {
      slug: "veranda",
      label: "Veranda",
      image:
        "https://veranda.selena-development.com/wp-content/uploads/2024/06/Group-1-1024x683.jpg",
      heroImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
      destination: "sahl-hasheesh",
      destinationLabel: "Sahl Hasheesh",
      tagline: "Beachfront resort living.",
      description:
        "A premier beachfront residential project in Sahl Hasheesh designed for those who value privacy, resort-grade amenities, and high rental yield potential.",
      stats: [
        { label: "Location", value: "Sahl Hasheesh" },
        { label: "Delivery", value: "2026" },
        { label: "ROI", value: "10% Avg." },
        { label: "Units", value: "320" },
      ],
      highlights: [
        "Direct private beach access",
        "Fully managed rental program",
        "Resort pools, spa, and fitness",
        "Furnished options available",
        "Flexible payment plans (8 years)",
        "High historical occupancy (75%)",
      ],
      whyInvest:
        "Veranda’s proven rental program and beachfront location make it an ideal set-it-and-forget-it investment for income-focused buyers.",
    },
    {
      slug: "wadi-soma",
      label: "Wadi Soma",
      image: "https://somabay.com/wp-content/uploads/Wadi-Soma-1-1-495x400.jpg",
      heroImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1W9xXNqeOrtUGuzWXbQq2FGWt3SEUHws0sPCpDCqWZOYNBtzRen-DjQ&s=10",
      destination: "soma-bay",
      destinationLabel: "Soma Bay",
      tagline: "Refined coastal villas and lodges.",
      description:
        "An exclusive community in Soma Bay featuring a curated collection of sea-view villas, duplexes, and lodges with refined architecture.",
      stats: [
        { label: "Location", value: "Soma Bay" },
        { label: "Unit Types", value: "Villas, Duplexes" },
        { label: "Views", value: "Panoramic Sea" },
        { label: "Developer", value: "Soma Bay" },
      ],
      highlights: [
        "Sea-front cliff villas available",
        "Exclusive residential community",
        "Direct beach access",
        "Close proximity to Soma Bay activities",
        "Varied lodge and villa sizes",
        "Elegant, tranquil design aesthetic",
      ],
      whyInvest:
        "Wadi Soma targets the luxury segment of the Soma Bay market, offering high-status coastal properties with strong resale value.",
    },
  ],
};

module.exports = siteConfig;
