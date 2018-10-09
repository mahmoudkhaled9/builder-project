import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  artics=[]
  showtoggle:boolean = false

  title:string ="";
  description:string ="";
  category:string="";
  image:string="";


  toogleit(){
    this.showtoggle = !this.showtoggle
  }

  article(frmData){
    var art= {aTitle:frmData.value.title , aDescription:frmData.value.description , acategory : frmData.value.category , aImg:frmData.value.image }
    this.artics.push(art)
  }
  constructor() { }

  ngOnInit() {
  }

}
