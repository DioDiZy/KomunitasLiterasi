// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
app.use(express.static("public"));

app.use(cors());
app.use(bodyParser.json());
const names = [
  "Dio Syahputra",
  "Muhammad Roekhan",
  "Livia Salsabila",
  "Gabriella F. Pandiangan",
  "Stevyn Angely Hutabarat",
  "Dwi Alya Artika",
  "Salsabila Nanda Lestari",
  "Lutviya Setiyaningsih",
  "Panji Akbar Dewantara",
  "Teguh Rahmat Syahputra",
  "Fatir Gibran",
  "Lawrencius C.K Panjaitan",
  "Ataka Putu Samsuri K.",
  "Nadine Ananda Syahfitri",
  "Puja Satria Tawakal",
  "Raysa Salsabila",
  "Stefani Siahaan",
  "Farhat Huda",
  "Nopri Anita Libertiana S",
  "Ibrahim Prasaja Putra",
  "Avril Chrysalis Lilihata",
  "Davina Kezia Sianturi",
  "Musaddad Amin",
  "Mohammad Haikal Nur Rafidana",
  "Annisa Nur Amelia",
  "Aulia Isnaeni Azkatunnisa",
  "Aliff Akbar Pelawi",
  "Kevin Binsar Sinaga",
  "Rafif Syahputra Pasaribu",
  "Yola Hardini Girsang",
];
const quotes = [
  "Bermimpilah setinggi langit, lalu bangun dan wujudkan itu satu per satu.",
  "Langkah kecil hari ini akan jadi lompatan besar esok hari.",
  "Ketulusan hati selalu menemukan jalan menuju kebaikan.",
  "Keindahan dunia lahir dari pikiran yang positif.",
  "Berani mencoba adalah awal dari keberhasilan.",
  "Ketekunan adalah kunci dari setiap impian yang menjadi nyata.",
  "Cahaya dalam diri akan menuntunmu saat jalan terlihat gelap.",
  "Jadilah versi terbaik dari dirimu, bukan salinan orang lain.",
  "Ilmu tanpa amal ibarat pohon tanpa buah.",
  "Keteguhan hati akan membawamu melewati badai.",
  "Jangan takut gagal, karena di sanalah kamu akan belajar tumbuh.",
  "Langkahmu mungkin kecil, tapi dampaknya bisa besar.",
  "Setiap usaha punya cerita, dan setiap cerita punya makna.",
  "Hidup bukan soal seberapa cepat kita berlari, tapi seberapa tekun kita melangkah.",
  "Kekuatan sejati ada pada hati yang ikhlas dan tekad yang bulat.",
  "Berpikir besar dimulai dari keyakinan pada diri sendiri.",
  "Kreativitas adalah cahaya yang membuat dunia lebih hidup.",
  "Fokuslah pada proses, hasil akan mengikuti dengan sendirinya.",
  "Jangan takut berbeda, karena dunia butuh warna yang beragam.",
  "Pemimpin sejati lahir dari keberanian dan kejujuran.",
  "Mimpi bukan untuk ditunda, tapi untuk diperjuangkan.",
  "Ketulusan dan empati akan mengubah cara kita melihat dunia.",
  "Tantangan ada bukan untuk menghalangi, tapi untuk menguatkan.",
  "Jadilah perubahan yang ingin kamu lihat di sekitarmu.",
  "Kebaikan kecil yang konsisten lebih berarti daripada satu kebaikan besar yang sesaat.",
  "Bintang bersinar terang bukan karena besar, tapi karena konsisten.",
  "Keyakinan akan membuka pintu yang tak terlihat sebelumnya.",
  "Bekerja keraslah dalam diam, biarkan hasilnya yang bersuara.",
  "Pikiran yang terbuka adalah awal dari setiap pencapaian besar.",
  "Hati yang bersyukur akan menemukan keindahan di setiap langkah.",
];

app.use;
// Dummy data for members
const members = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: ` ${names[i]}`,
  key: `kunci${i + 1}`,
  description: `Kamu tau ga, ${quotes[i]}`,
  photo: `public/images/${i + 1}.jpg`,
}));

// Endpoint to get all member names (no keys)
app.get("/api/members", (req, res) => {
  const safeMembers = members.map(({ id, name, photo }) => ({ id, name, photo }));
  res.json(safeMembers);
});

// Endpoint to unlock a member's info with a key
app.post("/api/unlock", (req, res) => {
  const { id, key } = req.body;
  const member = members.find((m) => m.id === id);

  if (!member) {
    return res.status(404).json({ error: "Member not found" });
  }

  if (member.key === key) {
    return res.json({ unlocked: true, description: member.description });
  } else {
    return res.status(401).json({ unlocked: false, error: "Passwordnya salah, kamu bukan" + `${member.name}` });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
