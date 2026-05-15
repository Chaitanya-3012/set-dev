const ReactSetup = () => {
    return {
        name: "React Project",
        version: "1.0.1",
        description: "A new React project with latest setup commands",
        commands: {
            "vanilla-react": "npx create-react-app my-app",
            "vite-react": "npm create vite@latest my-app -- --template react",
            "vite-react-ts": "npm create vite@latest my-app -- --template react-ts",
            "vite-react-3js": "npm create vite@latest my-app -- --template react && cd my-app && npm install three @types/three",
            "vite-react-mui": "npm create vite@latest my-app -- --template react && cd my-app && npm install @mui/material @emotion/react @emotion/styled @mui/icons-material",
            "vite-react-shadcn": "npm create vite@latest my-app -- --template react && cd my-app && npm install lucide-react && npx shadcn@latest init",
            "vite-react-router": "npm create vite@latest my-app -- --template react && cd my-app && npm install react-router-dom",
            "vite-react-redux": "npm create vite@latest my-app -- --template react && cd my-app && npm install @reduxjs/toolkit react-redux",
            "vite-react-tailwind": "npm create vite@latest my-app -- --template react && cd my-app && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
            "vite-react-eslint": "npm create vite@latest my-app -- --template react && cd my-app && npm install -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser && npx eslint --init",
        },
        "additional-packages": {
            "@mui/material": "npm install @mui/material @emotion/react @emotion/styled @mui/icons-material",
            "lucide-react": "npm install lucide-react",
            "shadcn": "npm install lucide-react && npx shadcn@latest init",
            "three": "npm install three @types/three",
            "react-router-dom": "npm install react-router-dom",
            "@reduxjs/toolkit": "npm install @reduxjs/toolkit react-redux",
            "tailwindcss": "npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
            "eslint": "npm install -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser && npx eslint --init",
        }
    };
};

module.exports = ReactSetup;