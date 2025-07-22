import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from "express";
import http from "http";
import cors from "cors";
import typeDefs from "./schema";
import { getCurrentUser } from "./utils/verifyJwt";
import { DecodedUserPayload } from "./types/DecodedUserPayload";
import path from "path";
import { Request } from "express";
import userResolvers from "./resolvers/userResolvers";
import authResolvers from "./resolvers/AuthResolvers";
import { productResolvers } from "./resolvers/productResolvers";
import multer from "multer";
import "dotenv/config";
import googleResolvers from "./resolvers/googleResolvers";
import emailResolvers from "./resolvers/emailResolvers";

export interface myContext {
    token?: string;
    user?: DecodedUserPayload | null;
    req: Request;
}

async function startApolloServer() {
    const app = express();
    const httpServer = http.createServer(app);
    
    const corsOptions = {
        origin: [
            "http://localhost:3000",
            "https://marketplace-zeta-fawn.vercel.app",
        ],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
        methods: ["GET", "POST", "OPTIONS"],
    };
    
    app.use(cors(corsOptions));
    app.options('*', cors(corsOptions));
    
    app.use("/images", express.static(path.join(process.cwd(), 'images')));
    
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'images/');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname);
        }
    });
    
    const upload = multer({ storage });
    
    const resolvers = {
        Query: {
            ...productResolvers.Query,
        },
        Mutation: {
            ...userResolvers.Mutation,
            ...authResolvers.Mutation,
            ...productResolvers.Mutation,
            ...googleResolvers.Mutation,
            ...emailResolvers.Mutation,
        }
    };
    
    const server = new ApolloServer<myContext>({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        introspection: true,
        formatError: (formattedError, error) => {
            console.error("GraphQL Error", error);
            return {
                message: formattedError.message,
                locations: formattedError.locations,
                path: formattedError.path,
                extensions: formattedError.extensions,
            };
        }
    });
    
    await server.start();
    
    // GraphQL endpoint
    app.use(
        "/graphql",
        cors(corsOptions),
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }): Promise<myContext> => {
                const authHeader = req.headers.authorization;
                const user = getCurrentUser(authHeader);
                const tokenValue = authHeader?.startsWith("Bearer ") ? authHeader?.split(' ')[1] : "";
                return { token: tokenValue, user, req };
            },
        })
    );
    
    app.get('/', (req, res) => {
        res.json({
            message: "coffee-sys-api is running successfully",
            status: "Healthy"
        });
    });
    
    app.post('/upload', upload.single('image'), (req, res) => {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        
        const fileUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
        res.json({ 
            message: 'File uploaded successfully',
            url: fileUrl,
            filename: req.file.filename 
        });
    });
    
    await new Promise<void>(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
    console.log(`📁 Static files served at http://localhost:4000/images`);
    
    if (!process.env.SECRET_KEY) {
        console.warn("WARNING: SECRET_KEY NOT SET, NOW WORKING WITH THE DEFAULT ONE WHICH IS NOT SAFE");
    } else {
        console.log(":::SECRET_KEY IS AVAILABLE:::");
    }
    
    if (!process.env.DATABASE_URL) {
        console.warn("WARNING: DATABASE_URL NOT SET, PLEASE INPUT ONE");
    } else {
        console.log(":::DATABASE_URL IS AVAILABLE:::");
    }
}

startApolloServer().catch(err => {
    console.error("Failed to start server", err);
    process.exit(1);
});