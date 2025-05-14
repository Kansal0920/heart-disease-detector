const express = require('express');
const PDFDocument = require('pdfkit');
const router = express.Router();

router.post('/generate-pdf', (req, res) => {
  const {
    name,
    age,
    risk,
    createdAt,
    sensors = {},
    inputs = {}
  } = req.body;

  const doc = new PDFDocument();

  res.setHeader('Content-Disposition', 'attachment; filename=Heart_Disease_Report.pdf');
  res.setHeader('Content-Type', 'application/pdf');

  doc.pipe(res);

  doc.fontSize(20).fillColor('#003366').text('🫀 AI-Powered Heart Disease Report', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).fillColor('black');

  doc.text(`Patient Name: ${name || 'N/A'}`);
  doc.text(`Age: ${age || 'N/A'}`);
  doc.text(`Report Date: ${new Date(createdAt).toLocaleString()}`);
  doc.text(`AI Risk Level: ${risk}`);
  doc.moveDown();

  doc.fontSize(16).text('📝 Manual Inputs', { underline: true });
  Object.entries(inputs || {}).forEach(([key, value]) => {
    doc.fontSize(12).text(`${key}: ${value}`);
  });

  if (Object.keys(sensors).length > 0) {
    doc.moveDown();
    doc.fontSize(16).text('📟 Sensor Data', { underline: true });
    Object.entries(sensors).forEach(([key, value]) => {
      doc.fontSize(12).text(`${key}: ${value}`);
    });
  }

  doc.end();
});

module.exports = router;
