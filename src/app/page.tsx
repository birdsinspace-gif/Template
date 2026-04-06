"use client";

const menuItems = [
  {
    name: "Lemon Luxe",
    description:
      "Bright lemon cake with a clean, elegant finish and a refined swirl of icing.",
    image:
      "https://images.pexels.com/photos/4099128/pexels-photo-4099128.jpeg?cs=srgb&dl=pexels-taryn-elliott-4099128.jpg&fm=jpg",
  },
  {
    name: "Milk Chocolate Classic",
    description:
      "Rich milk chocolate with broad appeal, smooth texture, and timeless presentation.",
    image:
      "https://images.pexels.com/photos/6815973/pexels-photo-6815973.jpeg?cs=srgb&dl=pexels-saveurssecretes-6815973.jpg&fm=jpg",
  },
  {
    name: "Dark Chocolate Decadence",
    description:
      "A deeper cocoa profile with a more elevated, sophisticated flavor experience.",
    image:
      "https://images.pexels.com/photos/6822806/pexels-photo-6822806.jpeg?cs=srgb&dl=pexels-saveurssecretes-6822806.jpg&fm=jpg",
  },
  {
    name: "Vanilla Gold",
    description:
      "Classic vanilla, elevated through polish, restraint, and premium presentation.",
    image:
      "https://images.pexels.com/photos/4099124/pexels-photo-4099124.jpeg?cs=srgb&dl=pexels-taryn-elliott-4099124.jpg&fm=jpg",
  },
  {
    name: "Strawberry Velvet",
    description:
      "Soft strawberry flavor with a celebratory, feminine look and a graceful finish.",
    image:
      "https://images.pexels.com/photos/853005/pexels-photo-853005.jpeg?cs=srgb&dl=pexels-jessbaileydesign-853005.jpg&fm=jpg",
  },
  {
    name: "Strawberry Vanilla Swirl",
    description:
      "A signature favorite with visual charm, party appeal, and an elegant flavor balance.",
    image:
      "https://images.pexels.com/photos/853005/pexels-photo-853005.jpeg?cs=srgb&dl=pexels-jessbaileydesign-853005.jpg&fm=jpg",
  },
];

const pricingTiers = [
  {
    title: "Single Signature Cupcake",
    price: "$4.95",
    note: "Perfect for gifting, sampling, and impulse purchase.",
  },
  {
    title: "Half Dozen",
    price: "$28.99",
    note: "The sweet spot for small celebrations and family orders.",
  },
  {
    title: "Dozen Box",
    price: "$54.99",
    note: "Our best value anchor for birthdays, showers, and hostess gifting.",
    featured: true,
  },
  {
    title: "Two Dozen Party Box",
    price: "$104.99",
    note: "Built for gatherings, office orders, and dessert tables.",
  },
];

const serviceAreas = [
  {
    title: "Upstate South Carolina",
    copy:
      "Available for celebrations, gifting, premium dessert tables, private events, and special occasions across the Upstate.",
  },
  {
    title: "Roswell, Georgia",
    copy:
      "Available for parties, showers, events, gifting, and select custom orders in the Roswell area.",
  },
];

const css = `
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    radial-gradient(circle at top left, rgba(232, 94, 162, 0.14), transparent 28%),
    radial-gradient(circle at top right, rgba(216, 169, 58, 0.15), transparent 30%),
    linear-gradient(180deg, #fffafc 0%, #fff7fb 38%, #fffefb 100%);
  color: #24151f;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
}

.site-shell {
  min-height: 100vh;
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(18px);
  background: rgba(255, 249, 252, 0.82);
  border-bottom: 1px solid rgba(159, 111, 137, 0.12);
}

.nav {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brandMark {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0) 28%),
    linear-gradient(135deg, #e85ea2 0%, #f4a7cb 48%, #e6bf63 100%);
  display: grid;
  place-items: center;
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  box-shadow: 0 12px 34px rgba(200, 63, 134, 0.22);
  flex: 0 0 auto;
}

.brandTitle {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.14rem;
  font-weight: 700;
  line-height: 1.05;
}

.brandSub {
  margin-top: 3px;
  color: #6b5262;
  font-size: 0.84rem;
}

.navLinks {
  display: flex;
  align-items: center;
  gap: 22px;
  color: #6b5262;
  font-size: 0.96rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.navCta,
.btnPrimary {
  background: linear-gradient(135deg, #e85ea2 0%, #d8a93a 100%);
  color: white;
  box-shadow: 0 14px 34px rgba(200, 63, 134, 0.22);
}

.navCta {
  min-height: 46px;
  padding: 0 20px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.hero {
  padding: 72px 0 48px;
}

.heroGrid {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 36px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(159, 111, 137, 0.12);
  color: #c83f86;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 12px 34px rgba(117, 55, 87, 0.08);
}

.eyebrowDot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e85ea2, #d8a93a);
  display: inline-block;
}

h1 {
  margin: 20px 0 16px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.03em;
}

.gradientText {
  background: linear-gradient(135deg, #c83f86 0%, #e85ea2 42%, #d8a93a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  font-size: 1.08rem;
  line-height: 1.8;
  color: #6b5262;
  max-width: 60ch;
  margin: 0;
}

.heroActions,
.ctaActions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.btn {
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.btn:hover,
.navCta:hover {
  transform: translateY(-2px);
}

.btnSecondary {
  border: 1px solid rgba(159, 111, 137, 0.16);
  background: rgba(255, 255, 255, 0.78);
  color: #24151f;
  box-shadow: 0 10px 24px rgba(117, 55, 87, 0.06);
}

.heroStats {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.statCard {
  padding: 18px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(159, 111, 137, 0.12);
  border-radius: 20px;
  box-shadow: 0 14px 32px rgba(117, 55, 87, 0.08);
}

.statValue {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.85rem;
  font-weight: 700;
}

.statLabel {
  margin-top: 6px;
  color: #6b5262;
  font-size: 0.92rem;
}

.heroGallery {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  grid-template-rows: 250px 250px;
  gap: 18px;
}

.heroPhotoCard {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(159, 111, 137, 0.12);
  box-shadow: 0 20px 46px rgba(117, 55, 87, 0.12);
}

.heroPhotoCard img {
  height: 100%;
  object-fit: cover;
}

.heroPhotoLarge {
  grid-row: span 2;
}

.heroPhotoTag {
  position: absolute;
  left: 16px;
  bottom: 16px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255,255,255,0.88);
  border: 1px solid rgba(159, 111, 137, 0.12);
  color: #6b5262;
  font-size: 0.86rem;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(117, 55, 87, 0.08);
}

.section {
  padding: 62px 0;
}

.sectionSoft {
  background: linear-gradient(180deg, rgba(255, 250, 252, 0.82), rgba(255, 255, 255, 0.9));
  border-top: 1px solid rgba(159, 111, 137, 0.08);
  border-bottom: 1px solid rgba(159, 111, 137, 0.08);
}

.sectionIntro {
  margin-bottom: 30px;
}

.sectionKicker {
  margin: 0 0 10px;
  color: #c83f86;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.82rem;
}

.centerKicker {
  text-align: center;
}

h2 {
  margin: 0 0 12px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.04;
}

.sectionCopy,
.ctaCopy {
  max-width: 72ch;
  color: #6b5262;
  line-height: 1.8;
  font-size: 1.04rem;
  margin: 0;
}

.ctaCopy {
  margin: 0 auto;
  text-align: center;
}

.cardGrid {
  display: grid;
  gap: 22px;
}

.threeUp {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.fourUp {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.twoUp {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card,
.featureBox,
.ctaPanel {
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(159, 111, 137, 0.12);
  box-shadow: 0 18px 44px rgba(117, 55, 87, 0.08);
}

.card {
  border-radius: 24px;
  padding: 20px;
}

.menuCard {
  overflow: hidden;
  padding: 0;
}

.menuImageWrap {
  height: 220px;
  overflow: hidden;
}

.menuImage {
  height: 100%;
  object-fit: cover;
}

.menuCardBody {
  padding: 22px 20px 22px;
}

.menuAccent {
  width: 64px;
  height: 6px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e85ea2, #d8a93a);
  margin-bottom: 16px;
}

h3 {
  margin: 0 0 10px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.34rem;
}

.card p,
.featureBox p {
  margin: 0;
  color: #6b5262;
  line-height: 1.75;
}

.priceCard {
  position: relative;
  padding: 24px;
}

.priceCard.featured {
  background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,244,251,0.96));
  border: 1px solid rgba(232, 94, 162, 0.25);
  transform: translateY(-4px);
}

.priceBadge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 7px 10px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e85ea2, #d8a93a);
  color: white;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.priceAmount {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.3rem;
  line-height: 1;
  margin: 16px 0 10px;
}

.priceNote {
  font-size: 0.96rem;
  color: #6b5262;
}

.customOrderBox {
  margin-top: 28px;
  border-radius: 28px;
  padding: 30px 24px;
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.92), rgba(255,255,255,0.58)),
    linear-gradient(135deg, rgba(232, 94, 162, 0.08), rgba(216, 169, 58, 0.12));
  border: 1px solid rgba(159, 111, 137, 0.12);
  box-shadow: 0 18px 44px rgba(117, 55, 87, 0.08);
  text-align: center;
}

.customOrderTitle {
  margin-bottom: 10px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.7rem;
}

.customOrderCopy {
  margin: 0 auto;
  max-width: 60ch;
  color: #6b5262;
  line-height: 1.8;
}

.locationCard {
  position: relative;
  padding-left: 72px;
}

.locationIcon {
  position: absolute;
  top: 26px;
  left: 24px;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: linear-gradient(135deg, #e85ea2, #d8a93a);
  color: white;
  display: grid;
  place-items: center;
  font-weight: 800;
  box-shadow: 0 10px 24px rgba(200, 63, 134, 0.18);
}

.featureStrip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.featureBox {
  border-radius: 26px;
  padding: 24px;
}

.ctaPanel {
  border-radius: 32px;
  padding: 40px 28px;
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.92), rgba(255,255,255,0.58)),
    linear-gradient(135deg, rgba(232, 94, 162, 0.1), rgba(216, 169, 58, 0.14));
  text-align: center;
}

.footer {
  padding: 26px 0 48px;
  color: #6b5262;
  font-size: 0.95rem;
}

.footerInner {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 1080px) {
  .heroGrid {
    grid-template-columns: 1fr;
  }

  .fourUp {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .threeUp,
  .twoUp,
  .featureStrip,
  .heroStats,
  .heroGallery,
  .fourUp {
    grid-template-columns: 1fr;
  }

  .heroGallery {
    grid-template-rows: 280px 220px 220px;
  }

  .heroPhotoLarge {
    grid-row: span 1;
  }

  .nav {
    padding: 14px 0;
    flex-wrap: wrap;
    justify-content: center;
  }

  .navLinks {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: 42px;
  }

  .section {
    padding: 42px 0;
  }

  h1 {
    line-height: 1.02;
  }
}
`;

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="site-shell">
        <header className="topbar">
          <div className="container nav">
            <a href="#" className="brand">
              <div className="brandMark">G</div>
              <div>
                <div className="brandTitle">Glitter &amp; Gold Cupcake Company</div>
                <div className="brandSub">
                  Elegant cupcakes for unforgettable moments
                </div>
              </div>
            </a>

            <nav className="navLinks">
              <a href="#menu">Menu</a>
              <a href="#pricing">Pricing</a>
              <a href="#locations">Locations</a>
              <a href="#about">About</a>
              <a href="#order" className="navCta">
                Order Inquiry
              </a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="container heroGrid">
            <div>
              <div className="eyebrow">
                <span className="eyebrowDot" />
                Premium cupcakes, beautifully presented
              </div>

              <h1>
                Elegant cupcakes with
                <span className="gradientText"> glitter, gold, and charm</span>
              </h1>

              <p className="lead">
                Glitter &amp; Gold Cupcake Company creates premium cupcakes for
                celebrations, gifting, showers, parties, and special events. We
                currently serve <strong>Upstate South Carolina</strong> and{" "}
                <strong>Roswell, Georgia</strong> only.
              </p>

              <div className="heroActions">
                <a href="#order" className="btn btnPrimary">
                  Request an Order
                </a>
                <a href="#pricing" className="btn btnSecondary">
                  View Pricing
                </a>
              </div>

              <div className="heroStats">
                <div className="statCard">
                  <div className="statValue">2</div>
                  <div className="statLabel">service areas</div>
                </div>
                <div className="statCard">
                  <div className="statValue">6</div>
                  <div className="statLabel">signature flavors</div>
                </div>
                <div className="statCard">
                  <div className="statValue">1</div>
                  <div className="statLabel">premium visual standard</div>
                </div>
              </div>
            </div>

            <div className="heroGallery">
              <div className="heroPhotoCard heroPhotoLarge">
                <img
                  src="https://images.pexels.com/photos/4099124/pexels-photo-4099124.jpeg?cs=srgb&dl=pexels-taryn-elliott-4099124.jpg&fm=jpg"
                  alt="Elegant vanilla cupcakes with fruit and floral garnish"
                />
                <div className="heroPhotoTag">Vanilla Gold</div>
              </div>

              <div className="heroPhotoCard">
                <img
                  src="https://images.pexels.com/photos/853005/pexels-photo-853005.jpeg?cs=srgb&dl=pexels-jessbaileydesign-853005.jpg&fm=jpg"
                  alt="Pink frosted strawberry cupcake"
                />
                <div className="heroPhotoTag">Strawberry Velvet</div>
              </div>

              <div className="heroPhotoCard">
                <img
                  src="https://images.pexels.com/photos/6815973/pexels-photo-6815973.jpeg?cs=srgb&dl=pexels-saveurssecretes-6815973.jpg&fm=jpg"
                  alt="Chocolate cupcake with pink frosting"
                />
                <div className="heroPhotoTag">Milk Chocolate Classic</div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="section">
          <div className="container">
            <div className="sectionIntro">
              <p className="sectionKicker">Menu</p>
              <h2>Our signature cupcake collection</h2>
              <p className="sectionCopy">
                Clean swirl icing, polished presentation, and classic flavors
                positioned for gifting, dessert tables, and premium local
                celebrations.
              </p>
            </div>

            <div className="cardGrid threeUp">
              {menuItems.map((item) => (
                <article key={item.name} className="card menuCard">
                  <div className="menuImageWrap">
                    <img
                      className="menuImage"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="menuCardBody">
                    <div className="menuAccent" />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section sectionSoft">
          <div className="container">
            <div className="sectionIntro">
              <p className="sectionKicker">Pricing</p>
              <h2>Priced for premium gifting and events</h2>
              <p className="sectionCopy">
                The structure below uses a clean anchor strategy: a strong
                single-cupcake entry point, a highly attractive half-dozen, a
                best-value featured dozen, and a party-box step-up for events.
              </p>
            </div>

            <div className="cardGrid fourUp">
              {pricingTiers.map((tier) => (
                <article
                  key={tier.title}
                  className={`card priceCard${tier.featured ? " featured" : ""}`}
                >
                  {tier.featured ? <div className="priceBadge">Best Value</div> : null}
                  <h3>{tier.title}</h3>
                  <div className="priceAmount">{tier.price}</div>
                  <p className="priceNote">{tier.note}</p>
                </article>
              ))}
            </div>

            <div className="customOrderBox">
              <div className="customOrderTitle">
                Need a custom order or looking for catering? We do that, too.
              </div>
              <p className="customOrderCopy">
                Glitter &amp; Gold Cupcake Company offers custom orders,
                catering-style quantities, and special event quotes for larger
                celebrations, dessert tables, and hosted gatherings.
              </p>

              <div className="ctaActions" style={{ justifyContent: "center" }}>
                <a
                  href="mailto:hello@glitterandgoldcupcakes.com"
                  className="btn btnPrimary"
                >
                  Email to Order
                </a>
                <a
                  href="mailto:hello@glitterandgoldcupcakes.com"
                  className="btn btnSecondary"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="locations" className="section">
          <div className="container">
            <div className="sectionIntro">
              <p className="sectionKicker">Locations</p>
              <h2>Where we currently serve</h2>
              <p className="sectionCopy">
                Orders are currently available only in the locations below.
              </p>
            </div>

            <div className="cardGrid twoUp">
              {serviceAreas.map((area) => (
                <article key={area.title} className="card locationCard">
                  <div className="locationIcon">✦</div>
                  <h3>{area.title}</h3>
                  <p>{area.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section sectionSoft">
          <div className="container">
            <div className="sectionIntro">
              <p className="sectionKicker">About</p>
              <h2>Why Glitter &amp; Gold works</h2>
              <p className="sectionCopy">
                This brand is not trying to win on clutter or novelty. It wins
                on elegance, consistency, visual polish, and a premium local
                feel.
              </p>
            </div>

            <div className="featureStrip">
              <div className="featureBox">
                <h3>Signature Swirl</h3>
                <p>
                  The icing is intentionally clean, structured, and repeatable.
                  That makes the presentation feel premium, not basic.
                </p>
              </div>
              <div className="featureBox">
                <h3>Premium Positioning</h3>
                <p>
                  The pricing is built to signal gifting quality and event
                  readiness, not grocery-store commodity dessert.
                </p>
              </div>
              <div className="featureBox">
                <h3>Focused Geography</h3>
                <p>
                  Serving only Upstate South Carolina and Roswell, Georgia keeps
                  the brand selective and operationally tight.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="order" className="section">
          <div className="container">
            <div className="ctaPanel">
              <p className="sectionKicker centerKicker">Order Inquiry</p>
              <h2>Order for your next event</h2>
              <p className="ctaCopy">
                Planning a shower, birthday, party, hostess gift, or dessert
                table? Glitter &amp; Gold Cupcake Company is currently accepting
                inquiries for <strong>Upstate South Carolina</strong> and{" "}
                <strong>Roswell, Georgia</strong>. Custom catering and event
                quotes are available by request.
              </p>

              <div className="ctaActions">
                <a
                  href="mailto:hello@glitterandgoldcupcakes.com"
                  className="btn btnPrimary"
                >
                  Email to Order
                </a>
                <a href="#pricing" className="btn btnSecondary">
                  Review Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerInner">
            <div>© 2026 Glitter &amp; Gold Cupcake Company</div>
            <div>Available only in Upstate South Carolina and Roswell, Georgia</div>
          </div>
        </footer>
      </main>
    </>
  );
}
