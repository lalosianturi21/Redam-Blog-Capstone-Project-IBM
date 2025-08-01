# Redam Blog — Ruang Aman untuk Curhat & Dukungan Emosional

<p align="center">
  <img width="220" alt="Frame 5 (2)" src="https://github.com/user-attachments/assets/ed2b6508-0cb0-4ac6-bb4a-f719a95a91d2" />
</p>

---

## 🚀 Tech Stack

**Frontend:**
- React.js + Vite  
- Tailwind CSS  
- EditorJS (rich text editor)  
- Framer Motion (animasi)  
- React Hot Toast (notifikasi instan)  
- React Router DOM  

**Backend:**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Firebase Admin SDK  
- AWS S3

**Authentication:**
- Firebase Authentication (Google Sign-In)

---

## ✨ Fitur Utama

### ✅ Blogging Personal
- Tulis dan publikasikan blog dengan konten emosional (bullying, keluarga, mental health, dll).
- Menggunakan EditorJS untuk pengalaman menulis yang fleksibel dan modern.

### 📂 Kategori Emosional
- Cerita dikelompokkan dalam kategori seperti: `Bullying`, `Finansial`, `Keluarga`, `Kesehatan Mental`, `Percintaan`, `Motivasi`, `Pekerjaan`, `Persahabatan`, dll.
- Filter dan navigasi berdasarkan kategori.

### 🔐 Login dengan Google
- Autentikasi menggunakan Firebase Authentication (Google Sign-In) dan membuat akun manual.

### ❤️ Like & 💬 Komentar
- Pengguna bisa menyukai atau mengomentari blog sebagai bentuk empati.
- Komentar tampil secara real-time dan dapat dikelola oleh pemilik blog.

### 🔔 Notifikasi Masuk
- Penulis blog akan menerima notifikasi jika blognya disukai atau dikomentari.
- Notifikasi ditampilkan dalam ikon 🔔 pada navbar.

### 👤 Edit Profil & Ganti Password
- Pengguna bisa mengedit nama lengkap, foto profil, dan mengganti password (jika tidak login via Google).

---

## 📸 Screenshot

> *<img width="1893" height="898" alt="image" src="https://github.com/user-attachments/assets/d3d82b73-ae9f-4999-abaf-98185e72485d" />*

---

## 🛠️ Instalasi Lokal

### 1. Clone Repository

```bash
git clone https://github.com/lalosianturi21/Redam-Blog-Capstone-Project-IBM.git
cd Redam-Blog-Capstone-Project-IBM
```
### 2. Installation Backend

```bash
cd server
npm install
npm start
```
### 3. Installation Frontend

```bash
cd client
npm install
npm run dev
```

## 🔐 Konfigurasi Environment Variable

### 📁 Backend (/server/.env)

```bash
DB_MONGO=
SECRET_ACCESS_KEYS=
AWS_ACCESS_KEYS=
AWS_SECRET_ACCESS_KEYS=
FIREBASE_TYPE=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=""
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=
FIREBASE_AUTH_URI=
FIREBASE_TOKEN_URI=
FIREBASE_AUTH_PROVIDER_CERT_URL=
FIREBASE_CLIENT_CERT_URL=
FIREBASE_UNIVERSE_DOMAIN=
```

### 📁 Frontend (/client/.env)

```bash
VITE_SERVER_DOMAIN=
```



