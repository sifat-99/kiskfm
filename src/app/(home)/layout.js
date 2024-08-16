import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";
import { MenuBar } from "@/components/Navbar/MenuBar";
import Footer from "@/components/Footer/Footer";



export const metadata = {
  title: "Kishorgonj Keshba Fazil Madrasha",
  description: "Generated by Sifat",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar  data-testid="nab" />
        <div style={{ position: "sticky", top: 0, width: "100%", zIndex: 50, transition:"ease-in-out" }}>
          <MenuBar />
        </div>

        <div className="max-w-7xl mx-auto">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}

