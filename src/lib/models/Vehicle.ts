export interface Vehicle {
    vehicleId: string;
    name: string;
    type: string;
    vehicleLocation: {
      lat: number;
      lng: number;
    };
    lastUsed: Date;
    status: 'available' | 'unavailable';
  }
  