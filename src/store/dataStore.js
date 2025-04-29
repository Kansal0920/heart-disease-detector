import { create } from 'zustand';

const useDataStore = create((set) => ({
  manualData: [],
  sensorData: [],
  
  // Manual input update
  setManualData: (data) => set({ manualData: data }),

  // Sensor update (this will be via backend later)
  setSensorData: (data) => set({ sensorData: data }),
}));

export default useDataStore;
