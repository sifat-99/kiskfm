import FBMessanger from "@/components/FBMessanger/FBMessanger";
// import { CartProvider } from "@/utils/Cart/CartContext";
// import { QueryProvider } from "@/utils/QueryClientProvider";
import AuthProvider from "@/utils/SessionProvider";
// import { Toaster } from "react-hot-toast";
import "./globals.css";
import Script from "next/script";

export async function generateMetadata({params}){
  return {
    title: "Kishorgonj Keshba Fazil Madrasha",
    description: "Created by MD. Abdur Rahman Sifat",
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-84C4EWC79S"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-84C4EWC79S');
  `}
        </Script>
      </head>
      <body>
        <AuthProvider>
          {/* <QueryProvider>
            <CartProvider> */}
          <main>{children}</main>
          {/* </CartProvider>
          </QueryProvider> */}
        </AuthProvider>
      </body>
    </html>
  );
}
