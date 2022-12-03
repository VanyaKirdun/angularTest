import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { IBreed, ICat, ICategory } from "../module/cat";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CatsService{
  httpBrandOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json',
      'x-api-key': environment.API_KEY,
    })
}
constructor(private http: HttpClient){}

  getAll(amount: string = '10', breed: string = '', category: string = ''): Observable<ICat[]>{
    return this.http.get<ICat[]>(environment.API_URL + 'images/search?limit=' + amount + '&breed_ids=' + breed + '&category_ids=' + category, {headers: this.httpBrandOptions.headers})
  }

  getBreedNames(): Observable<IBreed[]>{
    return this.http.get<IBreed[]>(environment.API_URL + 'breeds', {headers: this.httpBrandOptions.headers})
  }

  getCategoryNames(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(environment.API_URL + 'categories', {headers: this.httpBrandOptions.headers})
  }
}
