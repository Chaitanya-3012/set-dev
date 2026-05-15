const ExpressSetup = () => {
    return {
        name: "Express Project",
        version: "1.0.1",
        description: "A new Express project with latest setup commands",
        commands: {
            "vanilla-express": "npm init -y && npm install express",
            "express-ts": "npm init -y && npm install express typescript @types/node @types/express ts-node nodemon && npx tsc --init",
            "express-mongoose": "npm init -y && npm install express mongoose",
            "express-mysql": "npm init -y && npm install express mysql2",
            "express-postgres": "npm init -y && npm install express pg",
            "express-redis": "npm init -y && npm install express redis",
            "express-middleware": "npm init -y && npm install express cors helmet express-rate-limit",
            "express-dev": "npm init -y && npm install express nodemon concurrently && npm install -D typescript @types/node @types/express ts-node",
            "express-prisma": "npm init -y && npm install express prisma @prisma/client && npx prisma init",
            "express-validation": "npm init -y && npm install express express-validator",
            "express-auth": "npm init -y && npm install express bcryptjs jsonwebtoken cookie-parser",
        },
        "additional-packages": {
            "express": "npm install express",
            "typescript": "npm install -D typescript @types/node @types/express ts-node",
            "mongoose": "npm install mongoose",
            "mysql2": "npm install mysql2",
            "pg": "npm install pg",
            "redis": "npm install redis",
            "cors": "npm install cors",
            "helmet": "npm install helmet",
            "express-rate-limit": "npm install express-rate-limit",
            "nodemon": "npm install -D nodemon",
            "prisma": "npm install prisma @prisma/client && npx prisma init",
            "express-validator": "npm install express-validator",
            "bcryptjs": "npm install bcryptjs",
            "jsonwebtoken": "npm install jsonwebtoken",
            "cookie-parser": "npm install cookie-parser",
        }
    };
};

module.exports = ExpressSetup;