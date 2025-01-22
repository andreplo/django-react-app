from django.shortcuts import render
from datetime import datetime
from django.http import JsonResponse

# Create your views here.

EMPLOYEES = [
    {"id": 1, "first_name": "Andreas", "last_name": "Ploumpis", "age": 29},
    {"id": 2, "first_name": "Lilian", "last_name": "Tsioutsia", "age": 27},
    {"id": 3, "first_name": "Marizeta", "last_name": "Ploumpi", "age": 25},
    {"id": 4, "first_name": "Nikolaos", "last_name": "Souleles", "age": 29},
]

def index(request):
    current_time = datetime.now().strftime("%I %p %S")
    current_date = datetime.now().strftime("%A %d-%m-%Y")

    data = {
        'time': current_time,
        'date': current_date,
        'random': 'staffeyyy',
    }

    return JsonResponse(data)

# localhost:8000/api/employees/
def getAllEmployees(request):
    return JsonResponse(EMPLOYEES, safe=False)

# localhost:8000/api/employees/<id>
def getEmployeeById(request, id):
    obj = list(filter(lambda emp: emp["id"] == int(id), EMPLOYEES))
    return JsonResponse(list(obj), safe=False)


