import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'

})

export class ServicioService {
    URL="assets/Datos/Starcbucks.json";

    constructor(private http:HttpClient){

    }
    get(){

        return this.http.get(this.URL);
    }
}

