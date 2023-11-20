from flask import Flask, render_template, send_file


app = Flask(__name__, static_folder='static', template_folder='static/templates')


@app.route('/', methods=['GET'])
def index():
    # return send_file("static/templates/index.html", mimetype='text/html')
    return render_template("index.html")
    # return render_template("index.html")


@app.route('/beerpong-turnier', methods=['GET'])
def beerpong_turnier():
    return send_file("static/templates/beerpong-turnier.html", mimetype='text/html')


@app.route('/tournament-bracket', methods=['GET'])
def tournament_bracket():
    return send_file("static/templates/tournament-bracket.html", mimetype='text/html')


if __name__ == '__main__':
    app.run(debug=True, port=80)
