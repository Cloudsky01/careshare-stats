import ApiService from "$lib/services/ApiService";

// Define the TimeSeries interface which represents the data 
interface TimeSeries {
    timestamp: Date;
    value: number;
}


class GeneralAPIService extends ApiService {
    constructor(){
        super('/api/general');
    }

    public async getNumberOfVehicles(): Promise<TimeSeries[]>{
        return Promise.resolve([
            { timestamp: new Date(1), value: 5 },
            { timestamp: new Date(2), value: 6 },
            { timestamp: new Date(3), value: 7 },
            { timestamp: new Date(4), value: 8 },
            { timestamp: new Date(5), value: 9 },
        ]);
        // return super.get<TimeSeries[]>('/number-of-vehicles');
    }

    public async getEstimatedUsageOfNetwork(): Promise<number>{
        return super.get<number>('/estimated-usage');
    }

}

export default GeneralAPIService;