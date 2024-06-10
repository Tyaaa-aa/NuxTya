
# NuxTya

### A no-nonsense minimal starter template for Nuxt 3 that prioritizes a clean and customizable base for your projects.
[![Features](https://skillicons.dev/icons?i=nuxt,pinia,typescript,tailwind,supabase,bun)](https://nuxtya.tya.design/)

## Features 

-   **🖥️ Shadcn-vue:** Beautiful and accessible UI components built with Radix Vue, and Tailwind CSS.
-   **🍍 Pinia Store:** Lightweight state management solution. 
-   **⌨️ TypeScript:** Enables type safety and improved development experience.
-   **💨 Tailwind:** Provides a utility-first CSS framework for rapid styling.
-   **🛡️ Nuxt-Security:** Automatically configure your app to follow OWASP security patterns and principles.
-   **💾 Supabase (optional):** Supabase is an open source Firebase alternative. (See the supabase branch)

## Getting Started

This starter template provides a clean foundation for your Nuxt 3 projects. Because of Nuxt's modularity you can remove any unwanted features and customize it to fit your specific needs.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt 3 and its features.

**Here's a quick guide to get you started:**

1.  **Choose your version:** If you want Supabase out of the box select the correct branch first
2.  **Clone the repository:** Clone this repository or download the zip file.
4.  **Install dependencies:** Run the appropriate installation command based on your package manager (npm, pnpm, yarn, or bun).
6.  **Start the development server:** Run the development server command to start the application locally on `http://localhost:3000`.
8.  **Customize and develop:** Remove any unwanted features or components and start building your application using Nuxt 3 functionalities.

**Remember:** This is a minimal starter template. Feel free to add additional features and functionalities as needed for your project.

## Setup

Make sure to install the dependencies:

```
# npm
npm install

# pnpm
pnpm install

# bun
bun install

```


## Development Server

Start the development server on `http://localhost:3000`:

```
# npm
npm run dev

# pnpm
pnpm run dev

# bun
bun run dev

```

## Production

Build the application for production:

```
# npm
npm run build

# pnpm
pnpm run build

# bun
bun run build

```

Locally preview production build:

```
# npm
npm run preview

# pnpm
pnpm run preview

# bun
bun run preview

```


Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information on deploying your Nuxt 3 application.

See the [Shadcn-vue docs](https://www.shadcn-vue.com/docs/introduction.html) to see how to use it.

**[FIX 10 Jun 2024]** Currently shadcn-vue@latest is broken and does not add the components correctly for Nuxt. They end up in a folder somewhere outside your working directory. Please use v0.10.4 until this issue has been fixed by the shadcn-vue team. 

***bunx*** may also not work properly, if so using ***npx*** may be preferable for adding components.

Example: 
```
npx shadcn-vue@v0.10.4 add COMPONENT_NAME
```
Buttons and Tooltips are already included

I hope you enjoy using NuxTya! If you have any feedback open an issue and I'll take a look.
