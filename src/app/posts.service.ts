import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _HttpClient:HttpClient) { }
  getPosts(agency):Observable<any>
  {
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?sources="+agency+"&apiKey=29b6e235fcf34c918fae4a12a5b75c2d")
  }
}
