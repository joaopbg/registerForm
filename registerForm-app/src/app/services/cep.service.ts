import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private cep !: String

  constructor(private http : HttpClient) { }

  public getCep(cep:String) : Observable<any>{
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
