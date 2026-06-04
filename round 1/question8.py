import requests

# London coordinates
city = "London"
latitude = 51.5074
longitude = -0.1278

url = "https://api.open-meteo.com/v1/forecast"

params = {
    "latitude": latitude,
    "longitude": longitude,
    "current_weather": "true"
}

# Weather code mapping
weather_codes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    61: "Light rain",
    80: "Rain showers",
    95: "Thunderstorm"
}

try:
    response = requests.get(url, params=params)
    response.raise_for_status()

    data = response.json()

    current_weather = data["current_weather"]

    temperature = current_weather["temperature"]
    weather_code = current_weather["weathercode"]

    condition = weather_codes.get(weather_code, "Unknown weather condition")

    print(f"City       : {city}")
    print(f"Temperature: {temperature}°C")
    print(f"Condition  : {condition}")

except requests.exceptions.RequestException as e:
    print(f"Error fetching weather data: {e}")