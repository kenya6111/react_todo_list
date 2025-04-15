# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```



## memo 

k_tanaka@tanakaknyanoAir react-todo % node -v
v22.11.0
k_tanaka@tanakaknyanoAir react-todo % npm create vite@latest
Need to install the following packages:
create-vite@6.3.1
Ok to proceed? (y) y


> npx
> cva

│
◇  Project name:
│  react-todo
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Scaffolding project in /Users/k_tanaka/hc/react/react-todo/react-todo...
│
└  Done. Now run:

  cd react-todo
  npm install
  npm run dev

k_tanaka@tanakaknyanoAir react-todo % ls
react-todo
k_tanaka@tanakaknyanoAir react-todo % cd react-todo
k_tanaka@tanakaknyanoAir react-todo % ls
README.md               package.json            tsconfig.app.json       vite.config.ts
eslint.config.js        public                  tsconfig.json
index.html              src                     tsconfig.node.json
k_tanaka@tanakaknyanoAir react-todo % npm install

added 181 packages, and audited 182 packages in 19s

43 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
k_tanaka@tanakaknyanoAir react-todo % 