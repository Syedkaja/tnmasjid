export class Student{
    constructor(public id?: number, public fName?: string, public lName?: string, public emailId?: string, public gender?: string, public branch?: string,
        public rollNo?: number, public fatherName?: string, public motherName?: string, public phoneParent?: number, public phoneStudent?: number,
        public address?: string, public district?: string, public state?: string, public pincode?: number)
        {
            this.id = id;
            this.fName = fName;
            this.lName = lName;
            this.emailId = emailId;
            this.gender = gender;
            this.branch = branch;
            this.rollNo = rollNo;
            this.fatherName = fatherName;
            this.motherName = motherName;
            this.phoneParent = phoneParent;
            this.phoneStudent = phoneStudent;
            this.address = address;
            this.district = district;
            this.state = state;
            this.pincode =pincode;
        }
}