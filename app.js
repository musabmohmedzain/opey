const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // لعرض ملفات HTML و CSS من مجلد public

// اتصال قاعدة البيانات
mongoose.connect('mongodb+srv://opey2471:elmoshaks2000@cluster0.m07hhux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  
})
  .then(() => console.log('MongoDB connected √√√'))
  .catch(err => console.error('MongoDB connection error:', err));

// مسار الجذر
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html'); // يفتح صفحة التسجيل مباشرة
});

// مسارات المصادقة
app.use('/api/auth', authRoutes);



app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html'); // يفتح صفحة about
});
// تشغيل السيرفر
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});