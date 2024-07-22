import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  
  getAllProducts(){
    // return this.http.get<any[]>(Constant.API_END_POINT + Constant.API_END_POINT);
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORIES)
  }
}
