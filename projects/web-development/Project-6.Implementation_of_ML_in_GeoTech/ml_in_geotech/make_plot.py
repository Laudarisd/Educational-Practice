import csv
from django.shortcuts import redirect, render
from django.views.generic import View
from django.views import View

class UpdatePlotView(View):
    def get(self, request):
        # Render the form to update plot options
        return render(request, 'index.html')

    def post(self, request):
        # Retrieve the plot options from the form data
        x_column = request.POST.get('x_column')
        y_column = request.POST.get('y_column')
        plot_type = request.POST.get('plot_type')

        # Retrieve the file path from the form data
        file_path = request.POST.get('file_path')

        # Extract the columns from the file path
        x_column, y_column = self.extract_columns(file_path)

        # Perform any necessary processing based on the plot options
        # ...

        # Render the updated plot or perform any other relevant action
        # ...

        # Example: Render a template with the updated plot
        context = {
            'x_column': x_column,
            'y_column': y_column,
            'plot_type': plot_type,
        }
        return render(request, 'index.html', context)

    def extract_columns(self, file_path):
        columns = []
        # Read the file and extract the column names
        try:
            with open(file_path, 'r') as file:
                reader = csv.reader(file)
                columns = next(reader, [])  # Get the column names from the first row
        except FileNotFoundError:
            # Handle file not found error
            print(f"File not found: {file_path}")
        except csv.Error as e:
            # Handle any CSV parsing errors
            print(f"CSV parsing error: {e}")
        return columns, columns  # Assuming both x and y columns are the same
