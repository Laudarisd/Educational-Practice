from django.shortcuts import redirect, render
from django.views.generic import View
from django.views import View


class TaskView(View):
    def post(self, request):
        # Perform necessary operations and obtain the training result data
        training_result = "Training Result Data"  # Replace with your actual training result data
        
        context = {
            'training_result': training_result,
        }
        return render(request, 'training.html', context)

class TrainingResultView(View):
    def post(self, request):
        # Perform necessary operations and obtain the training result data
        training_result = "Training Result Data"  # Replace with your actual training result data
        
        context = {
            'training_result': training_result,
        }
        
        return render(request, 'training.html', context)