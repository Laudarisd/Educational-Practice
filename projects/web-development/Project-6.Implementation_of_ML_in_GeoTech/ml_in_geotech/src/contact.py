
from django.shortcuts import redirect, render
from django.views.generic import View
from django.views import View


class Contact(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'contact.html')

    def post(self, request, *args, **kwargs):
        # handle form submission
        return redirect('contact')