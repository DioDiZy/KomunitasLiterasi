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
const firstNames = names.map((name) => name.split(" ")[0]);

const quotes = [
  "Bermimpilah setinggi langit, lalu bangun dan wujudkan itu satu per satu. Jadi ketua itu ga mudah, kamu udah keren banget bisa sampai dititik ini, terus berkembang ya, ajak yang lain berkembang bersamamu. Kamu pasti bisa kok, aku tau kamu pasti cape kok, sesekali istirahat yaa. Banyak tanggung jawab yang kamu pegang, jangan kecewakan mereka. ",
  "Langkah kecil hari ini akan jadi lompatan besar esok hari. Kamu punya semangat yang keren banget rey. Kamu juga punya banyak opini dan ide yang selalu keren. Kamu selalu punya cara untuk membuat orang tertawa rey, jangan lupa pikirkan juga cara agar diri kamu tertawa ya. Kalau kamu cape, rehatlah sejenak ya. Ga semua harus selesai hari ini kok, jangan takut. Tapi jangan terlena juga yaa. Sedikit hal yang pengen kakak sampaikan, terkadang kamu tidak memikirkan perasaan orang ketika bicara, itu ga baik rey. Itu aja sih, Semangat rey !. ",
  "Ketulusan hati selalu menemukan jalan menuju kebaikan. Livia, kamu itu partner rey yang hebat, banyak hal yang tidak kakak ketahui soal surat menyurat, itulah mengapa kakak harus terus belajar bareng kalian, bareng kamu. Kamu punya skill public speaking yang keren liv, jangan lupa diasah terus ya. Kita berkembang bareng bareng, jangan takut. Oke ? ",
  "Keindahan dunia lahir dari pikiran yang positif. Gab, kamu tau ga sih dunia itu sangat indah ? Kamu harus berusaha untuk menjadi yang terbaik. Jujur, masalah keuangan kakak kurang paham, tapi dengan adanya kamu disini, kakak merasa sangat terbantu. Dan kamu tau ga, posisi kamu disini bukan hanya sekedar bendahara, kamu juga pendiri dari komunitas, yang sabar ya ngadepin perdebatan antara kakak dan rey. Tapi sebenarnya itu hal yang kurang baik sih, sering banget berdebat, tolong ingetin kakak dan rey ya kalau sering berdebat, tolong jadi penengah kami. Itu saja sih, Kakak kurang pandai dalam merangkai kata hahaha. Terimakasi gab :> ",
  "Berani mencoba adalah awal dari keberhasilan. Stevyn, aku tau kamu punya sesuatu hal yang terpendam dalam dunia literasi, aku juga paham kamu punya banyak kesibukan dalam organisasi dan kegiatan lain. Aku harap kamu bisa akrab dengan gaby ya stev, makasih udah mau gabung ke dalam komunitas ini, kalauu kamu punya harapan dan keluhan terhadap komunitas, kamu bisa langsung bilang ke aku kok, jangan sungkan, kita berkembang bersama ya. Aku lihat dari diri kamu, kamu punya potensi yang besar untuk berkembang, kamu hebat, kamu keren. Semangat yahh !",
  "Ketekunan adalah kunci dari setiap impian yang menjadi nyata. Kak alya, makasih ya udah jadi inspirasi yang keren, semangat menjalani kehidupan setelah perkuliahaan kak",
  "Cahaya dalam diri akan menuntunmu saat jalan terlihat gelap. Haii salsa, kamu punya banyak skill yang keren, jangan lupa jadikan dirimu menjadi pribadi yang lebih baik. Kamu juga punya banyak teman yang keren, kakak salut sama kamu, cewe mandiri yang terus ingin berkembang, cewe yang disukain banyak orang karena alasan yang unik unik hahahah. Maafin teman teman kakak yaa kalauu ada jokes dan bercandanya yang kurang sopan, yang kadang ganggu kamu juga. Kamu keren him, jangan sungkan untuk kasih tau kakak kalau kakak salah, jangan lupa baca buku juga him, semangat menjadi wakahimnya, jaga kesehatan, Semangat berkembangnya !.",
  "Jadilah versi terbaik dari dirimu, bukan salinan orang lain. Lutvi, kamu punya caramu sendiri untuk menjadi versi terbaik dari dirimu. Jangan takut untuk tampil, kakak lihat, kamu wanita yang independent, itu baguss, tetapi jangan lupa pula, tak jarang kamu butuh tim dalam beberapa kondisi. Jadi jangan lupa latihan dalam kerjasama tim ya, kita latihannya di komunitas, kakak berharap apa harapan kamu diawal dikomunitas dapat terwujud ya, bantu kakak untuk mewujudkan keinginan kamu didalam komunitas ya, jangan sungkan. Semangatt !",
  "Ilmu tanpa amal ibarat pohon tanpa buah. Panji, pertama kali kakak lihat kamu, kakak melihat potensi yang besar didalam diri kamu, kamu anaknya mau berkembang, kamu punya sesuatu hal yang besar, kakak yakin itu, hanya saja potensinya masih terpendam, jangan lupa dilatih terus ya !",
  "Keteguhan hati akan membawamu melewati badai. Guh, jujur, aku ga ekspek kau sekeren ini sekarang, pak president SRE, Koor PSDM, Bootcamp, bisnis secara bersamaan. Pasti ga mudah menghadapi itu semua, tapi kau bisa nunjukinn bahwasannya kau bisa. Jujur, cara pemimpinmu itu keren sih, bisa buat yang lain ga canggung tapi anak anaknya pada tetap rispek denganmu, aku pengen nerapin itu sejak dlu, tapi aku bingung gimana caranya. Ayo berkembang bersama yaa, maaf kalauu aku sering adu argumen samamu. Jangan berhenti nasehatin aku kalau aku salah yaa, kau pasti ngerti aku, dan karena itu juga alasan aku mau berkembang sama sama. Aku anaknya pelupa, dan ga jarang aku keliatannya kurang care dengan komunitas, bantu aku mengatasi hal hal ini ya pak press ^^ ",
  "Jangan takut gagal, karena di sanalah kamu akan belajar tumbuh. Tir, jujur, abang waktu smk ga notice sama sekali dengan keberadaanmu, dan ketika abang lihat kau kuliah di sini, abang ngerasa rugi ga kenal kau dari awal, kau keren banget selama disini. Kau berani, penyusunan dan pemilihan katamu dalam memberikan ide ketika di forum itu keren banget, tapi ceplas ceplosnya dikurangin yaa wkwkwk, abang yakin kau bisa jadi besar dengan caramu dan dirimu. Ditunggu kabar menjadi kahim nya yaa.",
  "Langkahmu mungkin kecil, tapi dampaknya bisa besar. Lawren, kakak sangat apresiasi dengan gaya kamu berbicara ren, kamu sangat menghargai dan rispek dengan lawan bicaramu, ga banyak orang yang seperti itu, hal itu harus kamu pertahanin. Kamu punya caramu sendiri supaya orang rispek dan senang denganmu, kamu berani dan cerdas, kamu bisa menjadi pemimpin yang baik nantinya. jadi Koor di komunitas dengan anggota yang berbeda angkatan pasti buat kamu bingung dan bimbang, tapi jangan takut ya, kamu bisa bertanya dan berbagi cerita ke kakak dan ke teman temanmu, Humas itu penghubung komunitas dengan pihak luar, tapi jangan lupa dengan pihak dalamnya ya, kakak harap kamu bisa bantu kakak buat akrabin anak anak komunitas. Bantu kakak yaa ",
  "Setiap usaha punya cerita, dan setiap cerita punya makna. Ataka, ayo berkembang, lu punya potensi, lu cuman butuh teman yang sejalan, dan di komunitas banyak orang yang bisa sejalan denganmu, ayo di perbaiki skill time managementnya, biar bisa mngumpul dengan yang lain",
  "Hidup bukan soal seberapa cepat kita berlari, tapi seberapa tekun kita melangkah. Din, kakak bangga sama kamu, kamu mau berkembang lebih dari apa yang abang pikirkan. Berfikir sebelum melangkah, kamu selalu melakukan hal ini, itu keren. Kamu punya planning dan caramu sendiri dalam berkembang, kamu ga takut bertanya, kamu punya banyak teman. Tapi terkadang kamu banyak takutnya yaa, jangan takut yaa, kita berkembang bareng bareng. Kamu bisa perluas relasi kamu dalam divisi humas, dimulai dari yang kecil dulu, nantinya bisa akrab dengan 1 komunitas pasti bakal asik banget, percaya deh.",
  "Kekuatan sejati ada pada hati yang ikhlas dan tekad yang bulat. Puja, sebelumnya kakak melihat kamu sebagai anak yang takut untuk memulai, tapi ternyata kamu nunjukin ke kakak, kamu bukan takut memulai, tapi kamu memulai dengan sesuatu yang besar, kamu keren banget bisa memegang proker gabungan antara Komunitas dengan SRE, kakak merasa sangat terbantu, terus berkembang yaa, ayo kita buat acara yang keren keren dalam komunitas supaya ga kalah keren dengan SRE",
  "Berpikir besar dimulai dari keyakinan pada diri sendiri. Saa, makasih yaa udah mau nasehatin aku, makasi udah mau dengerin aku, makasi udah mau bilangin aku. Aku seneng lihat raysa yang sekarang, pemilihan kosa katanya sangat rapi dalam bicara, kalimat yang diucapkan juga sangat easy listening. Nasehat yang disampaikan membangun dan raysa yang sekarang itu banyak berkembangnya. Bantu aku yaa saa, bantu aku untuk bantuin kau dan komunitas berkembang bersama. Maaf kalau aku masih sering egois, jangan sungkan untuk tegor aku yaa.",
  const quotes = [
    // ... 0 - 16 tetap seperti sebelumnya
    "Kreativitas adalah cahaya yang membuat dunia lebih hidup. Kamu punya kemampuan luar biasa untuk melihat sesuatu dari sudut pandang yang berbeda. Jangan takut untuk terus menuangkan ide-ide gilamu ke dalam karya nyata. Kamu bukan hanya kreatif, kamu juga berani. Dan di dunia yang kadang kaku ini, orang seperti kamu adalah nafas segar. Terus berkarya, terus bermakna.",
    "Fokuslah pada proses, hasil akan mengikuti dengan sendirinya. Kadang kita terlalu terobsesi pada hasil, sampai lupa bahwa justru prosesnya yang membentuk kita. Kamu sudah berjalan sejauh ini bukan karena keberuntungan, tapi karena kesabaran dan usaha. Teruslah berjalan, pelan tak apa, asal tidak berhenti. Prosesmu adalah cerita, dan cerita itu penting.",
    "Jangan takut berbeda, karena dunia butuh warna yang beragam. Kamu bukan satu dari banyak, kamu adalah satu yang unik. Keberbedaanmu adalah kekuatan, bukan kekurangan. Jadi jangan ragu untuk menunjukkan siapa kamu. Dunia tidak akan berubah jika semua orang seragam. Jadi, jadilah berbeda. Jadilah berani.",
    "Pemimpin sejati lahir dari keberanian dan kejujuran. Kamu tidak harus sempurna untuk jadi pemimpin, tapi kamu harus jujur—pada dirimu dan pada orang lain. Keberanian bukan berarti tidak takut, tapi tetap berjalan meski takut. Kamu punya potensi itu. Jangan tunggu orang lain memberi izin. Ambil langkahmu sendiri.",
    "Mimpi bukan untuk ditunda, tapi untuk diperjuangkan. Kamu pasti punya mimpi yang kamu simpan rapat-rapat, mungkin karena takut diremehkan. Tapi mimpi itu milikmu, dan cuma kamu yang bisa memperjuangkannya. Jalan mungkin panjang dan melelahkan, tapi langkah kecil hari ini adalah awal dari sesuatu yang besar.",
    "Ketulusan dan empati akan mengubah cara kita melihat dunia. Dunia ini butuh lebih banyak orang yang mau mendengar, bukan hanya bicara. Dan kamu punya itu—kemampuan untuk peduli, untuk mengerti. Jangan remehkan itu, karena dari empati lahir koneksi, dan dari koneksi lahir perubahan.",
    "Tantangan ada bukan untuk menghalangi, tapi untuk menguatkan. Kamu tidak diciptakan untuk menyerah. Setiap rintangan yang kamu lewati bukan hanya memperkuatmu, tapi juga menunjukkan kepada orang lain bahwa itu bisa dilakukan. Ingat, kamu lebih kuat dari yang kamu pikirkan.",
    "Jadilah perubahan yang ingin kamu lihat di sekitarmu. Kalau kamu merasa dunia ini kurang ramah, jadilah orang yang ramah. Kalau kamu ingin komunitas ini lebih hangat, jadilah orang pertama yang menyapa. Perubahan besar datang dari langkah kecil. Mulailah dari dirimu sendiri.",
    "Kebaikan kecil yang konsisten lebih berarti daripada satu kebaikan besar yang sesaat. Kamu tidak perlu selalu melakukan hal luar biasa untuk jadi orang baik. Satu senyuman, satu perhatian, satu waktu untuk mendengar—itu semua bermakna. Lanjutkan kebiasaan baik itu, dan kamu akan melihat perbedaannya.",
    "Bintang bersinar terang bukan karena besar, tapi karena konsisten. Jangan menunggu momen besar untuk bersinar. Justru lewat hal-hal kecil yang kamu lakukan dengan konsisten, kamu akan jadi terang di sekitar orang-orangmu. Percaya deh, dunia melihatmu meski kamu merasa tak terlihat.",
    "Keyakinan akan membuka pintu yang tak terlihat sebelumnya. Kadang yang kita butuhkan cuma satu hal: percaya. Percaya bahwa kamu cukup. Percaya bahwa kamu bisa. Saat kamu yakin, pintu-pintu yang dulu tertutup pelan-pelan akan terbuka. Jangan pernah berhenti percaya.",
    "Bekerja keraslah dalam diam, biarkan hasilnya yang bersuara. Tidak semua pencapaian harus diumumkan. Terkadang, hal terbaik datang saat kamu bekerja dalam kesunyian, dan orang-orang mulai bertanya: 'Siapa dia?' Karena hasil kerjamu akan berbicara jauh lebih keras daripada kata-katamu.",
    "Pikiran yang terbuka adalah awal dari setiap pencapaian besar. Jangan takut untuk berubah, jangan takut untuk belajar ulang. Dunia terus berkembang, dan kamu juga harus. Jadilah orang yang tidak takut salah, tapi takut berhenti belajar. Dengan itu, kamu akan sampai ke tempat yang tak terbayangkan.",
    "Hati yang bersyukur akan menemukan keindahan di setiap langkah. Ketika kamu mulai merasa lelah atau hilang arah, coba lihat kembali apa yang sudah kamu punya. Rasa syukur tidak hanya membuatmu tenang, tapi juga membukakan jalan baru yang tak pernah kamu lihat sebelumnya. Karena orang yang bersyukur, akan selalu cukup."
  
    // 31+ bisa ditambahkan bila ada tambahan anggota
 
];

app.use;
// Dummy data for members
const members = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: ` ${names[i]}`,
  key: `kunci${i + 1}`,
  description: `${firstNames[i]}, ${quotes[i]}`,
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
