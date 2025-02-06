app.get('/api/product', (req, res) => {
    const code = req.query.code;
    // Query database for code
    db.query('SELECT * FROM products WHERE barcode = ?', [code], (err, result) => {
      if (err) throw err;
      res.json(result[0]); // Return product data
    });
  });