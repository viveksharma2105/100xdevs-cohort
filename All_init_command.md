
---------------------------------------------- Nodejs Setup -------------------------------------------------
=> Initilize__node__project  =  npm init -y


=> Install__dependencies = npm install express


=> Creat__empty__indexdotjs = touch index.js


=> write your code 
  



--------------------------------------------------------------------------------------------------------------
---------------------------------------------- React Setup ---------------------------------------------------
=> npm create vite@latest

=> give project name 

=> select react >>> then javascript 

=> cd in project >>> npm install >>>> npm run dev









---------------------------------------------------------------------------------------------------------
----------------------------------------------- Tailwind ------------------------------------------------
=> npm install -D tailwindcss@3 postcss autoprefixer
 
=> npx tailwindcss init -p
  
=> In tailwind.config.js   content [...]=  "./src/**/*.{js,ts,jsx,tsx}"


=> In index.css =  @tailwind base;

                   @tailwind components;

                   @tailwind utilities;






----------------------------------------------------------------------------------------------------------
-----------------------------------------------TypeScript-------------------------------------------------
npm init -y
npm install typescript
npx  tsc --init

For Run= npx tcs -b 


====>>> for git  we  have to seprate .ts and .js file in seprate folder, Go to the tsconfig.json and add this
       " rootDir": "./src",
       "outDir": "./dist"







## References
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
- [Node.js Docs](https://nodejs.org/en/docs/) 