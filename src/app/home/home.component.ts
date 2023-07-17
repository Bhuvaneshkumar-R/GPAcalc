import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    
}
interface Course{
  name:string;
  grade: number;
}

const courses: Course[] = []; 

function addcourse()
{
  const courseNameInput = document.getElementById('courseName') as HTMLInputElement;
  const courseGradeInput = document.getElementById('Grade') as HTMLInputElement;

  const courseName = courseNameInput.value;
  const courseGrade = parseInt(courseGradeInput.value);
}
