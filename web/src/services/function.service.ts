import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FunctionService {

    myAppUrl = 'https://lamafunctions20211028014432.azurewebsites.net/api/';

    // myAppUrl: string = "http://localhost:7071/api/";

    constructor(private _http: HttpClient) {
    }

    SaveData(data) {
        // console.log(data)
        return this._http.post(this.myAppUrl + 'upload-data', data);
    }
}
