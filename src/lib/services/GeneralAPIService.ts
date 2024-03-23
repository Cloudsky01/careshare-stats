import ApiService from "$lib/services/ApiService";
import timestamp from "$lib/data/timestamp.json";

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
        await new Promise(resolve => setTimeout(resolve, 1000));
        return Promise.resolve(timestamp as unknown as TimeSeries[]);
        // return super.get<TimeSeries[]>('/number-of-vehicles');
    }

    public async getEstimatedUsageOfNetwork(): Promise<number>{
        return super.get<number>('/estimated-usage');
    }

    public async getEstimatedUsageOfNetworkByHour(): Promise<TimeSeries[]>{
        return super.get<TimeSeries[]>('/estimated-usage-by-hour');
    }

    public async getEstimatedUsageOfNetworkByDay(): Promise<TimeSeries[]>{
        return super.get<TimeSeries[]>('/estimated-usage-by-day');
    }

    public async getEstimatedUsageOfNetworkByWeek(): Promise<TimeSeries[]>{
        return super.get<TimeSeries[]>('/estimated-usage-by-week');
    }

    public async getEstimatedUsageOfNetworkByMonth(): Promise<TimeSeries[]>{
        return super.get<TimeSeries[]>('/estimated-usage-by-month');
    }

}

export default GeneralAPIService;