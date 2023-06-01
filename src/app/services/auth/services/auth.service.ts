import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from 'src/app/models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = 'http://localhost:3000/register';
  constructor(private http: HttpClient) { }
  createuser(user:Register){
    return this.http.post<Register>(this.baseURL,user)
  }
  getuser(){
    return this.http.get(this.baseURL)
  }
  // getRole() {
  //   return this.http.get(environment.baseApi+'login/1')
  // }
}
