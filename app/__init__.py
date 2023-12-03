# app/__init__.py
from flask import Flask

app = Flask(__name__)

from app.routes import routes_bp  # Adjust the import path

app.register_blueprint(routes_bp)

