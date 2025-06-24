import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://icoinedweb3fashion.com";

  const rootUrl = `
    <url>
      <loc>${baseUrl}/</loc>
       <image:image>
          <image:loc>${baseUrl}/images/emmajanemackinnonlee.png</image:loc>
          <image:title><![CDATA[I Coined Web3 Fashion | Emma-Jane MacKinnon-Lee]]></image:title>
          <image:caption><![CDATA[I Coined Web3 Fashion | Emma-Jane MacKinnon-Lee]]></image:caption>
        </image:image>
    </url>
  `;

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
   xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  ${rootUrl}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
