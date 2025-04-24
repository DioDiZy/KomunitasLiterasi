// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Dummy data for members
const members = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Anggota ${i + 1}`,
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
    return res.status(401).json({ unlocked: false, error: "Invalid key" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
