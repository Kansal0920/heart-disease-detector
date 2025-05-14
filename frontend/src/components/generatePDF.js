// generatepdf.js
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generatePDFReport = (reportData) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.setTextColor('#2563eb');
  doc.text("🩺 AAgni AI Medical Report", 20, 20);

  doc.setFontSize(12);
  doc.setTextColor('#000');

  doc.text(`👤 Name: ${reportData.name}`, 20, 35);
  doc.text(`🎂 Age: ${reportData.age}`, 20, 43);
  doc.text(`⚧ Gender: ${reportData.gender}`, 20, 51);
  doc.text(`📅 Date: ${new Date(reportData.createdAt).toLocaleString()}`, 20, 59);

  doc.autoTable({
    startY: 70,
    head: [['Parameter', 'Value']],
    body: [
      ['Heart Rate', `${reportData.heartRate} bpm`],
      ['SpO2', `${reportData.spo2}%`],
      ['Temperature', `${reportData.temperature} °C`],
      ['BP (Est.)', `${reportData.bp}`],
      // Include pulse and ECG only if they exist
      ...(reportData.pulse ? [['Pulse', `${reportData.pulse} bpm`]] : []),
      ...(reportData.ecg ? [['ECG Signal', `${reportData.ecg}`]] : []),
    ],
    styles: { fontSize: 11, textColor: '#111827' },
    headStyles: { fillColor: [37, 99, 235], textColor: '#fff' },
  });

  doc.setTextColor('#dc2626');
  doc.text(`❤️ AI Risk Level: ${reportData.risk}`, 20, doc.lastAutoTable.finalY + 15);

  doc.setTextColor('#10b981');
  doc.text(`📢 Tips from AAgni:`, 20, doc.lastAutoTable.finalY + 25);

  doc.setTextColor('#0f172a');
  doc.text(`${reportData.tips || 'No tips available.'}`, 20, doc.lastAutoTable.finalY + 35);

  doc.save(`AAgni_Report_${reportData.name.replace(/\s+/g, '_')}.pdf`);
};
