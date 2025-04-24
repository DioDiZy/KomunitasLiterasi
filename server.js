// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

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
// Dummy data for members
const members = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: ` ${names[i]}`,
  key: `kunci${i + 1}`,
  description: `Ini adalah deskripsi dari Anggota ${i + 1}.`,
}));

// Endpoint to get all member names (no keys)
app.get("/api/members", (req, res) => {
  const safeMembers = members.map(({ id, name }) => ({ id, name }));
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
    return res.status(401).json({ unlocked: false, error: "Passwordnya salah, coba lagi" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
