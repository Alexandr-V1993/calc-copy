import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней осталось до лета",
  description:
    "Узнайте сколько времени осталось до лета с помощью нашего онлайн калькулятора. Он проводит отсчет дней, часов, минут и секунд до начала этого солнечного сезона.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://boxcalculators.ru/until-event-summer"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
