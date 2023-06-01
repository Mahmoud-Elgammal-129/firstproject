import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { AuthService } from 'src/app/services/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
constructor(private service:DoctorService ,private auth:AuthService, private toastr:ToastrService){
}
subjects:any[]=[]
ngOnInit(){
  this.getsubject()
}

getsubject(){
  this.service.getAllSubjects().subscribe((res:any)=>{
    this.subjects=res
  })
}
getuserinfo(){
  
}
delete(index:number){
  let id = this.subjects[index].id
  this.subjects.splice(index,1)
  this.service.deletesubject(id).subscribe((res:any)=>{
this.toastr.success("تم حذف المادة بنجاح")
  })
}
}
