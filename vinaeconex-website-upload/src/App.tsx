import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { CSSProperties, FormEvent, useEffect, useState } from 'react';

type Product = {
  title: string;
  slug: string;
  image: string;
  description: string;
  detailImages: string[];
};

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Product', href: '#products', hasDropdown: true },
  { label: 'Factory', href: '#factory' },
  { label: 'Customer', href: '#customers' },
  { label: 'Contact', href: '#contact' },
] as const;

const heroUsps = ['Flexible MOQ', 'Fast Sampling (7-15 Days)', 'Factory-Direct Pricing'];
const formspreeEndpoint = 'https://formspree.io/f/xbdvveng';

const callContacts = [
  {
    name: 'Tom Pham',
    fullName: 'Pham Van Tai',
    role: 'CEO & Founder',
    phone: '0353.907.245',
    tel: '0353907245',
  },
  {
    name: 'Mr. Ethan Nguyen',
    fullName: 'Nguyen Hoang Qui',
    role: 'Production Director',
    phone: '0963.645.718',
    tel: '0963645718',
  },
  {
    name: 'Chloe Nguyen',
    fullName: 'Nguyen Phuong Trinh',
    role: 'Sale Manager',
    phone: '0986.864.033',
    tel: '0986864033',
  },
];

const whyItems = [
  {
    title: 'Factory-direct manufacturing',
    text: 'Competitive pricing with reliable production.',
  },
  {
    title: 'OEM & ODM Solutions',
    text: 'Custom apparel tailored to your brand.',
  },
  {
    title: 'Flexible MOQ',
    text: 'Flexible MOQ for both small and large orders across custom apparel programs.',
  },
  {
    title: 'Fast Sampling',
    text: 'Quick sample turnaround.',
  },
  {
    title: 'Quality Control',
    text: 'Inspected at every stage.',
  },
  {
    title: 'Global Export',
    text: 'Competitive factory-direct pricing and efficient worldwide shipping via Cat Lai Port.',
  },
];

const services = [
  {
    title: 'Design & Product Development',
    text: 'Turning brand ideas into approved samples and scalable apparel production.',
    image: '/assets/services-figma/design-product.webp',
  },
  {
    title: 'Sample Development',
    text: 'Sample support for fit, materials, trims, branding, and approval before production.',
    image: '/assets/services-figma/sample-development.webp',
  },
  {
    title: 'OEM Manufacturing',
    text: 'Manufacturing based on your designs, specifications, and private label requirements.',
    image: '/assets/services-figma/oem-manufacturing.webp',
  },
  {
    title: 'Quality Control & Packaging',
    text: 'Inspection, finishing, packing, and shipment preparation for production orders.',
    image: '/assets/services-figma/quality-packaging.webp',
  },
];

const products: Product[] = [
  {
    title: 'Polo Shirts',
    slug: 'polo-shirts',
    image: '/assets/product-range/polo-shirts.webp',
    description: 'Custom polo shirt manufacturing with flexible fabrics, trims, embroidery, printing, and private-label finishing.',
    detailImages: [
      '/assets/product-details/polo-shirts/01.webp',
      '/assets/product-details/polo-shirts/02.webp',
      '/assets/product-details/polo-shirts/03.webp',
      '/assets/product-details/polo-shirts/04.webp',
      '/assets/product-details/polo-shirts/05.webp',
      '/assets/product-details/polo-shirts/06.webp',
      '/assets/product-details/polo-shirts/07.webp',
      '/assets/product-details/polo-shirts/08.webp',
      '/assets/product-details/polo-shirts/09.webp',
      '/assets/product-details/polo-shirts/10.webp',
      '/assets/product-details/polo-shirts/11.webp',
      '/assets/product-details/polo-shirts/12.webp',
      '/assets/product-details/polo-shirts/13.webp',
      '/assets/product-details/polo-shirts/14.webp',
      '/assets/product-details/polo-shirts/15.webp',
      '/assets/product-details/polo-shirts/16.webp',
    ],
  },
  {
    title: 'T-Shirts',
    slug: 't-shirts',
    image: '/assets/product-range/t-shirts.webp',
    description: 'OEM and ODM T-shirt production for promotional, retail, uniform, and lifestyle apparel programs.',
    detailImages: [
      '/assets/product-details/t-shirts/01.webp',
      '/assets/product-details/t-shirts/02.webp',
      '/assets/product-details/t-shirts/03.webp',
      '/assets/product-details/t-shirts/04.webp',
      '/assets/product-details/t-shirts/05.webp',
      '/assets/product-details/t-shirts/06.webp',
      '/assets/product-details/t-shirts/07.webp',
      '/assets/product-details/t-shirts/08.webp',
      '/assets/product-details/t-shirts/09.webp',
      '/assets/product-details/t-shirts/10.webp',
      '/assets/product-details/t-shirts/11.webp',
      '/assets/product-details/t-shirts/12.webp',
      '/assets/product-details/t-shirts/13.webp',
      '/assets/product-details/t-shirts/14.webp',
      '/assets/product-details/t-shirts/15.webp',
      '/assets/product-details/t-shirts/16.webp',
      '/assets/product-details/t-shirts/17.webp',
      '/assets/product-details/t-shirts/18.webp',
      '/assets/product-details/t-shirts/19.webp',
      '/assets/product-details/t-shirts/20.webp',
      '/assets/product-details/t-shirts/21.webp',
      '/assets/product-details/t-shirts/22.webp',
      '/assets/product-details/t-shirts/23.webp',
    ],
  },
  {
    title: 'Sportswear',
    slug: 'sportswear',
    image: '/assets/product-range/sportswear.webp',
    description: 'Performance sportswear development focused on fit, movement, sublimation, and repeat production quality.',
    detailImages: [
      '/assets/product-details/sportswear/01.webp',
      '/assets/product-details/sportswear/02.webp',
      '/assets/product-details/sportswear/03.webp',
      '/assets/product-details/sportswear/04.webp',
      '/assets/product-details/sportswear/05.webp',
      '/assets/product-details/sportswear/06.webp',
      '/assets/product-details/sportswear/07.webp',
      '/assets/product-details/sportswear/08.webp',
      '/assets/product-details/sportswear/09.webp',
      '/assets/product-details/sportswear/10.webp',
      '/assets/product-details/sportswear/11.webp',
      '/assets/product-details/sportswear/12.webp',
      '/assets/product-details/sportswear/13.webp',
      '/assets/product-details/sportswear/14.webp',
      '/assets/product-details/sportswear/15.webp',
      '/assets/product-details/sportswear/16.webp',
      '/assets/product-details/sportswear/17.webp',
      '/assets/product-details/sportswear/18.webp',
      '/assets/product-details/sportswear/19.webp',
      '/assets/product-details/sportswear/20.webp',
      '/assets/product-details/sportswear/21.webp',
      '/assets/product-details/sportswear/22.webp',
      '/assets/product-details/sportswear/23.webp',
      '/assets/product-details/sportswear/24.webp',
      '/assets/product-details/sportswear/25.webp',
    ],
  },
  {
    title: 'Workwear',
    slug: 'workwear',
    image: '/assets/product-range/workwear.webp',
    description: 'Durable workwear manufacturing with practical pocketing, reinforced seams, branding, and sizing support.',
    detailImages: [
      '/assets/product-details/workwear/01.webp',
      '/assets/product-details/workwear/02.webp',
      '/assets/product-details/workwear/03.webp',
      '/assets/product-details/workwear/04.webp',
      '/assets/product-details/workwear/05.webp',
      '/assets/product-details/workwear/06.webp',
      '/assets/product-details/workwear/07.webp',
      '/assets/product-details/workwear/08.webp',
      '/assets/product-details/workwear/09.webp',
    ],
  },
  {
    title: 'School Uniforms',
    slug: 'school-uniforms',
    image: '/assets/product-range/school-uniforms.webp',
    description: 'School uniform programs built for consistency across multiple grades, sizes, colors, and reorder cycles.',
    detailImages: [
      '/assets/product-details/school-uniforms/01.webp',
      '/assets/product-details/school-uniforms/02.webp',
      '/assets/product-details/school-uniforms/03.webp',
      '/assets/product-details/school-uniforms/04.webp',
      '/assets/product-details/school-uniforms/05.webp',
      '/assets/product-details/school-uniforms/06.webp',
      '/assets/product-details/school-uniforms/07.webp',
      '/assets/product-details/school-uniforms/08.webp',
      '/assets/product-details/school-uniforms/09.webp',
      '/assets/product-details/school-uniforms/10.webp',
      '/assets/product-details/school-uniforms/11.webp',
      '/assets/product-details/school-uniforms/12.webp',
      '/assets/product-details/school-uniforms/13.webp',
    ],
  },
  {
    title: 'Medical Uniforms',
    slug: 'medical-uniforms',
    image: '/assets/product-range/medical-uniforms.webp',
    description: 'Medical uniform production with clean finishing, comfort-driven fabrics, and stable color matching.',
    detailImages: [
      '/assets/product-details/medical-uniforms/01.webp',
      '/assets/product-details/medical-uniforms/02.webp',
      '/assets/product-details/medical-uniforms/03.webp',
    ],
  },
  {
    title: 'Vests',
    slug: 'vests',
    image: '/assets/product-range/vests.webp',
    description: 'Custom vests for corporate, promotional, uniform, and event use with practical branding options.',
    detailImages: [
      '/assets/product-details/vests/01.webp',
      '/assets/product-details/vests/02.webp',
      '/assets/product-details/vests/03.webp',
      '/assets/product-details/vests/04.webp',
      '/assets/product-details/vests/05.webp',
      '/assets/product-details/vests/06.webp',
      '/assets/product-details/vests/07.webp',
    ],
  },
  {
    title: 'Hoodies & Sweatshirts',
    slug: 'hoodies-sweatshirts',
    image: '/assets/product-range/hoodies-sweatshirts.webp',
    description: 'Fleece and knit hoodie production with embroidery, screen print, applique, and private-label details.',
    detailImages: [
      '/assets/product-details/hoodies-sweatshirts/01.webp',
      '/assets/product-details/hoodies-sweatshirts/02.webp',
      '/assets/product-details/hoodies-sweatshirts/03.webp',
      '/assets/product-details/hoodies-sweatshirts/04.webp',
      '/assets/product-details/hoodies-sweatshirts/05.webp',
      '/assets/product-details/hoodies-sweatshirts/06.webp',
      '/assets/product-details/hoodies-sweatshirts/07.webp',
      '/assets/product-details/hoodies-sweatshirts/08.webp',
      '/assets/product-details/hoodies-sweatshirts/09.webp',
      '/assets/product-details/hoodies-sweatshirts/10.webp',
      '/assets/product-details/hoodies-sweatshirts/11.webp',
      '/assets/product-details/hoodies-sweatshirts/12.webp',
      '/assets/product-details/hoodies-sweatshirts/13.webp',
    ],
  },
  {
    title: 'Bags',
    slug: 'bags',
    image: '/assets/product-range/bags.webp',
    description: 'Promotional and utility bag manufacturing tailored to brand usage, packaging, and material requirements.',
    detailImages: [
      '/assets/product-details/bags/01.webp',
      '/assets/product-details/bags/02.webp',
      '/assets/product-details/bags/03.webp',
      '/assets/product-details/bags/04.webp',
      '/assets/product-details/bags/05.webp',
      '/assets/product-details/bags/06.webp',
      '/assets/product-details/bags/07.webp',
      '/assets/product-details/bags/08.webp',
    ],
  },
  {
    title: 'Headwear',
    slug: 'headwear',
    image: '/assets/product-range/headwear.webp',
    description: 'Caps and headwear made with structured panels, embroidery placements, and adjustable finishing options.',
    detailImages: [
      '/assets/product-details/headwear/01.webp',
      '/assets/product-details/headwear/02.webp',
      '/assets/product-details/headwear/03.webp',
      '/assets/product-details/headwear/04.webp',
      '/assets/product-details/headwear/05.webp',
      '/assets/product-details/headwear/06.webp',
      '/assets/product-details/headwear/07.webp',
      '/assets/product-details/headwear/08.webp',
      '/assets/product-details/headwear/09.webp',
      '/assets/product-details/headwear/10.webp',
      '/assets/product-details/headwear/11.webp',
      '/assets/product-details/headwear/12.webp',
      '/assets/product-details/headwear/13.webp',
      '/assets/product-details/headwear/14.webp',
      '/assets/product-details/headwear/15.webp',
      '/assets/product-details/headwear/16.webp',
      '/assets/product-details/headwear/17.webp',
    ],
  },
  {
    title: 'Trousers & Shorts',
    slug: 'trousers-shorts',
    image: '/assets/product-range/trousers-shorts.webp',
    description: 'Bottomwear production for uniforms and casual programs with fit development and size-set support.',
    detailImages: [
      '/assets/product-details/trousers-shorts/01.webp',
      '/assets/product-details/trousers-shorts/02.webp',
      '/assets/product-details/trousers-shorts/03.webp',
      '/assets/product-details/trousers-shorts/04.webp',
      '/assets/product-details/trousers-shorts/05.webp',
      '/assets/product-details/trousers-shorts/06.webp',
      '/assets/product-details/trousers-shorts/07.webp',
      '/assets/product-details/trousers-shorts/08.webp',
      '/assets/product-details/trousers-shorts/09.webp',
    ],
  },
];

const productCommitments = [
  {
    title: 'Product Warranty',
    text: 'Every product comes with comprehensive warranty coverage against manufacturing defects. Our commitment to quality extends beyond delivery.',
    icon: '/assets/icons/commitment-1.svg',
  },
  {
    title: 'Reliable Delivery',
    text: 'Established production workflows and logistics support help your orders arrive on schedule and ready for your business timeline.',
    icon: '/assets/icons/commitment-2.svg',
  },
  {
    title: 'Expert Consultation',
    text: 'Experienced guidance on fabric, sizing, branding, and production planning helps each custom program move forward cleanly.',
    icon: '/assets/icons/commitment-3.svg',
  },
  {
    title: 'Global Quality Standards',
    text: 'Rigorous quality control processes maintain consistent finishing and dependable output across every production run.',
    icon: '/assets/icons/commitment-4.svg',
  },
];

const factoryImages = [
  { src: '/assets/factory-1.webp', alt: 'Packed garments in cartons at Vina Econex factory' },
  { src: '/assets/factory-2.webp', alt: 'Garment sewing production floor' },
  { src: '/assets/factory-3.webp', alt: 'Packed fabric bundles ready for shipment' },
  { src: '/assets/factory-4.webp', alt: 'Embroidery machines producing custom logo garments' },
  { src: '/assets/factory-5.webp', alt: 'Factory loading area and shipping containers' },
  { src: '/assets/factory-6.webp', alt: 'Warehouse storage of garment materials' },
  { src: '/assets/factory-7.webp', alt: 'Finished garment with printed brand detail' },
  { src: '/assets/factory-8.webp', alt: 'Cartons wrapped and labeled for export' },
  { src: '/assets/factory-9.webp', alt: 'Shipping truck for exported apparel orders' },
];

const socialImages = [
  '/assets/social-1.webp',
  '/assets/social-2.webp',
  '/assets/social-3.webp',
  '/assets/social-4.webp',
  '/assets/social-5.webp',
  '/assets/social-6.webp',
  '/assets/social-7.webp',
];

const customerLogos: { name: string; image: string; fit?: string; tone?: string }[] = [
  { name: 'Hoa Sen Food Company', image: '/assets/customers-figma/hoa-sen.webp', fit: 'wide' },
  { name: 'MSC Cargo', image: '/assets/customers-figma/msc.webp', fit: 'contain' },
  { name: 'Phu Quoc Travel', image: '/assets/customers-figma/phu-quoc.webp', fit: 'contain' },
  { name: 'Soha Food 24h', image: '/assets/customers-figma/soha-food.webp', fit: 'contain' },
  { name: 'DNS Service', image: '/assets/customers-figma/dns.webp', fit: 'contain' },
  { name: 'Ford', image: '/assets/customers-figma/ford.webp', fit: 'wide' },
  { name: 'Hoang Yen Uniform', image: '/assets/customers-figma/hoang-yen.webp', fit: 'contain' },
  { name: 'Lipovitan', image: '/assets/customers-figma/lipovitan.webp', fit: 'cover' },
  { name: 'TH true MILK', image: '/assets/customers-figma/th-true-milk.webp', fit: 'cover', tone: 'blue' },
  { name: 'Maersk', image: '/assets/customers-figma/maersk.webp', fit: 'wide' },
  { name: 'Hirohua Brothers', image: '/assets/customers-figma/hirohua.webp', fit: 'contain' },
  { name: 'Quang Vinh Logistic', image: '/assets/customers-figma/quang-vinh-logistic.webp', fit: 'contain', tone: 'yellow' },
  { name: 'Transporter VN', image: '/assets/customers-figma/transporter-vn.webp', fit: 'wide' },
  { name: 'Medical University Hospital', image: '/assets/customers-figma/medical-university.webp', fit: 'contain' },
];

function sectionHref(hash: string) {
  return window.location.pathname.startsWith('/products/') ? `/${hash}` : hash;
}

function productHref(slug: string) {
  return `/products/${slug}`;
}

function ButtonArrow({ children, href, className = '' }: { children: string; href: string; className?: string }) {
  return (
    <a className={`button-arrow ${className}`} href={href}>
      <span>{children}</span>
      <span className="arrow-icon" aria-hidden="true" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const isProductPage = window.location.pathname.startsWith('/products/');

  useEffect(() => {
    const close = () => {
      setOpen(false);
      setMobileProductOpen(false);
    };
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  useEffect(() => {
    if (!open) {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      return;
    }

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href={isProductPage ? '/' : '#home'} aria-label="Vina Econex home">
          Vina <span>Econex</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            'hasDropdown' in item ? (
              <div className="desktop-nav-item desktop-nav-item-product" key={item.href}>
                <a className={window.location.pathname.startsWith('/products/') ? 'active' : ''} href={sectionHref(item.href)}>
                  {item.label}
                  <span className="nav-caret" aria-hidden="true" />
                </a>
                <div className="product-dropdown" role="menu" aria-label="Product range links">
                  {products.map((product) => (
                    <a href={productHref(product.slug)} key={product.slug} role="menuitem">
                      {product.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a className={index === 0 && !isProductPage ? 'active' : ''} href={sectionHref(item.href)} key={item.href}>
                {item.label}
              </a>
            )
          ))}
        </nav>
        <a className="contact-link" href={sectionHref('#contact')}>
          Contact us
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`} id="mobile-menu">
        {navItems.map((item) =>
          'hasDropdown' in item ? (
            <div className={`mobile-menu-group ${mobileProductOpen ? 'open' : ''}`} key={item.href}>
              <button
                className="mobile-menu-trigger"
                type="button"
                aria-expanded={mobileProductOpen}
                onClick={() => setMobileProductOpen((current) => !current)}
              >
                <span>{item.label}</span>
                <span className="mobile-nav-caret" aria-hidden="true" />
              </button>
              <div className="mobile-product-links">
                {products.map((product) => (
                  <a href={productHref(product.slug)} key={product.slug} onClick={() => setOpen(false)}>
                    {product.title}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a href={sectionHref(item.href)} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ),
        )}
        <a className="mobile-cta" href={sectionHref('#contact')} onClick={() => setOpen(false)}>
          Contact us
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content reveal">
        <p className="eyebrow">Vietnam garment factory</p>
        <h1>OEM & ODM Clothing Manufacturer</h1>
        <p className="hero-bold">Factory-Direct Pricing</p>
        <p className="hero-copy">Specializing in Polo Shirts, T-Shirts, Uniforms & Sportswear</p>
        <div className="hero-usps" aria-label="Key benefits">
          {heroUsps.map((item) => (
            <span key={item}>
              <i className="checkmark" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
        <ButtonArrow href="#contact">Get a Free Quote</ButtonArrow>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-pad" id="about">
      <div className="about-wrap reveal">
        <img src="/assets/about-embroidery.webp" alt="Custom embroidery production at Vina Econex" />
        <div className="about-card">
          <h2>Trusted Vietnam OEM & ODM Garment Manufacturer</h2>
          <p>
            Vietnam-based OEM & ODM garment factory specializing in uniforms, polo shirts,
            T-shirts, sportswear, and workwear. Trusted by global brands, wholesalers, and
            distributors for consistent quality and flexible manufacturing.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="why section-pad">
      <div className="section-heading reveal">
        <h2>Why Choose Vinaeconex</h2>
        <p>Reliable OEM & ODM Manufacturing Partner</p>
      </div>
      <div className="why-grid">
        {whyItems.map((item, index) => (
          <article className="why-card reveal" key={item.title}>
            <span className="number-badge">{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading section-heading-light reveal">
        <h2>Our Services</h2>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card reveal" key={`${service.title}-${service.image}`}>
            <img src={service.image} alt={`${service.title} at Vina Econex`} />
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductRange() {
  return (
    <section className="products section-pad" id="products">
      <div className="section-heading reveal">
        <h2>Product Range</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card reveal" key={product.title}>
            <div className="product-image">
              <img src={product.image} alt={`${product.title} product sample`} />
            </div>
            <h3>{product.title}</h3>
            <ButtonArrow href={productHref(product.slug)} className="small">
              View Details
            </ButtonArrow>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductDetail({ product }: { product: Product }) {
  const heroImage = product.detailImages[0] ?? product.image;
  const galleryImages = product.detailImages;

  return (
    <section className="product-detail-page">
      <div className="product-detail-hero">
        <figure className="product-detail-visual detail-hero-gallery">
          <img src={heroImage} alt={`${product.title} hero product image`} />
        </figure>
        <div className="product-detail-copy reveal">
          <div>
            <h1>{product.title}</h1>
            <p className="product-detail-kicker">with International Quality Standards</p>
            <p>{product.description}</p>
          </div>
          <ButtonArrow href="/#contact">Get a Free Quote</ButtonArrow>
        </div>

      </div>

      <section className="product-commitments section-pad">
        <div className="section-heading reveal product-detail-heading">
          <h2>Vinaeconex Commitments</h2>
        </div>
        <div className="product-commitments-grid">
          {productCommitments.map((item, index) => (
            <article className="product-commitment-card reveal" key={item.title}>
              <span className="commitment-icon">
                <img src={item.icon} alt="" aria-hidden="true" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-gallery section-pad" aria-label={`${product.title} image gallery`}>
        <div className="product-gallery-grid">
          {galleryImages.map((image, index) => (
            <figure className="product-gallery-card reveal" key={`${product.slug}-gallery-${image}`}>
              <img src={image} alt={`${product.title} gallery image ${index + 1}`} />
            </figure>
          ))}
        </div>
      </section>
    </section>
  );
}

function FactoryGallery() {
  return (
    <section className="factory section-pad" id="factory">
      <div className="section-heading reveal">
        <h2>Production, Packing, and Factory Gallery</h2>
      </div>
      <div className="factory-grid">
        {factoryImages.map((image) => (
          <figure className="factory-card reveal" key={image.src}>
            <img src={image.src} alt={image.alt} />
          </figure>
        ))}
      </div>
    </section>
  );
}

function OurCustomers() {
  return (
    <section className="customers section-pad" id="customers">
      <div className="section-heading reveal">
        <h2>Our Customer</h2>
      </div>
      <div className="customer-cloud reveal" aria-label="Vina Econex customer logos">
        {customerLogos.map((customer) => (
          <div className={`customer-logo ${customer.fit ?? ''} ${customer.tone ?? ''}`} key={customer.image}>
            <img src={customer.image} alt={`${customer.name} logo`} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setStatusType('idle');
    setStatus('Sending your request...');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors?.[0]?.message ||
          'Submission failed. Please try again or contact us directly.';

        throw new Error(message);
      }

      setStatusType('success');
      setStatus('Thank you. Your request has been sent to Vina Econex.');
      form.reset();
    } catch (error) {
      setStatusType('error');
      setStatus(
        error instanceof Error
          ? error.message
          : 'Submission failed. Please try again or contact us directly.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-info reveal">
        <p className="form-kicker">Contact</p>
        <h2>Have a project in mind? Contact us today.</h2>
        <p>
          Whether you need OEM, ODM, private-label manufacturing, or have any other inquiries,
          our team is here to help. We will review your request and respond as quickly as possible.
        </p>
        <ul className="contact-list">
          <li>
            <strong>Hotline / Zalo / WeChat / WhatsApp:</strong> to be updated
          </li>
          <li>
            <strong>Office:</strong> 1014 Pham Van Dong Street, Hiep Binh Ward, Ho Chi Minh City
          </li>
          <li>
            <strong>Factory:</strong> 25 Group, Vuon Dua Quarter, Phuoc Tan Ward, Dong Nai Province
          </li>
          <li>
            <strong>Store:</strong> 4 Group, Tan Ninh Ward, Tay Ninh Province
          </li>
        </ul>
      </div>
      <form
        className="quote-form reveal"
        action={formspreeEndpoint}
        method="POST"
        onSubmit={onSubmit}
      >
        <input
          className="form-honeypot"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <input type="hidden" name="_subject" value="New quote request from Vina Econex website" />
        <p className="form-kicker">Get a Quote</p>
        <h2>Send your request</h2>
        <div className="form-row">
          <label>
            Full Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Company Name
            <input name="company" type="text" autoComplete="organization" />
          </label>
        </div>
        <div className="form-row">
          <label>
            Phone / WhatsApp / Zalo
            <input name="phone" type="tel" autoComplete="tel" required />
          </label>
          <label>
            Country / Region
            <input name="country" type="text" autoComplete="country-name" />
          </label>
        </div>
        <label>
          Email Address
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <div className="form-row">
          <label>
            Product Category
            <select name="category" defaultValue="">
              <option value="" disabled>
                Select category
              </option>
              {products.map((product) => (
                <option key={product.title}>{product.title}</option>
              ))}
            </select>
          </label>
          <label>
            Order Quantity
            <input name="quantity" type="text" placeholder="Example: 1,000 pcs" />
          </label>
        </div>
        <label>
          Message / Requirement
          <textarea
            name="message"
            rows={4}
            placeholder="Fabric, size range, colors, logo, label, packaging, delivery timeline"
          />
        </label>
        <button className="submit-button" type="submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Submit Request'}
        </button>
        <p className="form-note">
          Hotline, Zalo, WeChat, and WhatsApp can be added once confirmed.
        </p>
        <p className={`form-status ${statusType}`} aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}

function SocialStrip() {
  const loopImages = [...socialImages, ...socialImages];

  return (
    <section className="social-strip" aria-label="Customer and social proof photos">
      <div className="social-marquee reveal">
        <div className="social-track">
          {loopImages.map((src, index) => (
            <img
              src={src}
              alt={index < socialImages.length ? `Vina Econex customer event photo ${index + 1}` : ''}
              aria-hidden={index >= socialImages.length}
              key={`${src}-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand footer-logo" href={sectionHref('#home')}>
            Vina <span>Econex</span>
          </a>
          <p>
            Vietnam-based OEM and ODM garment manufacturer for uniforms, polo shirts, T-shirts,
            sportswear, teamwear, and custom apparel.
          </p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <a href={sectionHref('#about')}>About Us</a>
          <a href={sectionHref('#services')}>Services</a>
          <a href={sectionHref('#products')}>Products</a>
          <a href={sectionHref('#factory')}>Factory Gallery</a>
          <a href={sectionHref('#customers')}>Our Customer</a>
        </div>
        <div className="footer-products">
          <h2>Products</h2>
          <a href={productHref('polo-shirts')}>Polo Shirts</a>
          <a href={productHref('sportswear')}>Sportswear</a>
          <a href={productHref('workwear')}>Workwear</a>
          <a href={productHref('medical-uniforms')}>Medical Uniforms</a>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <a href="mailto:info@vinaeconex.com">info@vinaeconex.com</a>
          <a href={sectionHref('#contact')}>Get A Free Quote</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2026 Vina Econex Import Export JSC. All rights reserved.</p>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 21.9 2.1 13.6 2.1 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.7.6 4 .1.4 0 .9-.3 1.2l-1.7 2.2Z" />
    </svg>
  );
}

function FloatingCallButtons() {
  return (
    <aside className="floating-call-stack" aria-label="Quick phone contacts">
      {callContacts.map((contact, index) => (
        <a
          className="floating-call"
          href={`tel:${contact.tel}`}
          key={contact.tel}
          style={{ '--delay': `${index * 360}ms` } as CSSProperties}
          aria-label={`Call ${contact.name} at ${contact.phone}`}
        >
          <span className="floating-call-text">
            <strong>{contact.name}</strong>
            <span>{contact.role}</span>
            <small>{contact.phone}</small>
          </span>
          <span className="floating-call-icon">
            <PhoneIcon />
          </span>
        </a>
      ))}
    </aside>
  );
}

export default function App() {
  const currentPath = window.location.pathname;
  const activeProduct = products.find((product) => currentPath === productHref(product.slug));

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduceMotion.matches) {
      return undefined;
    }

    const lenis = new Lenis({
      autoRaf: true,
      anchors: {
        offset: -86,
        duration: 1.05,
        easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      },
      lerp: 0.085,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        {activeProduct ? (
          <>
            <ProductDetail product={activeProduct} />
            <Contact />
            <SocialStrip />
          </>
        ) : (
          <>
            <Hero />
            <About />
            <WhyChooseUs />
            <Services />
            <ProductRange />
            <FactoryGallery />
            <OurCustomers />
            <Contact />
            <SocialStrip />
          </>
        )}
      </main>
      <FloatingCallButtons />
      <Footer />
    </>
  );
}
