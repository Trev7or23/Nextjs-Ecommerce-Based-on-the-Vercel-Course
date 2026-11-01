import type { ReactNode } from "react";
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

interface Props {
  children: ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
