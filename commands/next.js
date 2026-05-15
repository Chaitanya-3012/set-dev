const NextSetup = () => {
    return {
        name: "NextJS Project",
        version: "1.0.1",
        description: "A new NextJS project with latest setup commands",
        commands: {
            "vanilla-next": "npx create-next-app@latest my-app",
            "next-ts": "npx create-next-app@latest my-app --ts",
            "next-appdir": "npx create-next-app@latest my-app --ts --app",
            "next-3js": "npx create-next-app@latest my-app && cd my-app && npm install three @types/three",
            "next-mui": "npx create-next-app@latest my-app && cd my-app && npm install @mui/material @emotion/react @emotion/styled @mui/icons-material",
            "next-shadcn": "npx create-next-app@latest my-app && cd my-app && npm install lucide-react && npx shadcn@latest init",
            "next-redux": "npx create-next-app@latest my-app && cd my-app && npm install @reduxjs/toolkit react-redux",
            "next-tailwind": "npx create-next-app@latest my-app && cd my-app && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
            "next-auth": "npx create-next-app@latest my-app && cd my-app && npm install next-auth",
        },
        "additional-packages": {
            "@mui/material": "npm install @mui/material @emotion/react @emotion/styled @mui/icons-material",
            "lucide-react": "npm install lucide-react",
            "shadcn": "npm install lucide-react && npx shadcn@latest init",
            "three": "npm install three @types/three",
            "@reduxjs/toolkit": "npm install @reduxjs/toolkit react-redux",
            "tailwindcss": "npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
            "next-auth": "npm install next-auth",
        }
    };
};

module.exports = NextSetup;