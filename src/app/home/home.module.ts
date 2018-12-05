import { AuthenticationGuard } from './guard/authentication.guard';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { PostModule } from '../post/post.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PostModule],
})
export class HomeModule {}
