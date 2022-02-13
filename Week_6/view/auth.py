from flask import Blueprint, render_template, redirect, session, request, url_for
from package.userdata import db

auth = Blueprint("auth_bp", __name__, static_folder="static", template_folder="templates")

@auth.route("/")
def index():
	if "logged" in session:
		return redirect(url_for("user_bp.index"))

	else:
		return render_template("index.html")


@auth.route("/signin", methods=["POST"])
def authUser():
	loginUsername = request.form["login-username"]
	loginPwd = request.form["login-pwd"]
	userInfo = db.getUserInfo(loginUsername)
	
	if (loginUsername in userInfo) and (loginPwd in userInfo):
		session["logged"] = userInfo[0]
		return redirect(url_for("user_bp.index"))

	else:
		return redirect(url_for(".error") + "?message=invalid_login")


@auth.route("/signout", methods=["GET"])
def signout():
	session.clear()
	return redirect(url_for(".index"))


@auth.route("/signup", methods=["POST"])
def signup():
	signupName = request.form["signup-name"]
	signupUsername = request.form["signup-username"]
	signupPwd = request.form["signup-pwd"]
	usernameList = ()

	for username in db.showUsers():
		usernameList += username
	
	if signupUsername in usernameList:
		return redirect(url_for(".error") + "?message=invalid_username")
	
	else:
		db.insertNewUser(signupName, signupUsername, signupPwd)
		return redirect(url_for(".index"))


@auth.route("/error/", methods=["GET"])
def error():
	errorType = request.args.get("message")

	if errorType == "invalid_login":
		return render_template("error.html", errorMessage = "Username or password is incorrect.")

	elif errorType == "invalid_username":
		return render_template("error.html", errorMessage = "This Username is already taken.")
