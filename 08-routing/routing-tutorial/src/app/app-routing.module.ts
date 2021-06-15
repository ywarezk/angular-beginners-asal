import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';

// place the routing configurations
// Router
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about/:user',
        component: AboutComponent
      },

      // /settings/account
      // /settings/avatar
      {
        path: 'settings',
        loadChildren: async () => {
          // {SettingsModule}
          const module = await import('../settings/settings.module');
          return module.SettingsModule;
        }
      },

      {
        path: 'auth',
        loadChildren: async () => {
          const module = await import('../auth/auth.module');
          return module.AuthModule;
        }
      },

      {
        path: 'todo',
        loadChildren: async () => {
          const module = await import('../todo/todo.module');
          return module.TodoModule;
        }
      },

      {
        path: '**',
        component: Error404Component
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
