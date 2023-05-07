import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadSessionComponent } from './components/read-session/read-session.component';
import { SessionComponent } from './components/session/session.component';

const routes: Routes = [
  { path: '', component: SessionComponent },
  { path: 'read', component: ReadSessionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
