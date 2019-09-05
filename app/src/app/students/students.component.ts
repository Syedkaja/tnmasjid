import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StudentsService } from './students.service';
// import { jQueryService } from '../shared/services/jquery.service';
import { Student } from '../shared/student.model';

declare var $: any;

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements AfterViewInit, OnInit {
  students: Student[] = [];

  editMode: Boolean;

  id: number;
  firstName: any;
  lastName: any;
  emailId: any;
  gender: any;
  branch: any;
  rollNo: any;
  fatherName: any;
  motherName: any;
  phoneParent: any;
  phoneStudent: any;
  address: any;
  district: any;
  state: any;
  pincode: any;

  constructor(private router: Router, private studentsService: StudentsService) {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('#crud-table').DataTable();
    }, 1000);

  }

  ngOnInit() {
    this.getStudents();
    this.editMode = false;
  }

  openStudModal() {
    $('#new-stu-modal').modal('show');
  }

  closeStudModal() {
    this.editMode = false;
    this.id = null;
    this.firstName = "";
    this.lastName = "";
    this.emailId = "";
    this.gender = "";
    this.branch = "";
    this.rollNo = "";
    this.fatherName = "";
    this.motherName = "";
    this.phoneParent = "";
    this.phoneStudent = "";
    this.address = "";
    this.district = "";
    this.state = "";
    this.pincode = "";
    $('#new-stu-modal').modal('hide');
  }

  addStudent(form: NgForm) {
    let id = this.id;   
    if(id == undefined){
      this.studentsService.createStudent(form.value).subscribe(eventx => {
        if (eventx instanceof HttpResponse) {
          let data = eventx.body;
          console.log(data);
          if (data['success']) {
            this.closeStudModal();
            this.getStudents();
          }
        }
      })
    }else{
      this.studentsService.updateStudent(form.value, id).subscribe(eventx => {
        if (eventx instanceof HttpResponse) {
          let data = eventx.body;
          console.log(data);          
          if (data['success']) {
            this.closeStudModal();
            this.getStudents();
          }
        }
      })
    } 
    
  }

  getStudents() {
    this.students = [];
    this.studentsService.getStudents()
      .subscribe(eventx => {
        if (eventx instanceof HttpResponse) {
          let body = eventx.body;
          if (body['success']) {
            let students = body['students'];
            students.forEach(student => {
              let newStudent = new Student(student['id'], student['f_name'], student['l_name'], student['email_id'], student['gender'], student['branch'], student['roll_no'], student['father_name'], student['mother_name'], student['phone_parent'], student['phone_student'], student['address'], student['district'], student['state'], student['pincode']);
              this.students.push(newStudent);
              
            })
            setTimeout(() => {
              $('#crud-table').DataTable();
              console.log(this.students);
            }, 1000);
          }
        }
      })
  }

  editRow(student) {

    this.editMode = true;
    this.id = student.id;
    this.firstName = student.fName;
    this.lastName = student.lName;
    this.emailId = student.emailId;
    this.gender = student.gender;
    this.branch = student.branch;
    this.rollNo = student.rollNo;
    this.fatherName = student.fatherName;
    this.motherName = student.motherName;
    this.phoneParent = student.phoneParent;
    this.phoneStudent = student.phoneStudent;
    this.address = student.address;
    this.district = student.district;
    this.state = student.state;
    this.pincode = student.pincode;

    this.openStudModal();
  }

  deleteRow(id){
    alert("Delete Student ?");    
    this.studentsService.deleteStudent(id)
        .subscribe(eventx =>{
          if(eventx instanceof HttpResponse){
            let data = eventx.body
            if(data['success']) {
              this.getStudents();
            }
          }
        })
  }

}
