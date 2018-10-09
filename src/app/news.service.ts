import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient:HttpClient) { }


  


  getnews(category):Observable<any>
  {
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=29b6e235fcf34c918fae4a12a5b75c2d")
  }


  getdummynews(){
    return [
      {name:"ahmed",age:15,gender:"male",salary: 2500},
      {name:"ahmd",age:16,gender:"male",salary: 2500},
      {name:"ahed",age:19,gender:"male",salary: 2500},
      {name:"ahmed",age:12,gender:"male",salary: 2500},
      {name:"ahmed",age:13,gender:"male",salary: 2500},
      {name:"ahed",age:18,gender:"male",salary: 2500},
      {name:"ahmed",age:17,gender:"male",salary: 2500},
      {name:"amed",age:14,gender:"male",salary: 2500},
      {name:"ahmed",age:15,gender:"male",salary: 2500}
  
    ]
  }

 
}
