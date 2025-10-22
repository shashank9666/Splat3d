import "./globals.css";

export const metadata = {
  title: "Splat Viewer 3D",
  description: "Created with R3F, Drei, NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
