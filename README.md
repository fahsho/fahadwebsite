This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

![Deploy Status](https://github.com/fahadshoukat/fahadwebsite/actions/workflows/deploy.yml/badge.svg)

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

## Deployment

### GitHub Pages

This project is automatically deployed to GitHub Pages via GitHub Actions. The deployment workflow runs on every push to the `main` branch.

**Status:** ![Deploy Status](https://github.com/fahadshoukat/fahadwebsite/actions/workflows/deploy.yml/badge.svg)

**Live Site:** [https://fahadshoukat.com](https://fahadshoukat.com)

To enable GitHub Pages with custom domain:
1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Under **Custom domain**, enter `fahadshoukat.com` and save
4. Configure your DNS records:
   - Add an A record pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or add a CNAME record pointing to `fahsho.github.io` (if using www subdomain)
5. The workflow will automatically deploy on the next push to `main`

### Deploy on Vercel

Alternatively, you can deploy your Next.js app using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
