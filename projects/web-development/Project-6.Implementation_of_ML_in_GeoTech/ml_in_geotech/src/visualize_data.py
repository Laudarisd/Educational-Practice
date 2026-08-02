from django.shortcuts import redirect, render
from django.views.generic import View
from django.views import View



class ImportCSV(View):
    '''
    import csv from data folder
    ask user to choose csv columns in attributes
    plot choosen columns in csv_plot in html
    '''
    def get(self, request):
        return render(request, 'index.html') #Display the initial form
    def post(self, request):
        pass