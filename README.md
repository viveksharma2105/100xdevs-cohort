# 🚀 Project Setup Guide

--------------------------------------------------------

# 🟢 Node.js Setup

## 1️⃣ Initialize Node Project
```bash
npm init -y
```

## 2️⃣ Install Dependencies
```bash
npm install express
```

## 3️⃣ Create Empty `index.js`
```bash
touch index.js
```

## 4️⃣ Write Your Code
Open `index.js` and start writing your server code.

--------------------------------------------------------

# ⚛️ React Setup (Vite)

## 1️⃣ Create Vite Project
```bash
npm create vite@latest myapp
```

- Select **React**
- Select **JavaScript**

## 2️⃣ Install & Run
```bash
cd your-project-name
npm install
npm run dev
```

--------------------------------------------------------

# 🎨 Tailwind CSS Setup

## 1️⃣ Install Tailwind & Dependencies
```bash
npm install -D tailwindcss@3 postcss autoprefixer
```

## 2️⃣ Initialize Tailwind
```bash
npx tailwindcss init -p
```

## 3️⃣ Configure `tailwind.config.js`

Update the `content` array:

```js
content: ["./src/**/*.{js,ts,jsx,tsx}"],
```

## 4️⃣ Add Tailwind to `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

--------------------------------------------------------

# 🔵 TypeScript Setup

## 1️⃣ Initialize Project
```bash
npm init -y
```

## 2️⃣ Install TypeScript
```bash
npm install typescript
```

## 3️⃣ Initialize TypeScript Config
```bash
npx tsc --init
```

## 4️⃣ Run TypeScript Compiler
```bash
npx tsc -b
```



# 🔧 TypeScript + Git Setup (Separate TS & JS Folders)

Open `tsconfig.json` and add:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

- `src` → contains `.ts` files  
- `dist` → contains compiled `.js` files  

--------------------------------------------------------

# 🗄️ Prisma + Pg + Migration folder Setup

## 1️⃣ Install Prisma
```bash
npm install prisma --save-dev
npm install @prisma/client
```

## 2️⃣ Initialize Prisma
```bash
npx prisma init
```

This will create:
- `prisma/schema.prisma`
- `.env`


## 3️⃣ PostgreSQL Connection
```bash
npm install pg @types/pg
```

## Run Migration
```bash
npx prisma migrate dev
```



## References
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
- [Node.js Docs](https://nodejs.org/en/docs/) 
