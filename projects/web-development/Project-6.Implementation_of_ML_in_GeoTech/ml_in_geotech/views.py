import base64
import csv
import io
import os
import tempfile
import uuid
import seaborn as sns
from django.conf import settings
import base64
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import redirect, render
from django.views.generic import View
from matplotlib import pyplot as plt
import pandas as pd
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from django.http import HttpResponse
from django.views import View
import base64
from django.shortcuts import reverse
from django.http import HttpResponseRedirect
from django.http import HttpResponseRedirect, QueryDict

   
from io import StringIO

from io import BytesIO


class HomePage(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')
    def post(self, request, *args, **kwargs):
        # handle form submission
        return redirect('home')

class SaveCSV(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')

    def post(self, request):
        if 'document' in request.FILES:
            uploaded_file = request.FILES['document']

            # Check if the file ends with csv
            if uploaded_file.name.endswith('.csv'):
                # Read the uploaded CSV file directly into a pandas DataFrame
                uploaded_data = pd.read_csv(uploaded_file)

                # Convert DataFrame to a list of dictionaries
                uploaded_data_dict = uploaded_data.to_dict(orient='records')

                # Store the uploaded data in the session
                request.session['uploaded_file'] = uploaded_data_dict

                # Extract the column names from the uploaded data
                x_columns, y_columns = self.extract_columns(uploaded_data)

                # Render the 'index.html' template with the necessary context
                context = {
                    'x_columns': x_columns,
                    'y_columns': y_columns,
                }
                return render(request, 'index.html', context)
            else:
                return HttpResponse('Invalid file type. Only CSV files are allowed.')
        elif 'x_column' in request.POST and 'y_column' in request.POST:
            # Retrieve the selected x and y columns
            x_column = request.POST['x_column']
            y_column = request.POST['y_column']
            print("x_column:", x_column)
            print("y_column:", y_column)

            # Create and save the plot
            uploaded_data = request.session.get('uploaded_file')
            print("uploaded_data:", uploaded_data)
            self.create_and_save_plot(uploaded_data, x_column, y_column)

            # Return the plot URL as a JSON response
            plot_url = self.get_plot_url()
            return JsonResponse({'plot_url': plot_url})
        else:
            return HttpResponse('Invalid request method.')
    def get_plot_url(self):
        return reverse('plot_image_view')
    def extract_columns(self, uploaded_data):
        columns = uploaded_data.columns.tolist()
        return columns, columns  # Assuming both x and y columns are the same

    def create_and_save_plot(self, uploaded_data, x_column, y_column):
        print("Creating and saving plot...")
        # Create plot of the data based on the selected columns
        fig, ax = plt.subplots()
        ax.plot(uploaded_data[x_column], uploaded_data[y_column])
        ax.set_xlabel(x_column)
        ax.set_ylabel(y_column)
        ax.set_title(f"Plot of {x_column} and {y_column}")

        # Save the plot as "plot.png" in the "data" folder
        plot_folder = os.path.join(settings.MEDIA_ROOT, 'data')
        if not os.path.exists(plot_folder):
            os.makedirs(plot_folder)

        plot_path = os.path.join(plot_folder, 'plot.png')
        fig.savefig(plot_path, format='png')
        plt.close(fig)

    def get_encoded_plot_image(self):
        plot_folder = os.path.join(settings.MEDIA_ROOT, 'data')
        plot_path = os.path.join(plot_folder, 'plot.png')

        try:
            with open(plot_path, 'rb') as image_file:
                plot_bytes = image_file.read()

            encoded_image = base64.b64encode(plot_bytes).decode('utf-8')
            return HttpResponse(encoded_image, content_type='image/png')
        except FileNotFoundError:
            return HttpResponse('Plot not found.', status=404)
    def plot_image_view(request):
        #plot_path = os.path.join(settings.MEDIA_ROOT, 'data', 'plot.png')
        plot_folder = os.path.join(settings.MEDIA_ROOT, 'data')
        plot_path = os.path.join(plot_folder, 'plot.png')
        try:
            with open(plot_path, 'rb') as image_file:
                plot_bytes = image_file.read()

            encoded_image = base64.b64encode(plot_bytes).decode('utf-8')
            return HttpResponse(encoded_image, content_type='image/png')
        except FileNotFoundError:
            return HttpResponse('Plot not found.', status=404)

