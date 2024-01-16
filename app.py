from flask import Flask, render_template, send_file

import helper_functions

app = Flask(__name__, static_folder='static', template_folder='static/templates')


@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")


@app.route('/bpt', methods=['GET'])
def beerpong_turnier():
    date_result = helper_functions.check_if_date_is_okay()
    if date_result:
        return date_result

    return send_file("static/templates/beerpong-turnier.html", mimetype='text/html')


@app.route('/tb', methods=['GET'])
def tournament_bracket():
    date_result = helper_functions.check_if_date_is_okay()
    if date_result:
        return date_result

    return send_file("static/templates/tournament-results.html", mimetype='text/html')


if __name__ == '__main__':
    app.run(debug=False)
