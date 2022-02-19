from flask import Blueprint, request, session
from package.userdata import db
import json

api = Blueprint("api_bp", __name__)

@api.route

@api.route("/api/members", methods=["GET"])
def getUserInfo():
    targetUsername = request.args.get("username")

    if db.api_getUserInfo(targetUsername):
        result = db.api_getUserInfo(targetUsername)
        id = result[0]
        name = result[1]
        username = result[2]

        response = {
            "data":{
                "id":id,
                "name":name,
                "username":username
            }
        }
        return json.dumps(response)

    else:
        null = {
            "data":None
        }
        return json.dumps(null)


@api.route("/api/member", methods=["POST"])
def changeName():
    data = request.get_json()
    newName = data.get("name")
    oldName = session["logged"]

    if "logged" in session:
        db.changeName(oldName, newName)
        session["logged"] = newName
        
        ok = {
            "ok":True
        }
        return json.dumps(ok)

    else:
        error = {
            "error":True
        }
        return json.dumps(error)