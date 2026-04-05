import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glitter & Gold Cupcake Company",
  description:
    "Premium small-batch cupcakes with boutique styling for celebrations, showers, birthdays, and special events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
