// src/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

// Inisialisasi dotenv
dotenv.config();

// Inisialisasi Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve file statis dari folder 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Import routes
const articlesRoutes = require('./routes/articles');
const beritaRoutes = require('./routes/berita');
const materiRoutes = require('./routes/materi');
const videosRoutes = require('./routes/videos');
const penggunaRoutes = require('./routes/penggunaRoutes');
const gedungRoutes = require('./routes/gedungRoutes');
const produksiRoutes = require('./routes/produksiRoutes');
const biayaRoutes = require('./routes/biayaRoutes');
const pakarRoutes = require('./routes/pakarRoutes');
const konsultasiRoutes = require('./routes/konsultasiRoutes');
const riwayatPembayaranRoutes = require('./routes/riwayatPembayaranRoutes');
const edukasiRoutes = require('./routes/edukasiRoutes');
const favoritRoutes = require('./routes/favoritRoutes');
const komunitasRoutes = require('./routes/komunitasRoutes');
const mediaKomunitasRoutes = require('./routes/mediaKomunitasRoutes');
const obrolanRoutes = require('./routes/obrolanRoutes');
const notifikasiRoutes = require('./routes/notifikasiRoutes');


// Gunakan routes
app.use('/api/articles', articlesRoutes);
app.use('/api/berita', beritaRoutes);
app.use('/api/materi', materiRoutes);
app.use('/api/videos', videosRoutes);
app.use('/api/pengguna', penggunaRoutes);
app.use('/api/gedung', gedungRoutes);
app.use('/api/produksi', produksiRoutes);
app.use('/api/biaya', biayaRoutes);
app.use('/api/pakar', pakarRoutes);
app.use('/api/konsultasi', konsultasiRoutes);
app.use('/api/riwayat-pembayaran', riwayatPembayaranRoutes);
app.use('/api/edukasi', edukasiRoutes);
app.use('/api/favorit', favoritRoutes);
app.use('/api/komunitas', komunitasRoutes);
app.use('/api/media-komunitas', mediaKomunitasRoutes);
app.use('/api/obrolan', obrolanRoutes);
app.use('/api/notifikasi', notifikasiRoutes);


// Route untuk mendapatkan daftar experts
app.get("/api/experts", (req, res) => {
    const query = `
        SELECT 
            e.id, e.name, e.location, e.experience, e.clients, e.expertise, e.image_url,
            GROUP_CONCAT(DISTINCT s.service_description) AS services,
            GROUP_CONCAT(DISTINCT CONCAT(p.package_name, " (", p.price, ")")) AS packages
        FROM experts e
        LEFT JOIN services s ON e.id = s.expert_id
        LEFT JOIN packages p ON e.id = p.expert_id
        GROUP BY e.id;
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Error fetching data");
        } else {
            res.json(results);
        }
    });
});


app.post('/api/experts', (req, res) => {
    const {
      name,
      slug,
      location,
      rating,
      experience,
      clients,
      expertise,
      service,
      testimonial,
      package1,
      price1,
      rating1,
      package2,
      price2,
      rating2,
      image_url,
    } = req.body;
  
    const expertQuery = `
      INSERT INTO experts (name, slug, location, rating, experience, clients, expertise, image_url)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    const packagesQuery = `
      INSERT INTO packages (expert_id, package_name, price, package_details)
      VALUES ?
    `;
  
    const serviceQuery = `
      INSERT INTO services (expert_id, service_description)
      VALUES (?, ?)
    `;
  
    const testimonialQuery = `
      INSERT INTO testimonials (expert_id, testimonial_text, user_name, location)
      VALUES (?, ?, ?, ?)
    `;
  
    db.beginTransaction((err) => {
      if (err) return res.status(500).send('Transaction error');
  
      // Insert expert data
      db.query(
        expertQuery,
        [name, slug, location, rating, experience, clients, expertise, image_url],
        (err, expertResult) => {
          if (err) {
            db.rollback();
            return res.status(500).send(err);
          }
  
          const expertId = expertResult.insertId;
  
          // Insert packages
          const packageValues = [
            [expertId, package1, price1, `Rating: ${rating1}`],
            [expertId, package2, price2, `Rating: ${rating2}`],
          ];
  
          db.query(packagesQuery, [packageValues], (err) => {
            if (err) {
              db.rollback();
              return res.status(500).send(err);
            }
  
            // Insert service
            db.query(serviceQuery, [expertId, service], (err) => {
              if (err) {
                db.rollback();
                return res.status(500).send(err);
              }
  
              // Insert testimonial
              db.query(
                testimonialQuery,
                [expertId, testimonial, 'Anonymous', location],
                (err) => {
                  if (err) {
                    db.rollback();
                    return res.status(500).send(err);
                  }
  
                  db.commit((err) => {
                    if (err) {
                      db.rollback();
                      return res.status(500).send(err);
                    }
                    res.status(200).send('Data saved successfully');
                  });
                }
              );
            });
          });
        }
      );
    });
  });

// Route dasar
app.get("/", (req, res) => {
    res.send("Server sedang berjalan!");
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Global error handler:", err.message);
    res.status(500).json({ error: "Something went wrong" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

