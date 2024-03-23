export interface Vehicle {
    id: string;
    name: string;
    type: string;
    location: {
      lat: number;
      lng: number;
    };
    lastUsed: Date;
    status: 'available' | 'unavailable';
  }
  