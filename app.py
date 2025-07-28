from flask import Flask, render_template, request
from timezonefinder import TimezoneFinder
import requests
from datetime import datetime
import pytz

app = Flask(__name__)

# Use sua chave da OpenWeatherMap aqui
WEATHER_API_KEY = '19c34b91a67e86969cff0157f9e9c5f5'

def get_weather(city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={WEATHER_API_KEY}&units=metric&lang=pt"
    response = requests.get(url)
    return response.json()

def get_time(lat, lon):
    tf = TimezoneFinder()
    timezone_str = tf.timezone_at(lat=lat, lng=lon)
    if timezone_str is None:
        timezone_str = 'UTC'
    tz = pytz.timezone(timezone_str)
    now = datetime.now(tz)
    return now.strftime('%H:%M'), now.hour

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        city = request.form['city']
        weather_data = get_weather(city)

        if weather_data.get('cod') != 200:
            return render_template('result.html', error='Cidade não encontrada.')

        lat = weather_data['coord']['lat']
        lon = weather_data['coord']['lon']
        time_str, hour = get_time(lat, lon)
        
        temp = weather_data['main']['temp']
        desc = weather_data['weather'][0]['description']
        icon = weather_data['weather'][0]['icon']

        # Define o tema com base no horário e clima
        if hour >= 6 and hour <= 18:
            time_theme = 'dia'
        else:
            time_theme = 'noite'

        # define o clima para selecionar o vídeo depois
        if 'chuva' in desc.lower():
            weather_theme = 'chuva'
        elif 'nuvem' in desc.lower():
            weather_theme = 'nublado'
        elif 'claro' in desc.lower() or 'sol' in desc.lower():
            weather_theme = 'ensolarado'
        else:
            weather_theme = 'padrao'

        return render_template('result.html',
                               city=city,
                               temp=temp,
                               desc=desc,
                               time_str=time_str,
                               icon=icon,
                               time_theme=time_theme,
                               weather_theme=weather_theme)

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
