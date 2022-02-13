import os, mysql.connector
from package.userdata import db

usernameTuple = ()
for username in db.showUsers():
    usernameTuple += username

print(type(usernameTuple[1]))