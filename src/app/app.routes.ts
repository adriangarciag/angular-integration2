import { HomeComponent } from './home/home/HomeComponent';
import { VoterComponent } from './voter/voterComponent';
import { TodosComponent } from './todos/todosComponent';
import { UsersComponent } from './users/users.component'; 
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'voter', component: VoterComponent },

  { path: '', component: HomeComponent },
];