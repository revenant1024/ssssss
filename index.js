const express = require('express');
const figlet = require('figlet');
const cors = require('cors');
const app = express();

// CORS 미들웨어 사용
app.use(cors());

// 루트 경로 응답
app.get('/', (req, res) => {
  res.send('Hello World');
});

// '/sound/:name' 경로 처리
app.get('/sound/:name', (req, res) => {
  const { name } = req.params;
  const sounds = {
    dog: '멍멍',
    cat: '야옹',
    pig: '꿀꿀',
  };

  // 이름에 해당하는 소리가 없으면 기본 메시지 제공
  const sound = sounds[name] || '알 수 없음';
  res.json({ sound });
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  // Figlet로 메시지 출력
  figlet('Hello World!!', (err, data) => {
    if (err) {
      console.error('Figlet error:', err);
      return;
    }
    console.log(data);
  });
});
