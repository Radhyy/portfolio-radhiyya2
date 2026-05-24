import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfolio",
    short_name: "Portfolio",
    description: "Portfolio website",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#f4f7f6",
    icons: [
      {
        src: "/logo.PNG",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
