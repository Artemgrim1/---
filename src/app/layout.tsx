export const metadata = {
  title: "Arbat — объявления рядом",
  description: "Простая и удобная площадка для размещения объявлений",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
