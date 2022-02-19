import os, mysql.connector
from mysql.connector import pooling
from dotenv import load_dotenv

load_dotenv

class DBManager:
    def __init__(self, host, port, user, password, database):
        self.connection = mysql.connector.connect(host=host, port=port, user=user, password=password, database=database)
        self.cursor = self.connection.cursor()

    def insertNewUser(self, name, username, password):
        newUser = "INSERT INTO `member` (`name`, `username`, `password`) VALUES (%(name)s, %(username)s, %(password)s);"
        newUserInfo = {"name" : name, "username" : username, "password" : password}
        self.cursor.execute(newUser, newUserInfo)
        
        try:
            self.connection.commit()

        except Exception:
            self.connection.rollback()

    def checkNewUser(self, newUser):
        self.cursor.execute("SELECT `username` FROM `member` WHERE `username` = %s;", (newUser,))

        try:
            if self.cursor.fetchall()[0]:
                return True

        except IndexError:
            return False

    def getUserInfo(self, username):
        self.cursor.execute("SELECT `name`, `username`, `password` FROM `member` WHERE `username` = %s;", (username,))

        try:
            return self.cursor.fetchall()[0]

        except IndexError:
            return ()
    
    def __exit__(self):
        self.connection.close()

db = DBManager(os.getenv("HOST"), os.getenv("PORT"), os.getenv("USER"), os.getenv("PASSWORD"), os.getenv("DATABASE"))