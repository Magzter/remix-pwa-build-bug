import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useLoaderData,
    useLocation
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";
import {NextUIProvider} from "@nextui-org/react";
import NavBar from "~/components/navbar";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import React, {useEffect, useState} from "react";
import { ManifestLink } from '@remix-pwa/sw';
import { useSWEffect } from '@remix-pwa/sw';

export const links: Links = () => [
    {rel: "stylesheet", href: stylesheet},
    {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/football.svg',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/football.svg',
    },
    {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/football.svg',
    },
    {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/football.svg',
    },
    {
        rel: 'mask-icon',
        href: '/football.svg',
        color: '#5bbad5',
    }
];

export function Layout({children}: { children: React.ReactNode }) {
    useSWEffect();

    const location = useLocation();

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <ManifestLink />
            <Links/>
        </head>

        <body>
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
                <NavBar/>
                {children}
            </NextThemesProvider>
            <ScrollRestoration/>
            <Scripts/>
        </NextUIProvider>
        </body>

        </html>
    );
}

export default function App() {
    return <Outlet/>;
}
