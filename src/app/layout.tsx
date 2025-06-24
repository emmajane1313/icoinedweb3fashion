import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I Coined Web3 Fashion by Emma-Jane MacKinnon-Lee",
  description: "I Coined Web3 Fashion. Digicore Everything.",
  metadataBase: new URL("https://icoinedweb3fashion.com/"),
  twitter: {
    card: "summary_large_image",
    creator: "@emmajane1313",
    title: "I Coined Web3 Fashion by Emma-Jane MacKinnon-Lee",
    description: "I Coined Web3 Fashion. Digicore Everything.",
  },
  openGraph: {
    title: "I Coined Web3 Fashion by Emma-Jane MacKinnon-Lee",
    description: "I Coined Web3 Fashion. Digicore Everything.",
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "digitalax",
    "f3manifesto",
    "syntheticfutures",
    "Women",
    "Life",
    "Freedom",
  ],
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              sameAs: [
                "https://emmajanemackinnonlee.com/",
                "https://emmajanemackinnonlee.xyz/",
                "https://emmajanemackinnonlee.net/",
                "https://emmajanemackinnonlee.info/",
                "https://emmajanemackinnonlee.ai/",
                "https://emmajane.net/",
                "https://syntheticfutures.xyz/",
                "https://icoinedweb3fashion.com/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
