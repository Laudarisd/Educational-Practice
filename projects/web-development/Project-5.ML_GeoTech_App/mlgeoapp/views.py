from django.shortcuts import render, redirect


# Create your views here.

def navBar(request):
    return render(request, 'nav_home.html')

def plotCSV(request):
    return render(request, 'plotCSV.html')
