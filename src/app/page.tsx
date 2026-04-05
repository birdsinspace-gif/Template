"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Page() {
  const { scrollY } = useScroll();

  const heroImageY = useTransform(scrollY, [0, 700], [0, 120]);
  const heroCopyY = useTransform(scrollY, [0, 500], [0, -28]);

  const offerings = [
    {
      title: "Celebration Cupcakes",
      body: "Elegant cupcakes for birthdays, showers, parties, church events, and family moments that deserve something beautiful.",
    },
    {
      title: "Custom Design Orders",
      body: "Soft pinks, light blues, floral piping, and polished presentation tailored to your event palette and tone.",
    },
    {
      title: "Boutique Presentation",
      body: "Designed to feel giftable, premium, and camera-ready from the first glance to the final box.",
    },
    {
      title: "Small Batch Quality",
      body: "Made in limited runs so every order feels personal, intentional, and carefully finished.",
    },
  ];

  const occasions = [
    "Baby showers",
    "Birthdays",
    "Church events",
    "Bridal celebrations",
    "Tea parties",
    "Client gifts",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Choose your date",
      body: "Start with the occasion, timing, guest count, and whether you need pickup or delivery.",
    },
    {
      number: "02",
      title: "Select your style",
      body: "Choose your cupcake look, color palette, and overall presentation direction.",
    },
    {
      number: "03",
      title: "Confirm the details",
      body: "Finalize flavors, quantities, and design notes through a simple, personal ordering process.",
    },
    {
      number: "04",
      title: "Serve beautifully",
      body: "Receive cupcakes that feel polished, joyful, and ready for the table the moment they arrive.",
    },
  ];

  const stats = [
    {
      value: "Custom",
      label: "Designed around your event palette and style",
    },
    {
      value: "Small Batch",
      label: "Limited production for quality and care",
    },
    {
      value: "Elegant",
      label: "Soft, feminine, premium visual presentation",
    },
  ];

  const gallery = [
    "/IMG_6233.JPG",
    "/IMG_6234.JPG",
    "/IMG_6235.JPG",
  ];

  return (
    <main className="min-h-screen bg-[#fff8fb] text-[#241c23]">
      <section className="relative min-h-[96vh] overflow-hidden">
        <motion.div
          style={{ y: heroImageY }}
          className="absolute inset-0 scale-110 bg-cover bg-center"
        >
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(22,16,21,0.30), rgba(22,16,21,0.66)), url('/IMG_6239.JPG')",
            }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_38%)]" />

        <div className="relative mx-auto flex min-h-[96vh] max-w-7xl items-end px-6 pb-16 pt-28 md:px-10 md:pb-20">
          <motion.div style={{ y: heroCopyY }} className="max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-sm uppercase tracking-[0.34em] text-[#f8d9e8]"
            >
              Elise&apos;s Cupcakes
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.06 }}
              className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.94] tracking-tight text-white md:text-7xl"
            >
              Premium cupcakes,
              <br />
              made for sweet occasions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.16 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-[#f4e6ee] md:text-xl"
            >
              Small-batch cupcakes with floral frosting, soft pink and blue accents,
              and a boutique presentation that feels instantly giftable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#order"
                className="rounded-2xl bg-[#ef8fb6] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#e47cab]"
              >
                Inquire About an Order
              </a>
              <a
                href="#gallery"
                className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/15"
              >
                View the Collection
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="-mt-10 relative z-10">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3 md:px-10">
          {stats.map((item) => (
            <div
              key={item.value}
              className="rounded-[1.5rem] border border-[#f0dce7] bg-white p-6 shadow-soft"
            >
              <p className="text-3xl font-semibold tracking-tight text-[#241c23]">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#6e5f69]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8e7a87]">
              The Brand
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A cupcake business built around beauty, celebration, and thoughtful presentation.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#6e5f69]">
            <p>
              Elise&apos;s Cupcakes is positioned as a boutique dessert brand for celebrations
              that deserve more than generic bakery trays.
            </p>
            <p>
              The product is designed to photograph beautifully, gift beautifully, and arrive ready
              for the moment. The tone is warm, polished, feminine, and premium.
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#f0dce7] bg-[#fdf4f8]">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-6 py-24 md:px-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8e7a87]">
                What sets it apart
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Premium styling, warm personality, and cupcakes made to feel special.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {offerings.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="rounded-[1.75rem] border border-[#f0dce7] bg-white p-8 shadow-card"
                >
                  <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#6e5f69]">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="min-h-[460px] lg:min-h-full">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(36,28,35,0.10), rgba(36,28,35,0.24)), url('/IMG_6237.JPG')",
              }}
            />
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8e7a87]">
            Gallery
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Real cupcakes. Real presentation. Real event-ready product.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="overflow-hidden rounded-[1.75rem] border border-[#f0dce7] bg-white shadow-card"
            >
              <img src={src} alt="Cupcake design" className="h-[360px] w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#e2eef9] bg-[#f3f9ff]">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-h-[460px] lg:min-h-full">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(24,20,28,0.12), rgba(24,20,28,0.24)), url('/IMG_6238.JPG')",
              }}
            />
          </div>

          <div className="px-6 py-24 md:px-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8e7a87]">
                Perfect for
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Occasions that deserve something softer, prettier, and more memorable.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {occasions.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-[#dcecf9] bg-white px-5 py-5 text-base text-[#4d4350]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#8e7a87]">
              Ordering process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Easy for the client, polished from start to finish.
            </h2>
          </div>

          <div className="space-y-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-[1.75rem] border border-[#f0dce7] bg-white p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[#8dcdf3] px-3 py-2 text-sm font-semibold text-[#173042]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[#6e5f69]">{step.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="bg-[#201a20] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#e8bfd1]">
            Order inquiry
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Cupcakes that look as special as the event feels.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#eadfe7]">
            Elise&apos;s Cupcakes is presented as a premium small-batch cupcake brand with
            boutique styling, floral frosting work, and celebration-first presentation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:orders@elisescupcakes.com"
              className="rounded-2xl bg-[#ef8fb6] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#e47cab]"
            >
              orders@elisescupcakes.com
            </a>
            <a
              href="#gallery"
              className="rounded-2xl border border-[#6b5a67] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#2a222a]"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
