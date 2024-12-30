# Astro + Atomico + Cloudflare worker bug

Refer to https://github.com/atomicojs/atomico/issues/129 for more details.

## Steps to reproduce

### Local wrangler

1. Install depdendencies

    ```sh
    pnpm install
    ```

1. Run `wrangler` locally
   
    ```sh
    pnpm preview
    ```

1. You should see the `document is not defined` error.

1. Done.

---
