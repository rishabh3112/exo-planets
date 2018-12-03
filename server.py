# Flask Imports
from flask import Flask
from flask import Response
from flask import render_template
# Pandas Imports
import pandas as pd

app = Flask(__name__, static_folder="front/dist/", static_url_path="")

# Load dataframe from the dataset
data = pd.read_csv('data.csv')

# api for GET on /
@app.route('/api/', methods=["GET"])
def index():
    return Response(response=data[["PlanetIdentifier","DistFromEarthParsec"]].to_json(orient="index"),
    status=200,
    mimetype="application/json")

# api for GET on /<id>
@app.route('/api/<int:id>')
def exoplanet(id):
    if id>2132 or id<0:
        return Response(response='{"error": 404}', status=200, mimetype="application/json")

    return Response(response=data.iloc[id].to_json(),
    status=200,
    mimetype="application/json")

# Serve Vue front-end
@app.route('/')
def frontEnd():
    return app.send_static_file('index.html');

# Error handler
@app.errorhandler(404)
def _404(e):
    return Response(response='{"error": 404}', status=404, mimetype="application/json")