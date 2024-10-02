import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Hydra VR - Immersive Virtual Reality Experiences</title>
        <meta
          name="description"
          content="Discover cutting-edge VR technologies and hardware with Hydra VR. Experience simulation, education, self-care, and outdoor adventures in virtual reality."
        />
        <meta
          property="og:title"
          content="Hydra VR - Immersive Virtual Reality Experiences"
        />
        <meta
          property="og:description"
          content="Explore the future of VR with Hydra. Simulation, education, self-care, and outdoor adventures in virtual reality."
        />
        <meta property="og:url" content="https://hydra-sooty.vercel.app/" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C0B7E8" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hydra VR",
            description:
              "Cutting-edge virtual reality experiences for simulation, education, self-care, and outdoor adventures.",
            url: "https://hydra-sooty.vercel.app/",
            logo: "https://hydra-sooty.vercel.app/logo.svg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "(110) 1111-1010",
              contactType: "customer service",
              email: "Contact@HydraVTech.com",
            },
          })}
        </script>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
