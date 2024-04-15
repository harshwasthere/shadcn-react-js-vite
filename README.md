# shadcn-react-js-vite

Using this code you can work with `shadcn/ui` components in a  react `javascript` project.

![shadcnJS](https://github.com/Harsh12Codes/shadcn-react-js-vite/assets/83909388/401b5ac6-a8da-4b28-9813-4f525834ecf9)

### Create project

Start by creating a new React project using `vite`:

```bash
npm create vite@latest
```

![image](https://github.com/Harsh12Codes/shadcn-react-js-vite/assets/83909388/916a657c-1343-4d36-9abf-708431c6c0a2)

```bash
npm install
```



### Add Tailwind and its configuration

Install `tailwindcss` and its peer dependencies, then generate your `tailwind.config.js` and `postcss.config.js` files:

```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

### Add jsconfig.json file

Add the following code to the `jsconfig.json` file to resolve paths:

```ts {4-9} showLineNumbers
{
    "compilerOptions": {
        "paths": {
            "@/*": ["./*"]
        }
    }
}
```

### Update vite.config.js

Add the following code to the vite.config.js so your app can resolve paths without error

```typescript
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import react from "@vitejs/plugin-react-swc"; *for swc install
const __dirname = path.dirname("./src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname),
    },
  },
});

```

### Run the CLI

Run the `shadcn-ui` init command to setup your project:

```bash
npx shadcn-ui@latest init
```

### Configure components.json

You will be asked a few questions to configure `components.json`:

```txt showLineNumbers
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › src/index.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes (no)
```
![image](https://github.com/Harsh12Codes/shadcn-react-js-vite/assets/83909388/6b314210-2a4c-46bd-8bea-d58a0bb11f3b)


### That's it

You can now start adding components to your project.

```bash
npx shadcn-ui@latest add button
```

The command above will add the `Button` component to your project. You can then import it like this:

```tsx {1,6} showLineNumbers
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```
