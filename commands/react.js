const ReactSetup = () => {
    return {
        name: "React Project",
        version: "1.0.2",
        description: "A new React project with latest setup commands",
        commands: {
            "vanilla-react": "npx create-react-app .",
            "vite-react": "npm create vite@latest . -- --template react",
            "vite-react-ts": "npm create vite@latest . -- --template react-ts",
            "vite-react-3js": "npm create vite@latest . -- --template react && npm install three @types/three",
            "vite-react-mui": "npm create vite@latest . -- --template react && npm install @mui/material @emotion/react @emotion/styled @mui/icons-material",
            "vite-react-shadcn": "npm create vite@latest . -- --template react && npm install lucide-react && npx shadcn@latest init",
            "vite-react-router": "npm create vite@latest . -- --template react && npm install react-router-dom",
            "vite-react-redux": "npm create vite@latest . -- --template react && npm install @reduxjs/toolkit react-redux",
            "vite-react-tailwind": "npm create vite@latest . -- --template react && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p",
            "vite-react-eslint": "npm create vite@latest . -- --template react && npm install -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser && npx eslint --init",
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
        },
        // Metadata for interactive prompts
        setupTypes: {
            "vanilla-react": {
                name: "Vanilla React",
                description: "Create React App with default template",
                estimatedTime: "2-3 minutes"
            },
            "vite-react": {
                name: "Vite React",
                description: "Fast React setup with Vite bundler",
                estimatedTime: "1-2 minutes"
            },
            "vite-react-ts": {
                name: "Vite React with TypeScript",
                description: "React + Vite with TypeScript support",
                estimatedTime: "1-2 minutes"
            },
            "vite-react-tailwind": {
                name: "Vite React with Tailwind CSS",
                description: "React + Vite with Tailwind CSS styling",
                estimatedTime: "2-3 minutes"
            },
            "vite-react-shadcn": {
                name: "Vite React with Shadcn/ui",
                description: "React + Vite with Shadcn/ui components",
                estimatedTime: "2-3 minutes"
            }
        }
    };
};

module.exports = ReactSetup;