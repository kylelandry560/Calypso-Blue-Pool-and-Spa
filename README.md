<<<<<<< vike-scaffold
Generated with [Bati](https://batijs.dev) ([version 271](https://www.npmjs.com/package/create-bati/v/0.0.271)) using this command:

```sh
pnpm create bati --react --tailwindcss --mantine --authjs --telefunc --express --prisma --google-analytics --vercel --eslint --prettier
```

# Next steps
## *Prisma*
### Setup
Run the following command once:
```sh
pnpx prisma init
```

then follow instructions at <https://www.prisma.io/docs/getting-started/quickstart#2-model-your-data-in-the-prisma-schema>

# About this app
This app is ready to start. It's powered by [Vike](https://vike.dev) and [React](https://react.dev/learn).

### `/pages/+config.ts`

Such `+` files are [the interface](https://vike.dev/config) between Vike and your code. It defines:
- A default [`<Layout>` component](https://vike.dev/Layout) (that wraps your [`<Page>` components](https://vike.dev/Page)).
- A default [`title`](https://vike.dev/title).
- Global [`<head>` tags](https://vike.dev/head-tags).

### Routing

[Vike's built-in router](https://vike.dev/routing) lets you choose between:
 - [Filesystem Routing](https://vike.dev/filesystem-routing) (the URL of a page is determined based on where its `+Page.jsx` file is located on the filesystem)
 - [Route Strings](https://vike.dev/route-string)
 - [Route Functions](https://vike.dev/route-function)

### `/pages/_error/+Page.jsx`

The [error page](https://vike.dev/error-page) which is rendered when errors occur.

### `/pages/+onPageTransitionStart.ts` and `/pages/+onPageTransitionEnd.ts`

The [`onPageTransitionStart()` hook](https://vike.dev/onPageTransitionStart), together with [`onPageTransitionEnd()`](https://vike.dev/onPageTransitionEnd), enables you to implement page transition animations.

### SSR

SSR is enabled by default. You can [disable it](https://vike.dev/ssr) for all your pages or only for some pages.

### HTML Streaming

You can enable/disable [HTML streaming](https://vike.dev/streaming) for all your pages, or only for some pages while still using it for others.



## Mantine

This is a boilerplate for Mantine based on the [Getting Started](https://mantine.dev/docs/getting-started/) guide.

The following Packages are installed:
* `@mantine/hooks` Hooks for state and UI management
* `@mantine/core` Core components library: inputs, buttons, overlays, etc.

If you add more packages, make sure to update the `layouts/LayoutDefault.tsx` file to include the required CSSs.

The theme is defined in `layouts/theme.ts`.

=======
Vike + Bati
>>>>>>> main
