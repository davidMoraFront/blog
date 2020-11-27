import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'articles',
        component: ArticleListComponent,
      },
      {
        path: '404',
        component: NotFoundComponent,
      },
      /* {
        path: '**',
        component: NotFoundComponent,
      }, */
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: ':key',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
