from flask import Flask, request, redirect, session, render_template

app = Flask(__name__)

app.secret_key="thisisatestauthsystem"

userData = {
    "test":"test",
    "admin":"123",
}

@app.route("/")
def index():
    if "logged_in" in session:
        username = session["logged_in"]
        return render_template("member_page.html", user = username)
    else:
        return render_template("index.html")

@app.route("/signin", methods=["POST"])
def authUser():
    username = request.form["username"]
    pwd = request.form["pwd"]

    if (username in userData) and (pwd == userData[username]):
        session["logged_in"] = username
        return redirect("/member")

    elif (username == "") or (pwd == ""):
        return redirect("/error/?message=empty")

    elif (username not in userData) or (pwd != userData[username]):
        return redirect("/error/?message=wrong")

@app.route("/member")
def member():
    if "logged_in" in session:
        username = session["logged_in"]
        return render_template("member_page.html", user = username)
    
    else:
        return redirect("/")

@app.route("/signout")
def signout():
    session.clear()
    return redirect("/")


@app.route("/error/")
def error():
    error = request.args.get("message")

    if error == "empty":
        return render_template("error_page.html", text = "Please enter username and password.")

    else:
        return render_template("error_page.html", text = "Username or password is incorrect.")

app.run(port=3000)
