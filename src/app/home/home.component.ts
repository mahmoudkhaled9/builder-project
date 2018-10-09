import { Component, OnInit } from '@angular/core';
declare var $:any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   head1 = "home component"
   imgUrl= "src/assets/images/about-02.jpg"
   hash = ["mahmoud","khaled","farouk"]
   name = ""
   password=""
   virfy= false
   Action(){
    alert("welcome "+ this.name)
  };


pass(){
  if(this.password=="mahmoud"){
    this.virfy=true;
  }
  else{
    alert("enter the right password")
  }
};

  students:object[]=[
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


  constructor() { }

  ngOnInit() {

    $(document).ready(function(){


      $(".home-btn").click(function(){
        $(".home-div").animate({
          left: "200px"
        });
      });



      



    })
  }

}
