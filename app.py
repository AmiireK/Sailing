from flask import Flask, render_template

app = Flask(__name__)

# Route for Home Page
@app.route("/")
def home():
    return render_template("home.html")

# Route for Home Page
@app.route("/keep-up-to-date")
def latest_news():
    return render_template("latest_news.html")

# Route for Home Page
@app.route("/programs")
def programs():
    return render_template("programs.html")

# Route for Home Page
@app.route("/registration")
def registration():
    return render_template("registration.html")

# Route for Home Page
@app.route("/meet-the-team")
def meet_the_team():
    return render_template("meet_the_team.html")

if __name__ == "__main__":
    app.run(debug=True)
