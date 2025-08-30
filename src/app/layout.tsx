import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warikan",
  description: "Warikan",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
