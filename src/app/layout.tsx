import "./globals.css";
import SideBar from "./components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen antialiased`}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
