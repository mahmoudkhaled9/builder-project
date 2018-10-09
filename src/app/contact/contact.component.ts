import { Component, OnInit } from '@angular/core';
import {PostsService} from '../posts.service';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  newpost=[]
  agency_title="ABC"
  agenccy=["abc-news","bbc-news","cbc-news","cnn","fox-news"]
  constructor(private _PostsService:PostsService) { 
    this.changeagency("abc-news")
  }

  thnkMSG(){
    alert("your message is sent")
  }

  changeagency(agency){

    this._PostsService.getPosts(agency).subscribe(data => {

      for(var i=0; i<data.articles.length; i++)
      {
        if(data.articles[i].urlToImage == null)
        {
          data.articles[i].urlToImage = "./assets/images/download.jpg";
        }
      }

      this.newpost = data.articles;


      if(agency=="abc-news"){
        this.agency_title = "ABC"
      }
      else if(agency=="bbc-news"){
        this.agency_title = "BBC"
      }
      else if(agency=="cbc-news"){
        this.agency_title = "CBC"
      }
      else if(agency=="cnn"){
        this.agency_title = "CNN"
      }
      else if(agency=="fox-news"){
        this.agency_title = "Fox"
      }
      
  }

  
  )


  }

  

  ngOnInit() {
    $(function(){
    
      "use strick";
      var max =100;
      
      $("textarea").keyup(function(){
          
          var length=$(this).val().length;
          var character = max - length;
          
          console.log(character)
          
          if(character<=0)
              {
                   $("#char").text("your available character finished");
                  
              }
          else{
          
          $("#char").text(character);
          }
          
      });
  
      
  });
  }

}
