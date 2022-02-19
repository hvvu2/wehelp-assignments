from flask import Blueprint, render_template, session, redirect, url_for

user = Blueprint("user_bp", __name__, static_folder="static", template_folder="templates")

@user.route("/member/", methods=["GET", "POST"])
def index():
    if "logged" in session:
        return render_template("member.html", user = session["logged"])
    
    else:
        return redirect(url_for("auth_bp.index"))
