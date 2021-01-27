import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../Project';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  project:Project = new Project(0,0,"","","","","","")
  message:any;

  constructor(private service: RestapiService, private router: Router) { }

  ngOnInit(): void {
  }

public insertProj(){

  let response = this.service.insertProject(this.project)
  response.subscribe((data)=>this.message=data);
}

public back(){

  this.router.navigate(["/form"])
}

}
