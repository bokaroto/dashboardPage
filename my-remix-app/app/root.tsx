import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import styles from './tailwind.css';
// import Navigation from '~/components/Navigation';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  // return (
  //   <html lang="en" className="h-full bg-red-500">
  //     <head>
  //       <Meta />
  //       <Links />
  //     </head>
  //     <body className="h-full">
  //       <h1>ROOT</h1>
  //       {/* <Navigation /> */}
  //       <Outlet />
  //       <ScrollRestoration />
  //       <Scripts />
  // <LiveReload />
  //     </body>
  //   </html>
  // );

  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
      </head>
      <body>
        {/* <h1>test</h1> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
