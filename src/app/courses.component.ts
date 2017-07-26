
import {Component} from '@angular/core'
import {CoursesService} from './courses.service'

@Component({
    selector:'app-courses',
    template:`
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>
    `,
    // styleUrls:['./courses.component.css']
})

export class CoursesComponent{
    title = 'Courses';
    courses;

    constructor(service:CoursesService){
        this.courses = service.getCoureses();
    }
    
    
}