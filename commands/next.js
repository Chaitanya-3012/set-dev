const NextSetup = () => {
    return {
        name: "NextJS Project",
        version: "1.0.2",
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
        },
        // Metadata for interactive prompts
        setupTypes: {
            "vanilla-next": {
                name: "Vanilla Next.js",
                description: "Basic Next.js app with default template",
                estimatedTime: "2-3 minutes"
            },
            "next-ts": {
                name: "Next.js with TypeScript",
                description: "Next.js app with TypeScript support",
                estimatedTime: "2-3 minutes"
            },
            "next-appdir": {
                name: "Next.js with App Router",
                description: "Next.js app with App Router (new folder structure)",
                estimatedTime: "2-3 minutes"
            },
            "next-tailwind": {
                name: "Next.js with Tailwind CSS",
                description: "Next.js app with Tailwind CSS styling",
                estimatedTime: "3-4 minutes"
            },
            "next-shadcn": {
                name: "Next.js with Shadcn/ui",
                description: "Next.js app with Shadcn/ui components",
                estimatedTime: "3-4 minutes"
            }
        }
    };
};

module.exports = NextSetup;