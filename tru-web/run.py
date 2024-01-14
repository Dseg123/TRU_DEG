from app import app
import sys
sys.path.append('../models')

if __name__ == '__main__':
    app.run(debug=True)