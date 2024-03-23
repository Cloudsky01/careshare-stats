import ApiService from "$lib/services/ApiService";

// Define the TimeSeries interface which represents the data 
interface TimeSeries {
    timestamp: number;
    value: number;
}


class GeneralAPIService extends ApiService {
    constructor(){
        super('/api/general');
    }

    public async getNumberOfVehicles(): Promise<TimeSeries[]>{
        return super.get<TimeSeries[]>('/number-of-vehicles');
    }

    public async getEstimatedUsageOfNetwork(): Promise<number>{
        return super.get<number>('/estimated-usage');
    }

}

export default GeneralAPIService;