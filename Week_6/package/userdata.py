import os, mysql.connector
from mysql.connector import pooling
from dotenv import load_dotenv

load_dotenv

class DBManager:
    def __init__(self, host, port, user, password, database):
        self.connection = mysql.connector.connect(host=host, port=port, user=user, password=password, database=database)
        self.cursor = self.connection.cursor()

    def insertNewUser(self, name, username, password):
        newUser = f"INSERT INTO `member` (`name`, `username`, `password`) VALUES (\"{name}\", \"{username}\", \"{password}\");"
        self.cursor.execute(newUser)
        
        try:
            self.connection.commit()

        except Exception:
            self.connection.rollback()

    def showUsers(self):
        self.cursor.execute("SELECT `username` FROM `member`;")
        users = self.cursor.fetchall()

        return users

    def getUserInfo(self, username):
        self.cursor.execute(f"SELECT `name`, `username`, `password` FROM `member` WHERE `username` = \"{username}\";")

        try:
            return self.cursor.fetchall()[0]

        except IndexError:
            return ()
    
    def __exit__(self):
        self.connection.close()

db = DBManager(os.getenv("HOST"), os.getenv("PORT"), os.getenv("USER"), os.getenv("PASSWORD"), os.getenv("DATABASE"))