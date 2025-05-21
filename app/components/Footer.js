"use client";
import React, { useEffect } from "react";

function Footer() {
  useEffect(() => {
    // Проверяем, что код выполняется только в продакшн
    if (process.env.NODE_ENV === "production") {
      // Заменяем скрипт Яндекс.Метрики
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym"
      );

      ym(102058166, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });

      window.yaContextCb = window.yaContextCb || [];
      window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
          blockId: "R-A-15325606-1",
          renderTo: "yandex_rtb_R-A-15325606-1",
        });
      });
      window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
          blockId: "R-A-15325606-2",
          renderTo: "yandex_rtb_R-A-15325606-2",
        });
      });
      // window.yaContextCb.push(() => {
      //   Ya.Context.AdvManager.render({
      //     blockId: "R-A-15325606-3",
      //     type: "fullscreen",
      //     platform: "touch",
      //   });
      // });
      // window.yaContextCb.push(() => {
      //   Ya.Context.AdvManager.render({
      //     blockId: "R-A-15325606-4",
      //     type: "fullscreen",
      //     platform: "desktop",
      //   });
      // });
      window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
          blockId: "R-A-15325606-5",
          type: "floorAd",
          platform: "touch",
        });
      });
      window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
          blockId: "R-A-15325606-6",
          type: "floorAd",
          platform: "desktop",
        });
      });
    }
  }, []);

  // Добавляем скрипты для контекстной рекламы Яндекса
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://yandex.ru/ads/system/context.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.text = "window.yaContextCb=window.yaContextCb||[]";
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-menu">
          <a className="footer-menu-item" href="/doks">
            Политика конфиденциальности
          </a>
          <a className="footer-menu-item" href="/contacts">
            Контакты
          </a>
        </div>
        <div className="footer-brand">
          <a href="/" className="footer-logo-link">
            <span className="footer-logo-text">boxcalculators.ru</span>
          </a>
          <span className="footer-copyright">© 2025 Все права защищены</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
