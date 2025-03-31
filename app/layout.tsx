import '~/_components/_common/_global-style.css';
import { Grid } from '~/_components/_common/grid';
import { Category } from '~/_components/category/category';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Grid>{children}</Grid>
        <Category />
      </body>
    </html>
  );
}
