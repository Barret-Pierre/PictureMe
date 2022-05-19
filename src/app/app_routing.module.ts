import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { PictureMeListComponent } from "./picture-me-list/picture-me-list.component";
import { SinglePictureMeComponent } from "./single-picture-me/single-picture-me.component";

const routes: Routes = [
  { path: 'picturesMe', component: PictureMeListComponent },
  { path: 'picturesMe/:id', component: SinglePictureMeComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}