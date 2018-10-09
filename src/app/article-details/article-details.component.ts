import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../news.service'

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  id:number;
  article:any = {};
  constructor(private _ActivatedRoute:ActivatedRoute , private _NewsService:NewsService) {
    this.id =parseInt( _ActivatedRoute.snapshot.paramMap.get("id"));
    
    this._NewsService.getnews("general").subscribe(data => this.article= data.articles[this.id])
   }

  ngOnInit() {
    
  }

}
