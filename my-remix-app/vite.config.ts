import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths"
import { remixPWA } from '@remix-pwa/dev'

installGlobals();

export default defineConfig({
  plugins: [remix(
      // { ssr: false }
  ),
    remixPWA({
      //workerMinify: true,
      //workerEntryPoint: './runtime.js'
    }),
    tsconfigPaths()],
});
