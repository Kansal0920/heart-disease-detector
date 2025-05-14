export function generateFakeSensorData() {
    return {
      ecg: Array.from({ length: 100 }, () => Math.random() * 2 - 1), // ECG waveform (simulate small values)
      heartRate: Math.floor(60 + Math.random() * 40), // 60-100 bpm
      spo2: Math.floor(95 + Math.random() * 4),       // 95-99%
      temperature: (36 + Math.random()).toFixed(1),   // 36.0 - 37.0 °C
      pressure: (1000 + Math.random() * 10).toFixed(2) // hPa
    };
  }
  