import { Injectable } from '@angular/core';
import { loginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://localhost:7096/api/auth/";
  constructor(private httpClient:HttpClient) { }

  login(loginModel:loginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "/login",loginModel);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
