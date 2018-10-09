import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SubTitlePipe } from './sub-title.pipe';
import { SearchPipe } from './search.pipe';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ServciesComponent } from './servcies/servcies.component';
import { ProjectsComponent } from './projects/projects.component';



const apliRoot:Routes=[
{
  path:"home",component:HomeComponent
},
{
  path:"about",component:AboutComponent
},
{
  path:"servcies",component:ServciesComponent
},
{
  path:"projects",component:ProjectsComponent
},
{
  path:"blog",component:BlogComponent
},
{
  path:"contact",component:ContactComponent
},
{
  path:'article/:id' , component: ArticleDetailsComponent
},

{
  path:"",component:HomeComponent
},
{
  path:"**",component:FooterComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    SubTitlePipe,
    SearchPipe,
    ArticleDetailsComponent,
    ServciesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(apliRoot),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
