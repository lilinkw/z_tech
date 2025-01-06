This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Introduction
- Project to clone z-tech landing page by Linh (Adrian) Nguyen
### Tech stack
- `NextJs` 15
- `Tailwindcss`
- `typescript`
- `vercel` to deploy
### Deployed web page
https://z-tech-gilt.vercel.app
### Git hub link
https://github.com/lilinkw/z_tech

### What have been done

- Using App routing from `NextJs` 15
- Using `Next/Image` to loading image
- Using `tailwindcss` to config and style `css`
- Utilize `typescript` and `eslint` for better development experience
- Utilize `next-international` for multiple languages
- Utilize `class-variance-authority` for creating multiple component variants
- Utilize `use client` to separate with server component
- Responsive Style for multiple device using `tailwindcss`
- Utilize `React hooks` as long as `custom hooks`
- Utilize `Vercel` and `GitHub` for CICD

### What have not been done

- Utilize `meta data` for better SEO. Why? Have not find a way to work with new library `next-international`
- Responsive Style for only for **two device** is consider `Iphone XS` and `Desktop 24inch`
- Style for background image is not perfect

## Web page first look

### Desktop

[!desktop](z-tech-desktop-top-page.png)

### Mobile

[!mobile](z-tech-mobile-top-page.png)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
