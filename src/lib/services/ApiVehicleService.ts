import ApiService from "$lib/services/ApiService";
import type { Vehicle } from "$lib/models/Vehicle";

class ApiVehicleService extends ApiService {
    constructor() {
        super('https://restapifrontoffice.reservauto.net/api/v2/Vehicle/FreeFloatingAvailability?CityId=59');
    }

    public async getVehicles(): Promise<Vehicle[]> {
        return this.mocked_get<Vehicle[]>('');
    }

}


export default ApiVehicleService;