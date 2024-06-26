import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable <any[]>{
    // return this.http.get<any[]>(Constant.API_END_POINT + Constant.API_END_POINT);
    return this.http.get<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts")
  }
}
