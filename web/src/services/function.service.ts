import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FunctionService {

    myAppUrl = 'https://lamafunctions20211103234507.azurewebsites.net/api/';

    // myAppUrl: string = "http://localhost:7071/api/";

    constructor(private Http: HttpClient) {
        console.log('constructed');
    }

    SaveData(data) {
        console.log('url:' + this.myAppUrl + 'upload-data');
        return this.Http.post(this.myAppUrl + 'upload-data', data);
    }
    Translate(data) {
        // console.log('url:' + this.myAppUrl + 'translate-data');
        return this.Http.post(this.myAppUrl + 'translate-data', data);
    }
}
