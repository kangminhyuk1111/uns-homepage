import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// 빌드된 파일들을 정적으로 제공
app.use(express.static(join(__dirname, 'dist')));

// 모든 경로에서 index.html 제공 (SPA를 위한 설정)
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// 모든 인터페이스에 바인딩
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});