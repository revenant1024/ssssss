const express = require('express');
const figlet = require('figlet');
const cors = require('cors');
const app = express();

app.use(cors());

// 루트 경로 응답
app.get('/', function (req, res) {
  res.send('Hello World');
});

// '/sound/:name' 경로 처리
app.get('/sound/:name', function (req, res) {
  const { name } = req.params;

  if (name === "dog") {
    res.json({ sound: '멍멍' });
  } else if (name === "cat") {
    res.json({ sound: '야옹' });
  } else if (name === "pig") {
    res.json({ sound: '꿀꿀' });
  } else {
    res.json({ sound: '알 수 없음' });
  }
});

// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  // Figlet로 메시지 출력
  figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
});
