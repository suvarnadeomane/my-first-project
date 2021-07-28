import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { TodoItemComponent } from './myComponent/todo-item/todo-item.component';
import { TodosComponent } from './myComponent/todos/todos.component';
import { DailyTimesheetComponent } from './timesheet/daily-timesheet/daily-timesheet.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component: DashboardComponent },
  {path:'todo-item',component:TodoItemComponent},
  {path:'todos',component:TodosComponent},
  {path:'daily-timesheet',component:DailyTimesheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
