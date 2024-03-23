import ApiService from "$lib/services/ApiService";
import type { Vehicle } from "$lib/models/Vehicle";

class ApiVehicleService extends ApiService {
    constructor() {
        super('/api/vehicles');
    }

    public async getVehicles(): Promise<Vehicle[]> {
        return this.get<Vehicle[]>('');
    }

    public async getVehicleById(id: number): Promise<Vehicle> {
        return this.get<Vehicle>(`/${id}`);
    }

    
}


export default ApiVehicleService;