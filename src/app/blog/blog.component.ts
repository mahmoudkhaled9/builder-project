import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  dumminew:any=[]
  region= "united states"
  term=""

  constructor(private _NewsServices: NewsService, private _router:Router) { 
    // this.dumminew = _NewsServices.getnews();
    this.changecode("general")   


  }


  artNav(i){
    this._router.navigate(["article", i])
  }

  categories=[
    {name:"business",imgurl:'../../assets/img/blog/cat-post/cat-post-3.jpg',descrip:'business top news'},
    {name:"sports",imgurl:'../../assets/img/blog/cat-post/cat-post-2.jpg',descrip:'sports top news'},
    {name:"health",imgurl:'../../assets/img/blog/cat-post/cat-post-1.jpg',descrip:'health top news'},
]
  changecode(category_name){

    this._NewsServices.getnews(category_name).subscribe(data => {

      for(var i=0; i<data.articles.length; i++)
      {
        if(data.articles[i].urlToImage == null)
        {
          data.articles[i].urlToImage = "./assets/images/download.jpg";
        }
      }

      this.dumminew = data.articles;


     
  }

  
  )


  }


 

  ngOnInit() {
  }

}
