import NextHead from "next/head";

export default function Head({
  title,
  description,
  keywords,
  others,
}: {
  title: string;
  description: string;
  keywords: string[];
  others?: {
    [key: string]: string;
  };
}) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-navbutton-color" content="#000000" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="notranslate" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />
      <meta name="referrer" content="no-referrer" />
      <meta name="author" content="Merlin" />
      <meta name="language" content="PT-BR" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />

      <link rel="manifest" href="/static/manifest.json" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/apple-touch-icon.webp" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/static/apple-icon-57x57.png"
      />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="msapplication-TileImage"
        content="/static/ms-icon-144x144.png"
      />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <meta name="theme-color" content="#000000" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      {others &&
        Object.keys(others).map((key) => (
          <meta key={key} name={key} content={others[key]} />
        ))}
    </NextHead>
  );
}
