import type { Metadata } from "next";
import Body from "./Body";

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
      <body>
        <Body>{children}</Body>
      </body>
    </html>
  );
};

export default RootLayout;
