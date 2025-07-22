"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const schema_1 = __importDefault(require("./schema"));
const verifyJwt_1 = require("./utils/verifyJwt");
const path_1 = __importDefault(require("path"));
const userResolvers_1 = __importDefault(require("./resolvers/userResolvers"));
const AuthResolvers_1 = __importDefault(require("./resolvers/AuthResolvers"));
const productResolvers_1 = require("./resolvers/productResolvers");
const multer_1 = __importDefault(require("multer"));
require("dotenv/config");
const googleResolvers_1 = __importDefault(require("./resolvers/googleResolvers"));
const emailResolvers_1 = __importDefault(require("./resolvers/emailResolvers"));
async function startApolloServer() {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const corsOptions = {
        origin: [
            "http://localhost:3000",
            "https://marketplace-zeta-fawn.vercel.app",
        ],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
        methods: ["GET", "POST", "OPTIONS"],
    };
    app.use((0, cors_1.default)(corsOptions));
    app.options('*', (0, cors_1.default)(corsOptions));
    app.use("/images", express_1.default.static(path_1.default.join(process.cwd(), 'images')));
    const storage = multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'images/');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname);
        }
    });
    const upload = (0, multer_1.default)({ storage });
    const resolvers = {
        Query: {
            ...productResolvers_1.productResolvers.Query,
        },
        Mutation: {
            ...userResolvers_1.default.Mutation,
            ...AuthResolvers_1.default.Mutation,
            ...productResolvers_1.productResolvers.Mutation,
            ...googleResolvers_1.default.Mutation,
            ...emailResolvers_1.default.Mutation,
        }
    };
    const server = new server_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
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
    app.use("/graphql", (0, cors_1.default)(corsOptions), express_1.default.json(), (0, express4_1.expressMiddleware)(server, {
        context: async ({ req }) => {
            const authHeader = req.headers.authorization;
            const user = (0, verifyJwt_1.getCurrentUser)(authHeader);
            const tokenValue = authHeader?.startsWith("Bearer ") ? authHeader?.split(' ')[1] : "";
            return { token: tokenValue, user, req };
        },
    }));
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
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
    console.log(`📁 Static files served at http://localhost:4000/images`);
    if (!process.env.SECRET_KEY) {
        console.warn("WARNING: SECRET_KEY NOT SET, NOW WORKING WITH THE DEFAULT ONE WHICH IS NOT SAFE");
    }
    else {
        console.log(":::SECRET_KEY IS AVAILABLE:::");
    }
    if (!process.env.DATABASE_URL) {
        console.warn("WARNING: DATABASE_URL NOT SET, PLEASE INPUT ONE");
    }
    else {
        console.log(":::DATABASE_URL IS AVAILABLE:::");
    }
}
startApolloServer().catch(err => {
    console.error("Failed to start server", err);
    process.exit(1);
});
