import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { FormEvent, useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Product', href: '#products', hasDropdown: true },
  { label: 'Factory', href: '#factory' },
  { label: 'Customer', href: '#customers' },
  { label: 'Contact', href: '#contact' },
] as const;

const heroUsps = ['Flexible MOQ', 'Fast Sampling (7-15 Days)', 'Factory-Direct Pricing'];

const whyItems = [
  {
    title: 'Factory-direct manufacturing',
    text: 'Manufacturing support directly from the factory for clear pricing, timelines, and order coordination.',
  },
  {
    title: 'Specialized apparel categories',
    text: 'Specialized in uniforms, polo shirts, T-shirts, sportswear, and teamwear.',
  },
  {
    title: 'Flexible MOQ',
    text: 'Flexible MOQ for both small and large orders across custom apparel programs.',
  },
  {
    title: 'Fast sample development',
    text: 'Fast sample development and reliable production follow-through for custom manufacturing.',
  },
  {
    title: 'Strict quality control',
    text: 'Strict quality control at every production stage, from sample review to final packing.',
  },
  {
    title: 'Worldwide shipping',
    text: 'Complete factory-direct pricing and offshore worldwide shipping via Carton/Port.',
  },
];

const services = [
  {
    title: 'Manufacturing',
    text: 'Turning brand ideas into approved samples and scalable apparel production.',
    image: '/assets/service-sampling.webp',
  },
  {
    title: 'OEM Manufacturing',
    text: 'Manufacturing based on your designs, specifications, and private label requirements.',
    image: '/assets/service-embroidery.webp',
  },
  {
    title: 'OEM Manufacturing',
    text: 'Production support from material preparation to packing and order shipment.',
    image: '/assets/service-packaging.webp',
  },
  {
    title: 'ODM Manufacturing',
    text: 'Product development support for apparel concepts, materials, and sample direction.',
    image: '/assets/service-oem.webp',
  },
];

const products = [
  {
    title: 'Polo Shirts',
    slug: 'polo-shirts',
    image: '/assets/product-range/polo-shirts.webp',
    description: 'Custom polo shirt manufacturing with flexible fabrics, trims, embroidery, printing, and private-label finishing.',
  },
  {
    title: 'T-Shirts',
    slug: 't-shirts',
    image: '/assets/product-range/t-shirts.webp',
    description: 'OEM and ODM T-shirt production for promotional, retail, uniform, and lifestyle apparel programs.',
  },
  {
    title: 'Sportswear',
    slug: 'sportswear',
    image: '/assets/product-range/sportswear.webp',
    description: 'Performance sportswear development focused on fit, movement, sublimation, and repeat production quality.',
  },
  {
    title: 'Workwear',
    slug: 'workwear',
    image: '/assets/product-range/workwear.webp',
    description: 'Durable workwear manufacturing with practical pocketing, reinforced seams, branding, and sizing support.',
  },
  {
    title: 'School Uniforms',
    slug: 'school-uniforms',
    image: '/assets/product-range/school-uniforms.webp',
    description: 'School uniform programs built for consistency across multiple grades, sizes, colors, and reorder cycles.',
  },
  {
    title: 'Medical Uniforms',
    slug: 'medical-uniforms',
    image: '/assets/product-range/medical-uniforms.webp',
    description: 'Medical uniform production with clean finishing, comfort-driven fabrics, and stable color matching.',
  },
  {
    title: 'Vests',
    slug: 'vests',
    image: '/assets/product-range/vests.webp',
    description: 'Custom vests for corporate, promotional, uniform, and event use with practical branding options.',
  },
  {
    title: 'Hoodies & Sweatshirts',
    slug: 'hoodies-sweatshirts',
    image: '/assets/product-range/hoodies-sweatshirts.webp',
    description: 'Fleece and knit hoodie production with embroidery, screen print, applique, and private-label details.',
  },
  {
    title: 'Bags',
    slug: 'bags',
    image: '/assets/product-range/bags.webp',
    description: 'Promotional and utility bag manufacturing tailored to brand usage, packaging, and material requirements.',
  },
  {
    title: 'Headwear',
    slug: 'headwear',
    image: '/assets/product-range/headwear.webp',
    description: 'Caps and headwear made with structured panels, embroidery placements, and adjustable finishing options.',
  },
  {
    title: 'Trousers & Shorts',
    slug: 'trousers-shorts',
    image: '/assets/product-range/trousers-shorts.webp',
    description: 'Bottomwear production for uniforms and casual programs with fit development and size-set support.',
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

const customerLogos = [
  { name: 'Hoa Sen Food Company', image: '/assets/customers/customer-01.webp', fit: 'contain' },
  { name: 'Soha Food 24h', image: '/assets/customers/customer-02.webp', fit: 'contain' },
  { name: 'DNS Service', image: '/assets/customers/customer-03.webp', fit: 'contain' },
  { name: 'Phu Quoc Travel', image: '/assets/customers/customer-04.webp', fit: 'contain' },
  { name: 'Hirohua Brothers', image: '/assets/customers/customer-05.webp', fit: 'cover' },
  { name: 'Lipovitan', image: '/assets/customers/customer-06.webp', fit: 'cover' },
  { name: 'Ford', image: '/assets/customers/ford.webp', fit: 'contain' },
  { name: 'Maersk', image: '/assets/customers/maersk.webp', fit: 'contain' },
  { name: 'MSC Cargo', image: '/assets/customers/msc-cargo.webp', fit: 'wide' },
  { name: 'TH true MILK', image: '/assets/customers/th-true-milk.webp', fit: 'cover' },
  { name: 'Customer partner', image: '/assets/customers/customer-07.webp', fit: 'contain' },
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
            For more than 30 years we have been supporting reliable apparel manufacturing for global
            customers who need quality, consistency, and flexible production.
          </p>
          <p>
            We are a Vietnam-based factory partner for uniforms, polo shirts, T-shirts, sportswear,
            teamwear, workwear, and custom garment programs.
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
        <h2>Why Choose Us</h2>
        <p>We are committed to delivering quality products, competitive pricing, and on-time delivery.</p>
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

function ProductDetail({ product }: { product: (typeof products)[number] }) {
  return (
    <section className="product-detail-page">
      <div className="product-detail-hero">
        <div className="product-detail-copy">
          <p className="eyebrow detail-eyebrow">Product Range</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="product-detail-actions">
            <ButtonArrow href="/#contact">Get a Quote</ButtonArrow>
            <a className="product-back-link" href="/#products">
              Back to Product Range
            </a>
          </div>
        </div>
        <div className="product-detail-visual">
          <img src={product.image} alt={`${product.title} product detail`} />
        </div>
      </div>
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
          <div className={`customer-logo ${customer.fit}`} key={customer.image}>
            <img src={customer.image} alt={`${customer.name} logo`} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState('');

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Thank you. Your request has been prepared and the Vina Econex team can follow up.');
    event.currentTarget.reset();
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-info reveal">
        <p className="form-kicker">Contact</p>
        <h2>Have a project in mind? Contact us today.</h2>
        <p>
          Whether you need OEM, ODM, private label manufacturing, or have any other inquiries,
          our team is here to help. We will review your request and respond as quickly as possible.
        </p>
        <ul className="contact-list">
          <li>
            <strong>Hotline / Zalo / WeChat / WhatsApp:</strong> to be added
          </li>
          <li>
            <strong>Office:</strong> 34B Phan Ke Binh Street, May Dich Ward, Ha Noi City
          </li>
          <li>
            <strong>Factory:</strong> 4C Dong Nam, Cu Chi, Ho Chi Minh City
          </li>
          <li>
            <strong>Store:</strong> Dong Nai Ward, Nhon Trach, Dong Nai Province
          </li>
        </ul>
      </div>
      <form className="quote-form reveal" onSubmit={onSubmit}>
        <p className="form-kicker">Get a free quote</p>
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
        <button className="submit-button" type="submit">
          Submit Request
        </button>
        <p className="form-note">
          Hotline, Zalo, WeChat, and WhatsApp can be added once confirmed.
        </p>
        <p className="form-status" aria-live="polite">
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
          <a className="brand footer-logo" href="#home">
            Vina <span>Econex</span>
          </a>
          <p>
            Vietnam-based OEM and ODM garment manufacturer for uniforms, polo shirts, T-shirts,
            sportswear, teamwear, and custom apparel.
          </p>
        </div>
        <div className="footer-links">
          <h2>Quick Links</h2>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#factory">Factory Gallery</a>
          <a href="#customers">Our Customer</a>
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
          <a href="#contact">Get A Free Quote</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2026 Vina Econex Import Export JSC. All rights reserved.</p>
      </div>
    </footer>
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
          <ProductDetail product={activeProduct} />
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
      <Footer />
    </>
  );
}
