import "./globals.css";
import NavigationWrapper from "./wrappers/navigation-wrapper";
import Footer from "./components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="pt-12">
        <NavigationWrapper>{children}</NavigationWrapper>
        <Footer/>
      </body>
    </html>
  );
}
