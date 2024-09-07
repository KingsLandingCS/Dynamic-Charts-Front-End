import './globals.css'; // Import your global styles if you have any
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export const metadata = {
  title: 'Bootstrap in Next.js',
  description: 'Next.js app with Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
