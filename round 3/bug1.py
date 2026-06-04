import requests

API_BASE_URL = "https://hr-internal.company.com/api"
API_TOKEN = "your_token_here"

def get_employee(employee_id):

    url = f"{API_BASE_URL}/employees/{employee_id}"
    
#Bug A: Missing Authorization Header

    headers = {
        "Authorization": f"Bearer {API_TOKEN}"
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 404:
        return None


    response.raise_for_status()
#Bug B: Not handling 404 response correctly
    data = response.json()
    return data.get("employee")

