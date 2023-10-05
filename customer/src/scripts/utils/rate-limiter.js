const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // Belirli bir süre içinde (örneğin, 3 dakika) izin verilen istek sayısı
  max: 50, // Belirtilen süre içinde izin verilen maksimum istek sayısı
  message: "Lütfen daha sonra tekrar deneyin.",
});

module.exports = limiter;
