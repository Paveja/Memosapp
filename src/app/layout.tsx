import type { Metadata } from "next";
import "./globals.css";
import "./auth.css";

export const metadata: Metadata = {
  title: "FlowDesk — Move work forward",
  description: "A calmer way for ambitious teams to ship together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
