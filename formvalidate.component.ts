import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-formvalidate',
  templateUrl: './formvalidate.component.html',
  styleUrls: ['./formvalidate.component.scss']
})
export class FormvalidateComponent {
  title='Form Validation'
  submitted:boolean=false
  userForm:any
  ngOnInit(){
    this.userForm= new FormGroup({
      username:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      gender:new FormControl('', [Validators.required]),
      pwd: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,30}$/) ]),
      cpwd:new FormControl('',[Validators.required]),
      skills:new FormControl('',[Validators.required]),
    })
  }
  get username(){
    return this.userForm.get("username")
  }
  get email(){
    return this.userForm.get("email")
  }
  get gender(){
    return this.userForm.get("gender")
  }
  get pwd(){
    return this.userForm.get("pwd")
  }
  get cpwd(){
    return this.userForm.get("cpwd")
  }
  get skills(){
    return this.userForm.get("skills")
  }

  submit(){
      if (this.userForm.invalid) {
        alert('Form not submitted successfully!');
      } else {
        alert('valid successful.');
      }
    
  }

}