from flask import Flask, render_template, request

app = Flask(__name__)

gallery_images = [
    {'filename': 'peaks-water.jpg', 'alt': 'Peaks in an ocean'},
    {'filename': 'books-shelf.jpg', 'alt': 'A shelf with books and decoration pieces'},
    {'filename': 'female-model.jpg', 'alt': 'A female model posing for a shoot'},
    {'filename': 'lake-snow.jpg', 'alt': 'Mountains with snow and a lake'},
    {'filename': 'cup-chai.jpg', 'alt': 'Cup with red color fluid'},
    {'filename': 'green-valley.jpg', 'alt': 'Green mountains valley'}
]

contacts = []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/blogs')
def blogs():
    return render_template('blogs.html')

@app.route('/post')
def post():
    return render_template('post.html')

@app.route('/hobbies')
def hobbies():
    return render_template('hobbies.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html', gallery_images=gallery_images)

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Get form data from POST request
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # Save the submission in a list
        contacts.append({'name': name, 'email': email, 'message': message})

        return render_template('contact.html', success=True)

    # For GET request, just render the form
    return render_template('contact.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))

