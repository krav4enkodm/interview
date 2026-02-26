This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## API Endpoints

This project includes a simple interview API implemented with Next.js route handlers.

- `GET /api/v1/health`
- `GET /api/v1/customers`
- `GET /api/v1/customers/{customerId}`
- `GET /api/v1/vehicles`
- `GET /api/v1/vehicles/{vehicleId}`
- `GET /api/v1/repair-orders`
- `GET /api/v1/repair-orders/{roId}`
- `GET /api/v1/dashboard/kpis`

OpenAPI schema:

- `GET /api/openapi.json` (alias: `/api/openapi`)

Schema generation approach:

- Resource contracts are defined in Zod at `lib/api-schemas.ts`
- Routes are registered with `@asteasolutions/zod-to-openapi` in `lib/openapi.ts`
- Full OpenAPI document (`paths` + `components`) is generated from registry definitions

Generate TypeScript types:

```bash
npx openapi-typescript http://localhost:3000/api/openapi.json -o lib/api.types.ts
```

Generated types location in this repo:

- `lib/api.types.ts`

Typed fetch client setup:

- `lib/api-client.ts` creates `openapi-fetch` + `openapi-react-query` client
- `app/providers.tsx` registers `QueryClientProvider`
- `app/customers-panel.tsx` shows typed query usage (`$api.useQuery("get", "/api/v1/customers")`)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
