import requests

url = "https://jsonplaceholder.typicode.com/posts?userId=3"

try:
    response = requests.get(url)
    response.raise_for_status()  # Raises an exception for HTTP errors

    posts = response.json()

    for post in posts:
        print(post["title"].upper())

    print(f"\nTotal posts: {len(posts)}")

except requests.exceptions.RequestException as e:
    print(f"Error fetching posts: {e}")
