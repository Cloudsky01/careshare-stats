import ApiService from "$lib/services/ApiService";
import type { Vehicle } from "$lib/models/Vehicle";
import flex_vehicle from "$lib/data/flex_vehicle.json";

class ApiVehicleService extends ApiService {
    constructor() {
        super('https://restapifrontoffice.reservauto.net/api/v2/Vehicle/FreeFloatingAvailability?CityId=59');
    }

    public async getVehicles(): Promise<Vehicle[]> {
        return Promise.resolve(flex_vehicle['vehicles'] as unknown as Vehicle[]);
    }

}


export default ApiVehicleService;