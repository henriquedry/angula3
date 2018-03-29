import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { ComprasComponent } from './compras/compras.component';



const routes: Routes = [

{ path: '', redirectTo: '/inicio', pathMatch: 'full' },

{ path: 'friends', component: FriendsComponent },

{ path: 'compras', component: ComprasComponent }

];

@NgModule({

imports: [ RouterModule.forRoot(routes) ],

exports: [ RouterModule ]

})

export class AppRoutingModule {
    
}