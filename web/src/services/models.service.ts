import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ModelsService {

    constructor() {
    }
}

export interface IDropdown {
    code: string;
    name: string;
}

export interface IConfig {
    endpoint: string;
    key: string;
    database: any;
    container: any;
    items: any;
}

export interface IInputData {
    id: any;
    email: string;
    sourceLangId: any;
    sourceLang: any;
    sourceLangDesc: any;
    destLangId: any;
    destLang: any;
    destLangDesc: any;
    sourceToDestDic: any;
    destToSourceDic: any;
    completed: boolean;
    partitionKey: any;
    sourceModel: any;
    messageToTranslate: any;
}
