import Navbar from "@/components/Navbar/Navbar";
import "../globals.css";
import { MenuBar } from "@/components/Navbar/MenuBar";
import Footer from "@/components/Footer/Footer";

export async function generateMetadata({ params }) {
  return {
    title: ` Kishorgonj Keshba Fazil Madrasha | Home`,
    description: "Created by MD. Abdur Rahman Sifat",
  };
}

export default function HomeLayout({ children }) {
  return (
    <section>
      <Navbar data-testid="nab" />
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 20,
          transition: "ease-in-out",
        }}
      >
        <MenuBar />
      </div>

      <div className="px-4 lg:px-20 mx-auto">{children}</div>
      <Footer />
    </section>
  );
}
