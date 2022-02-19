import os, mysql.connector
from mysql.connector import pooling
from dotenv import load_dotenv

load_dotenv

class DBManager:
    def __init__(self, host, port, user, password, database):
        self.connection = mysql.connector.connect(host=host, port=port, user=user, password=password, database=database)
        self.cursor = self.connection.cursor()

    def insertNewUser(self, name, username, password):
        cmd = "INSERT INTO `member` (`name`, `username`, `password`) VALUES (%(name)s, %(username)s, %(password)s);"
        parameter = {"name" : name, "username" : username, "password" : password}
        self.cursor.execute(cmd, parameter)
        
        try:
            self.connection.commit()

        except Exception:
            self.connection.rollback()

    def checkNewUser(self, username):
        self.cursor.execute("SELECT `username` FROM `member` WHERE `username` = %s;", (username,))
        result = self.cursor.fetchone()

        if result != None:
            return True

        else:
            return False

    def getUserInfo(self, username):
        self.cursor.execute("SELECT `name`, `username`, `password` FROM `member` WHERE `username` = %s;", (username,))
        result = self.cursor.fetchone()

        if result != None:
            return result
        
        else:
            return ()

    def api_getUserInfo(self, username):
        self.cursor.execute("SELECT `id`, `name`, `username`FROM `member` WHERE `username` = %s;", (username,))
        result = self.cursor.fetchone()

        if result != None:
            return result
        
        else:
            return False

    def changeName(self, oldName, newName):
        cmd = "UPDATE `member` SET `name` = %(newName)s WHERE `name` = %(oldName)s;"
        parameter = {"newName":newName, "oldName":oldName}
        self.cursor.execute(cmd, parameter)

        try:
            self.connection.commit()

        except Exception:
            self.connection.rollback()


db = DBManager(os.getenv("HOST"), os.getenv("PORT"), os.getenv("USER"), os.getenv("PASSWORD"), os.getenv("DATABASE"))
