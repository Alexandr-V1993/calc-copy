import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до выходных | Выходные и праздничные дни",
  description: "Сколько дней осталось до выходных | Выходные и праздничные дни",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://boxcalculators.ru/until-event-weekends"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
