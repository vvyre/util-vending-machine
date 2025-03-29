import { Grid } from '~/_components/_common/grid';
import { Category } from '~/_components/category/category';
import { getCssText } from '~/stitches.config';
import setGlobalStyle from '~/_components/_common/_global-style.css';
import 'jotai-devtools/styles.css';
import { DevTools } from 'jotai-devtools';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  setGlobalStyle();
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300..800&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        <DevTools />
        <Grid>{children}</Grid>
        <Category />
      </body>
    </html>
  );
}
