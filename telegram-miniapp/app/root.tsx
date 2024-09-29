import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

// Importar o arquivo Tailwind CSS
import tailwindStyles from "./tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }];
};

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Ameciclobot Mini App" },
    { viewport: "width=device-width,initial-scale=1" }
  ];
};

export default function App() {
  return (
    <html lang="pt-BR">
      <head>
        <Meta />
        <Links />
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
