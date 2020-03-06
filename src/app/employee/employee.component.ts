import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee:Employee={
    fname:'',
    lname:'',
    email:'',
    address:'',
    contact:0,
    gender:'Male',
    username:'',
    password:'',
    qualification:'BCA',
    experience:0,
    codingLanguages:[]
  }
  qualification:string[];
  experience:number[];
  codingLanguages:any[];
  constructor() { }

  ngOnInit(): void {
    this.qualification=['BCA','MCA','CE'];
    this.experience=[0,1,2,3];
    this.codingLanguages=[
      {name:'C/C++',id:1},
      {name:'Java',id:2},
      {name:'Python',id:3}
    ];
  }
onSubmit():void{
  console.log('Name-'+this.employee.fname+' '+this.employee.lname);
  console.log('Email-'+this.employee.email);
  console.log('Contact Number-'+this.employee.contact);
  console.log('Address-'+this.employee.address);
  console.log('UserName-'+this.employee.username);
  console.log('Password-'+this.employee.password);
  console.log('Gender-'+this.employee.gender);
  console.log('Qualification-'+this.employee.qualification);
  console.log('Experience-'+this.employee.experience);
  console.log('Coding Languages-');
  for(var i=1;i<4;i++)
  {
  if((<HTMLInputElement>document.getElementById('lang'+i)).checked)
  {
    console.log((<HTMLInputElement>document.getElementById('lang'+i)).value);
  }
}
}

}
