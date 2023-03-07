import "./globals.css";
import NavigationWrapper from "./wrappers/navigation-wrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="pt-14">
        <NavigationWrapper>{children}</NavigationWrapper>
      </body>
    </html>
  );
}
