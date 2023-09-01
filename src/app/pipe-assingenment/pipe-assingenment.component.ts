import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-assingenment',
  templateUrl: './pipe-assingenment.component.html',
  styleUrls: ['./pipe-assingenment.component.css']
})
export class PipeAssingenmentComponent {
  Employee:any[]=[{EmpName:"Datta",EmpSalary:60000,gender:'male'},
{EmpName:"Sushant",EmpSalary:180000,gender:'male'},
{EmpName:"Ashwini",EmpSalary:170000,gender:'female'},
{EmpName:"Manisha",EmpSalary:60000,gender:'female'},
{EmpName:"Ashish",EmpSalary:80000,gender:'male'}
]

}

