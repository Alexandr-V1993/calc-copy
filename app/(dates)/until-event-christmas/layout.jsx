import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Сколько дней до Рождества | Рождество Христово",
  description:
    "Отсчитывайте с нами секунды до Рождества! Погрузитесь в атмосферу праздника с обратным отсчетом. Узнайте, сколько времени осталось и получите вдохновение для подготовки к волшебным моментам праздника!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <link
        rel="canonical"
        href={"http://calcoffee.ru/until-event-christmas"}
      />

      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
