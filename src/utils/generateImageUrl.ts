import fs from 'fs';
import path from 'path';
import { Request } from 'express';

const generateImageUrl = async (req: Request, uploadPromise: any): Promise<string> => {
    const { createReadStream, filename } = await uploadPromise;
    const uniqueName = `${Date.now()}-${filename}`;
    
    const uploadsDir = path.join(process.cwd(), 'images');
    const filepath = path.join(uploadsDir, uniqueName);
    
    if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
    }
    
    const stream = createReadStream();
    const out = fs.createWriteStream(filepath);
    
    await new Promise<void>((resolve, reject) => {
        stream.pipe(out);
        out.on('finish', resolve);
        out.on('error', reject);
    });
    
    const fileUrl = `${req.protocol}://${req.get('host')}/images/${uniqueName}`;
    return fileUrl;
};

export default generateImageUrl;