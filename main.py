from models import *
from flask import Flask, jsonify, abort, make_response, request
from flask_restful import Api, Resource, reqparse, fields, marshal
from datetime import datetime,date
import datetime as dt

from flask.json import JSONEncoder

from flask_httpauth import HTTPBasicAuth
from flask.views import MethodView
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'cmssssssecretkeyissimple'
api = Api(app)

class StudentApi(MethodView):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('f_name', type=str, required=True, help="First name is required", location= 'json')
        self.reqparse.add_argument('l_name', type=str, location= 'json')
        self.reqparse.add_argument('email_id', type=str, required=True, help="Email Id is required", location= 'json')
        self.reqparse.add_argument('gender', type=str, required=True, help="Gender is required", location= 'json')
        self.reqparse.add_argument('branch', type=str, location= 'json')
        self.reqparse.add_argument('roll_no', type=str, location= 'json')
        self.reqparse.add_argument('father_name', type=str, location= 'json')
        self.reqparse.add_argument('mother_name', type=str, location= 'json')
        self.reqparse.add_argument('phone_parent', type=str, location= 'json')
        self.reqparse.add_argument('phone_student', type=str, location= 'json')
        self.reqparse.add_argument('address', type=str, location= 'json')
        self.reqparse.add_argument('district', type=str, location= 'json')
        self.reqparse.add_argument('state', type=str, location= 'json')
        self.reqparse.add_argument('pincode', type=str, location= 'json')
        super(StudentApi, self).__init__()

    @db_session
    def get(self, id):
        print("get")
        try:
            student = Student[id]
        except Exception as e:
            abort(404)
        return jsonify(student.to_dict())

    @db_session
    def put(self, id):
        try:
            student = Student[id]
        except Exception as e:
            print(e)
            abort(404)
        
        params = {}
        args = self.reqparse.parse_args()
        for key, value in args.items():
            if value is not None:
                params[key] = value
        student.set(**params)
        commit()
        student_dict = student.to_dict()
        return jsonify({"success": True, "student":student_dict})
    
    @db_session
    def delete(self, id):
        try:
            student = Student[id]
        except Exception as e:
            abort(404)
        student.delete()
        commit()
        return {'success':'True'}

class StudentListApi(MethodView):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('f_name', type=str, required=True, help="First name is required", location= 'json')
        self.reqparse.add_argument('l_name', type=str, location= 'json')
        self.reqparse.add_argument('email_id', type=str, required=True, help="Email Id is required", location= 'json')
        self.reqparse.add_argument('gender', type=str, required=True, help="Gender is required", location= 'json')
        self.reqparse.add_argument('branch', type=str, location= 'json')
        self.reqparse.add_argument('roll_no', type=str, location= 'json')
        self.reqparse.add_argument('father_name', type=str, location= 'json')
        self.reqparse.add_argument('mother_name', type=str, location= 'json')
        self.reqparse.add_argument('phone_parent', type=str, location= 'json')
        self.reqparse.add_argument('phone_student', type=str, location= 'json')
        self.reqparse.add_argument('address', type=str, location= 'json')
        self.reqparse.add_argument('district', type=str, location= 'json')
        self.reqparse.add_argument('state', type=str, location= 'json')
        self.reqparse.add_argument('pincode', type=str, location= 'json')
        super(StudentListApi, self).__init__()

    @db_session
    def get(self):
        students = []
        try:
            students = select(s for s in Student)[:]
        except:
            abort(404)
        li = []
        for students in students:
            li.append(students.to_dict())
        return jsonify({'success': True, 'students':li})

    @db_session
    def post(self):
        args = self.reqparse.parse_args()
        student = {
            "f_name": args["f_name"],
            "l_name": args["l_name"],
            "email_id": args["email_id"],
            "gender": args["gender"],
            "branch": args["branch"],
            "roll_no": args["roll_no"],
            "father_name": args["father_name"],
            "mother_name": args["mother_name"],
            "phone_parent": args["phone_parent"],
            "phone_student": args["phone_student"],
            "address": args["address"],
            "district": args["district"],
            "state": args["state"],
            "pincode": args["pincode"]
        }
        db_student = Student( f_name = student['f_name'], l_name = student['l_name'], email_id = student['email_id'], gender = student['gender'], branch = student['branch'], roll_no = student['roll_no'], father_name = student['father_name'], mother_name = student['mother_name'], phone_parent = student['phone_parent'], phone_student = student['phone_student'], address = student['address'], district = student['district'], state= student['state'], pincode = student['pincode'])
        commit()
        return jsonify({'success':True})


@app.route("/")
def root():
    return app.send_static_file("index.html")


# to support html5 pushstate
@app.errorhandler(404)
def serve_root(path):
    return app.send_static_file("index.html")

api.add_resource(StudentListApi, '/students', endpoint = 'students')
api.add_resource(StudentApi, '/student/<int:id>', endpoint = 'student')

if __name__ == '__main__':
    app.run( host ='0.0.0.0', port=5000, debug=True)