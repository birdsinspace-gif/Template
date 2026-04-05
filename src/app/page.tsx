export default function HomePage() {
  const menuItems = [
    {
      name: "Lemon Luxe",
      description:
        "Bright lemon cake with a clean, elegant finish and a refined swirl of icing.",
    },
    {
      name: "Milk Chocolate Classic",
      description:
        "Rich milk chocolate with broad appeal, smooth texture, and timeless presentation.",
    },
    {
      name: "Dark Chocolate Decadence",
      description:
        "A deeper cocoa profile with a more elevated, sophisticated flavor experience.",
    },
    {
      name: "Vanilla Gold",
      description:
        "Classic vanilla, elevated through polish, restraint, and premium presentation.",
    },
    {
      name: "Strawberry Velvet",
      description:
        "Soft strawberry flavor with a celebratory, feminine look and a graceful finish.",
    },
    {
      name: "Strawberry Vanilla Swirl",
      description:
        "A signature favorite with visual charm, party appeal, and an elegant flavor balance.",
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

  const stylePoints = [
    {
      title: "Signature Swirl",
      copy:
        "Our icing style is intentionally clean and structured, a classic upward swirl that feels polished, premium, and consistent.",
    },
    {
      title: "Elegant Simplicity",
      copy:
        "We do not hide behind over-decoration. The visual appeal comes from balance, finish, restraint, and consistency.",
    },
    {
      title: "Gold Detail",
      copy:
        "Selective gold accents create a celebratory, upscale look without overwhelming the cupcake itself.",
    },
  ];

  return (
    <>
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
              <a href="#locations">Locations</a>
              <a href="#style">Signature Style</a>
              <a href="#about">About</a>
              <a href="#order" className="navCta">
                Order Inquiry
              </a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
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
                celebrations, gifting, showers, parties, and special events.
                We currently serve <strong>Upstate South Carolina</strong> and{" "}
                <strong>Roswell, Georgia</strong> only.
              </p>

              <div className="heroActions">
                <a href="#order" className="btn btnPrimary">
                  Request an Order
                </a>
                <a href="#locations" className="btn btnSecondary">
                  See Service Areas
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
                  <div className="statLabel">clean premium style</div>
                </div>
              </div>
            </div>

            <div className="heroVisualWrap">
              <div className="heroVisual">
                <div className="cupcakeCard cupcakeTall">
                  <div className="cupcakeTop pinkGold" />
                  <div className="cupcakeBase" />
                  <div className="cupcakeLabel">Signature Swirl</div>
                </div>

                <div className="cupcakeCard cupcakeMedium">
                  <div className="cupcakeTop lemonGold" />
                  <div className="cupcakeBase" />
                  <div className="cupcakeLabel">Elegant Finish</div>
                </div>

                <div className="cupcakeCard cupcakeShort">
                  <div className="cupcakeTop strawberryGold" />
                  <div className="cupcakeBase" />
                  <div className="cupcakeLabel">Gold Detail</div>
                </div>

                <div className="floatingBadge badgeOne">Lemon Luxe</div>
                <div className="floatingBadge badgeTwo">Vanilla Gold</div>
                <div className="floatingBadge badgeThree">
                  Strawberry Vanilla Swirl
                </div>
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
                A polished, crowd-pleasing menu built around classic flavors
                with a luxurious finish. The aesthetic is celebratory, clean,
                and giftable.
              </p>
            </div>

            <div className="cardGrid threeUp">
              {menuItems.map((item) => (
                <article key={item.name} className="card menuCard">
                  <div className="menuAccent" />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="section sectionSoft">
          <div className="container">
            <div className="sectionIntro">
              <p className="sectionKicker">Locations</p>
              <h2>Where we currently serve</h2>
              <p className="sectionCopy">
                Glitter &amp; Gold Cupcake Company is intentionally focused on
                two local markets. Orders are currently available only in the
                locations below.
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

        <section id="style" className="section">
          <div className="container styleLayout">
            <div className="styleLeft">
              <p className="sectionKicker">Signature Style</p>
              <h2>The icing is intentionally clean</h2>
              <p className="sectionCopy">
                Every cupcake features our signature swirl, a clean, elevated,
                upward build that feels refined and timeless. We focus on
                consistent premium presentation rather than cluttered decoration.
              </p>

              <div className="stylePanel">
                <div className="styleSwirlArt">
                  <div className="swirl swirl1" />
                  <div className="swirl swirl2" />
                  <div className="swirl swirl3" />
                  <div className="swirl swirl4" />
                  <div className="swirlBase" />
                </div>
                <div>
                  <h3>Classic Swirl Finish</h3>
                  <p>
                    The beauty is in the structure. Balanced shape, premium
                    finish, and visual consistency create the brand.
                  </p>
                </div>
              </div>
            </div>

            <div className="styleRight">
              {stylePoints.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
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
                This is not positioned as a casual cupcake stand. It is a
                polished dessert brand built around presentation, celebration,
                local focus, and visual elegance.
              </p>
            </div>

            <div className="featureStrip">
              <div className="featureBox">
                <h3>Premium Presentation</h3>
                <p>
                  Designed to feel beautiful in a gift box, on a dessert table,
                  or at an event.
                </p>
              </div>
              <div className="featureBox">
                <h3>Classic Flavors, Elevated</h3>
                <p>
                  Familiar favorites presented in a more elegant and memorable
                  way.
                </p>
              </div>
              <div className="featureBox">
                <h3>Focused Local Service</h3>
                <p>
                  Serving only Upstate South Carolina and Roswell, Georgia keeps
                  the brand selective and intentional.
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
                Planning a shower, celebration, party, gifting moment, or custom
                dessert table? Glitter &amp; Gold Cupcake Company is currently
                accepting inquiries for <strong>Upstate South Carolina</strong>{" "}
                and <strong>Roswell, Georgia</strong>.
              </p>

              <div className="ctaActions">
                <a
                  href="mailto:hello@glitterandgoldcupcakes.com"
                  className="btn btnPrimary"
                >
                  Email to Order
                </a>
                <a href="#menu" className="btn btnSecondary">
                  View Menu
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerInner">
            <div>
              © 2026 Glitter &amp; Gold Cupcake Company
            </div>
            <div>
              Available only in Upstate South Carolina and Roswell, Georgia
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(232, 94, 162, 0.16), transparent 28%),
            radial-gradient(circle at top right, rgba(216, 169, 58, 0.16), transparent 30%),
            linear-gradient(180deg, #fffafc 0%, #fff7fb 38%, #fffefb 100%);
          color: #24151f;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        :global(*) {
          box-sizing: border-box;
        }

        :global(a) {
          color: inherit;
          text-decoration: none;
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
          background: rgba(255, 249, 252, 0.78);
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
          min-width: 0;
        }

        .brandMark {
          width: 50px;
          height: 50px;
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
          font-size: 1.12rem;
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
          padding: 72px 0 44px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 38px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.75);
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
          font-size: clamp(2.7rem, 5vw, 5.2rem);
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
          background: rgba(255, 255, 255, 0.78);
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

        .heroVisualWrap {
          display: flex;
          justify-content: center;
        }

        .heroVisual {
          position: relative;
          width: 100%;
          min-height: 560px;
          border-radius: 34px;
          background:
            radial-gradient(circle at top, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.2)),
            linear-gradient(180deg, rgba(255, 245, 250, 0.9), rgba(255, 255, 255, 0.85));
          border: 1px solid rgba(159, 111, 137, 0.14);
          box-shadow: 0 24px 70px rgba(117, 55, 87, 0.12);
          overflow: hidden;
        }

        .heroVisual::before {
          content: "";
          position: absolute;
          inset: auto auto 0 -10%;
          width: 120%;
          height: 160px;
          background: radial-gradient(circle at center, rgba(216, 169, 58, 0.12), transparent 60%);
        }

        .cupcakeCard {
          position: absolute;
          width: 170px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 12px 12px;
          border-radius: 26px;
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(159, 111, 137, 0.12);
          backdrop-filter: blur(10px);
          box-shadow: 0 16px 38px rgba(117, 55, 87, 0.1);
        }

        .cupcakeTall {
          left: 10%;
          top: 20%;
        }

        .cupcakeMedium {
          right: 12%;
          top: 16%;
        }

        .cupcakeShort {
          left: 34%;
          bottom: 11%;
        }

        .cupcakeTop {
          width: 108px;
          height: 108px;
          border-radius: 50% 50% 46% 46%;
          position: relative;
          margin-bottom: 10px;
        }

        .cupcakeTop::before,
        .cupcakeTop::after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 999px;
        }

        .cupcakeTop::before {
          width: 76px;
          height: 34px;
          top: 24px;
          background: rgba(255, 255, 255, 0.5);
          filter: blur(8px);
        }

        .cupcakeTop::after {
          width: 18px;
          height: 18px;
          top: 10px;
          background: linear-gradient(135deg, #d8a93a, #f4d37b);
          box-shadow: 0 0 0 5px rgba(216, 169, 58, 0.12);
        }

        .pinkGold {
          background:
            radial-gradient(circle at 35% 28%, rgba(255,255,255,0.9), rgba(255,255,255,0) 20%),
            linear-gradient(180deg, #ffd7ec 0%, #f6a7ce 55%, #ea74af 100%);
        }

        .lemonGold {
          background:
            radial-gradient(circle at 35% 28%, rgba(255,255,255,0.9), rgba(255,255,255,0) 20%),
            linear-gradient(180deg, #fff3b9 0%, #f4d86b 58%, #e1b941 100%);
        }

        .strawberryGold {
          background:
            radial-gradient(circle at 35% 28%, rgba(255,255,255,0.9), rgba(255,255,255,0) 20%),
            linear-gradient(180deg, #ffd4df 0%, #f39abb 55%, #dd6f98 100%);
        }

        .cupcakeBase {
          width: 76px;
          height: 56px;
          border-radius: 0 0 16px 16px;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.34) 0 10%, transparent 10% 20%, rgba(255,255,255,0.26) 20% 30%, transparent 30% 40%, rgba(255,255,255,0.26) 40% 50%, transparent 50% 60%, rgba(255,255,255,0.26) 60% 70%, transparent 70% 80%, rgba(255,255,255,0.24) 80% 90%, transparent 90% 100%),
            linear-gradient(180deg, #e5be58, #c89328);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
        }

        .cupcakeLabel {
          margin-top: 12px;
          font-size: 0.85rem;
          color: #6b5262;
          text-align: center;
          font-weight: 600;
        }

        .floatingBadge {
          position: absolute;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(159, 111, 137, 0.12);
          box-shadow: 0 12px 30px rgba(117, 55, 87, 0.08);
          color: #6b5262;
          font-size: 0.88rem;
          font-weight: 700;
        }

        .badgeOne {
          left: 8%;
          bottom: 10%;
        }

        .badgeTwo {
          right: 8%;
          bottom: 22%;
        }

        .badgeThree {
          right: 14%;
          top: 8%;
        }

        .section {
          padding: 58px 0;
        }

        .sectionSoft {
          background: linear-gradient(180deg, rgba(255, 250, 252, 0.82), rgba(255, 255, 255, 0.9));
          border-top: 1px solid rgba(159, 111, 137, 0.08);
          border-bottom: 1px solid rgba(159, 111, 137, 0.08);
        }

        .sectionIntro {
          margin-bottom: 28px;
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
          font-size: clamp(2rem, 3vw, 3.1rem);
          line-height: 1.04;
        }

        .sectionCopy,
        .ctaCopy {
          max-width: 70ch;
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

        .twoUp {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .card,
        .featureBox,
        .ctaPanel,
        .stylePanel {
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(159, 111, 137, 0.12);
          box-shadow: 0 18px 44px rgba(117, 55, 87, 0.08);
        }

        .card {
          border-radius: 24px;
          padding: 24px;
        }

        .menuCard {
          position: relative;
          overflow: hidden;
        }

        .menuAccent {
          width: 64px;
          height: 6px;
          border-radius: 999px;
          background: linear-gradient(135deg, #e85ea2, #d8a93a);
          margin-bottom: 18px;
        }

        h3 {
          margin: 0 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.34rem;
        }

        .card p,
        .featureBox p,
        .stylePanel p {
          margin: 0;
          color: #6b5262;
          line-height: 1.75;
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

        .styleLayout {
          display: grid;
          grid-template-columns: 1.06fr 0.94fr;
          gap: 24px;
          align-items: start;
        }

        .styleLeft {
          min-width: 0;
        }

        .stylePanel {
          margin-top: 24px;
          border-radius: 28px;
          padding: 24px;
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 20px;
          align-items: center;
        }

        .styleSwirlArt {
          position: relative;
          width: 150px;
          height: 170px;
          margin: 0 auto;
        }

        .swirl {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 999px;
          background:
            radial-gradient(circle at 35% 28%, rgba(255,255,255,0.9), rgba(255,255,255,0) 20%),
            linear-gradient(180deg, #ffd7ec 0%, #f5a3ca 58%, #e978b1 100%);
          box-shadow: 0 8px 16px rgba(200, 63, 134, 0.08);
        }

        .swirl1 {
          width: 34px;
          height: 24px;
          top: 8px;
        }

        .swirl2 {
          width: 54px;
          height: 28px;
          top: 28px;
        }

        .swirl3 {
          width: 82px;
          height: 38px;
          top: 50px;
        }

        .swirl4 {
          width: 112px;
          height: 54px;
          top: 84px;
          border-radius: 999px 999px 46px 46px;
        }

        .swirlBase {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 84px;
          height: 56px;
          border-radius: 0 0 16px 16px;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.34) 0 10%, transparent 10% 20%, rgba(255,255,255,0.26) 20% 30%, transparent 30% 40%, rgba(255,255,255,0.26) 40% 50%, transparent 50% 60%, rgba(255,255,255,0.26) 60% 70%, transparent 70% 80%, rgba(255,255,255,0.24) 80% 90%, transparent 90% 100%),
            linear-gradient(180deg, #e5be58, #c89328);
        }

        .styleRight {
          display: grid;
          gap: 18px;
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
          padding: 38px 28px;
          background:
            radial-gradient(circle at top, rgba(255, 255, 255, 0.9), rgba(255,255,255,0.55)),
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
          .heroGrid,
          .styleLayout {
            grid-template-columns: 1fr;
          }

          .heroVisual {
            min-height: 500px;
          }
        }

        @media (max-width: 900px) {
          .threeUp,
          .featureStrip,
          .heroStats {
            grid-template-columns: 1fr;
          }

          .twoUp {
            grid-template-columns: 1fr;
          }

          .stylePanel {
            grid-template-columns: 1fr;
            text-align: center;
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

          .heroVisual {
            min-height: 540px;
          }

          .cupcakeTall {
            left: 4%;
            top: 17%;
          }

          .cupcakeMedium {
            right: 4%;
            top: 12%;
          }

          .cupcakeShort {
            left: 24%;
            bottom: 13%;
          }

          .cupcakeCard {
            width: 144px;
          }

          .cupcakeTop {
            width: 90px;
            height: 90px;
          }

          h1 {
            line-height: 1.02;
          }
        }
      `}</style>
    </>
  );
}
