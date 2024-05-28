import { Component } from '@angular/core';
import { User } from './User.interface'; 
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  user: User= {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  showAge: boolean = true;

  updateQuote(event: Event) {
    this.user.quote = (event.target as HTMLInputElement).value;
  }

  toggleAge() {
    this.showAge = !this.showAge;
  }
};
