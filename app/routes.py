# app/routes.py
from app.models import predict
from flask import Blueprint, jsonify, request

routes_bp = Blueprint('routes', __name__)

@routes_bp.route('/')
def index():
    return jsonify(message="Welcome to the Route Planning App!")

# Add other routes as needed...



