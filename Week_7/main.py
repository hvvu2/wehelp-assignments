from flask import Flask
from view.auth import auth
from view.user import user
from view.api import api
import os

main = Flask(__name__)

main.secret_key = os.getenv("SECRET_KEY")

main.register_blueprint(auth, prefix="/")
main.register_blueprint(user, prefix="/member")
main.register_blueprint(api, prefix="/api")

if __name__ == "__main__":
    main.run(port=3000)