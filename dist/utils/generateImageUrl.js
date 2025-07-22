"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const generateImageUrl = async (req, uploadPromise) => {
    const { createReadStream, filename } = await uploadPromise;
    const uniqueName = `${Date.now()}-${filename}`;
    const uploadsDir = path_1.default.join(process.cwd(), 'images');
    const filepath = path_1.default.join(uploadsDir, uniqueName);
    if (!fs_1.default.existsSync(uploadsDir)) {
        fs_1.default.mkdirSync(uploadsDir, { recursive: true });
    }
    const stream = createReadStream();
    const out = fs_1.default.createWriteStream(filepath);
    await new Promise((resolve, reject) => {
        stream.pipe(out);
        out.on('finish', resolve);
        out.on('error', reject);
    });
    const fileUrl = `${req.protocol}://${req.get('host')}/images/${uniqueName}`;
    return fileUrl;
};
exports.default = generateImageUrl;
