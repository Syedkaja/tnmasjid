from datetime import date, datetime, timedelta
from pony.orm import *
# from passlib.apps import custom_app_context as pwd_context
# from routes import app, decode_jwt
from flask import jsonify
# from jwt import encode, decode
# from jwt.exceptions import ExpiredSignatureError, DecodeError

db = Database()

class Student(db.Entity):
    id = PrimaryKey(int, auto=True)
    f_name = Required(str, 20)
    l_name = Optional(str, 20)
    email_id = Required(str, 30)
    gender = Required(str, 20)
    branch = Optional(str, 20)
    roll_no = Optional(int)
    father_name = Optional(str)
    mother_name = Optional(str)
    phone_parent = Optional(int)
    phone_student = Optional(int)
    address = Optional(str)
    district = Optional(str)
    state = Optional(str)
    pincode = Optional(str)

db.bind(provider='mysql', host='localhost',user='root', passwd='Admin123', db = 'college')
db.generate_mapping(create_tables = True)