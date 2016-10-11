import {Component, Input} from '@angular/core'; 
import {UserService} from './user.service'; 

@Component({
    selector: 'app-title', 
    templateUrl: 'title.component.html', 
    providers:[UserService]
})
export class TitleComponent {
    @Input() subtitle = ''; 
    title = 'Angular Modules (title)'; 
    user = ''; 

    constructor(userService: UserService){
        this.user = userService.userName;
    }
}