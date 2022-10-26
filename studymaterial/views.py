from django.shortcuts import render
from .models import fields

def render_initial_data(request):
    return render(request, 'look.html', {})
