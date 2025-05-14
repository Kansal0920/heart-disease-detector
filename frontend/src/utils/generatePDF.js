import html2pdf from "html2pdf.js";

export const generatePDF = ({ name, age, gender, risk }) => {
  const reportHTML = `
    <div style="padding: 20px; font-family: Arial; color: #000;">
      <h1 style="text-align: center; color: #2c3e50;">❤️ AI Heart Disease Report</h1>
      <hr style="margin: 20px 0;" />
      <p><strong>Name:</strong> ${name || "N/A"}</p>
      <p><strong>Age:</strong> ${age || "N/A"}</p>
      <p><strong>Gender:</strong> ${gender || "N/A"}</p>
      <p><strong>Predicted Risk:</strong> <span style="color: ${
        risk === "High" ? "red" : risk === "Medium" ? "orange" : "green"
      }; font-weight: bold;">${risk}</span></p>
      <hr />
      <p style="margin-top: 20px; font-size: 12px; color: #555;">
        Report auto-generated using AI-Powered Heart Disease Detection System.
      </p>
    </div>
  `;

  const opt = {
    margin: 0.5,
    filename: "Heart-Report.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().from(reportHTML).set(opt).save();
};
