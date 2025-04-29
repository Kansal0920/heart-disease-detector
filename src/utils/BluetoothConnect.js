// src/utils/BluetoothConnect.js

export async function connectBluetooth() {
    try {
        const device = await navigator.bluetooth.requestDevice({
            acceptAllDevices: true,
            optionalServices: ['battery_service'] // General service, can modify later
        });

        const server = await device.gatt.connect();
        console.log('Connected to device:', device.name);

        const service = await server.getPrimaryService('battery_service');
        const characteristic = await service.getCharacteristic('battery_level');

        // Start notifications
        await characteristic.startNotifications();

        console.log('Listening for Bluetooth data...');
        characteristic.addEventListener('characteristicvaluechanged', handleData);

        return { device, server, characteristic };

    } catch (error) {
        console.error('Bluetooth Connection Error:', error);
        throw error;
    }
}

let latestData = {
    heartRate: 0,
    spO2: 0,
    pulse: 0,
    bodyTemp: 0,
    bp: "0/0",
    ecg: "Normal"
};

function handleData(event) {
    const value = new TextDecoder().decode(event.target.value);
    console.log('Raw Bluetooth Data:', value);

    // Example incoming data format: "HR:75, SPO2:98, PULSE:78, TEMP:36.5, BP:120/80, ECG:Normal"
    const parts = value.split(',');

    parts.forEach((part) => {
        const [key, val] = part.trim().split(':');
        switch (key.toUpperCase()) {
            case 'HR':
                latestData.heartRate = parseInt(val);
                break;
            case 'SPO2':
                latestData.spO2 = parseInt(val);
                break;
            case 'PULSE':
                latestData.pulse = parseInt(val);
                break;
            case 'TEMP':
                latestData.bodyTemp = parseFloat(val);
                break;
            case 'BP':
                latestData.bp = val.trim();
                break;
            case 'ECG':
                latestData.ecg = val.trim();
                break;
            default:
                console.warn('Unknown data key:', key);
        }
    });
}

export function getLatestSensorData() {
    return latestData;
}
