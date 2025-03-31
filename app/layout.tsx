import '~/_components/_common/_global.css';
import { Grid } from '~/_components/_common/grid';
import { Category } from '~/_components/category/category';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=42dot+Sans:wght@300..800&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Grid>{children}</Grid>
        <Category />
      </body>
    </html>
  );
}
