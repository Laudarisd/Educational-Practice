import base64
import csv
import io
import os
import tempfile
import uuid
import seaborn as sns
from django.conf import settings
import base64
from django.http import HttpResponse, HttpResponseRedirect
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

   
class HomePage(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')
    def post(self, request, *args, **kwargs):
        # handle form submission
        return redirect('home')
class SaveCSV(View):
    def get(self, request):
        return render(request, 'index.html') #Display the initial form
    def post(self, request):
        #if request.method == 'POST' and 'document' in request.FILES:
        if 'document' in request.FILES:
            uploaded_file = request.FILES['document']
            self.plot_type = request.POST.get('plot_type')
            # check if the file ends with csv
            if uploaded_file.name.endswith('.csv'):
                # Let's save the file in the data folder
                current_dir = settings.BASE_DIR / 'ml_in_geotech'
                file_directory = os.path.join(current_dir, 'data')
                if not os.path.exists(file_directory):
                    os.makedirs(file_directory)
                file_path = os.path.join(file_directory, uploaded_file.name)
                # remove old files if any
                if os.path.exists(file_path):
                    os.remove(file_path)
                with open(file_path, 'wb+') as destination:
                    for chunk in uploaded_file.chunks():
                        destination.write(chunk)
                # call function readfile_plot
                return self.readfile_plot(file_path)
            else:
                return HttpResponse('Invalid file type. Only CSV files are allowed.')
        else:
            return HttpResponse('Invalid request method.')
    def readfile_plot(self, file_path):
        # Read file from the file path
        data = pd.read_csv(file_path)
        # Get data shape and columns
        data_shape = data.shape
        data_columns = data.columns.tolist()

        # Create plot of the data based on the selected plot type
        # fig, ax = plt.subplots()
        # if self.plot_type == 'scatter':
        #     ax.scatter(data['x'], data['z'])
        #     ax.set_xlabel('x')
        #     ax.set_ylabel('z')
        #     ax.set_title('Scatter Plot')
        # elif self.plot_type == 'line':
        #     ax.plot(data['x'], data['z'])
        #     ax.set_xlabel('x')
        #     ax.set_ylabel('z')
        #     ax.set_title('Line Plot')
        # elif self.plot_type == 'hist':
        #     ax.hist(data['x'], bins=10)
        #     ax.set_xlabel('x')
        #     ax.set_ylabel('Frequency')
        #     ax.set_title('Histogram')
        # elif self.plot_type == 'bar':
        #     sns.barplot(data=data, x='x', y='z')
        #     ax.set_xlabel('x')
        #     ax.set_ylabel('z')
        #     ax.set_title('Bar Plot')
        # # Add more conditions for additional plot types
        # # Remove old scatter_plot file if it exists
        # old_plot_path = os.path.join('ml_in_geotech', 'data', 'scatter_plot.png')
        # if os.path.exists(old_plot_path):
        #     os.remove(old_plot_path)

        # # Save the plot as scatter_plot.png
        # plot_path = os.path.join('ml_in_geotech', 'data', 'plot.png')
        # fig.savefig(plot_path)
        # plt.close(fig)
        # # Get the URL path of the saved plot
        # plot_url = os.path.join('data', plot_path)
        # # Encode the PNG image as a base64 string
        # with open(plot_path, 'rb') as f:
        #     encoded_image = base64.b64encode(f.read()).decode('utf-8')
         # Create plot of the data
        fig, ax = plt.subplots()
        ax.plot(data['x'], data['z'])
        ax.set_xlabel('x')
        ax.set_ylabel('z')
        ax.set_title('Plot of x and z')
        # Remove old scatter_plot file if it exists
        old_plot_path = os.path.join('ml_in_geotech', 'data', 'plot.png')
        if os.path.exists(old_plot_path):
            os.remove(old_plot_path)

        # Save the plot as scatter_plot.png
        plot_path = os.path.join('ml_in_geotech', 'data', 'plot.png')
        fig.savefig(plot_path)
        plt.close(fig)

        # Get the URL path of the saved plot
        plot_url = os.path.join('data', plot_path)
        # Encode the PNG image as a base64 string
        with open(plot_path, 'rb') as f:
            encoded_image = base64.b64encode(f.read()).decode('utf-8')
        # Extract training features and test feature from the data
        training_features = data_columns.copy()
        training_features.remove('x')  # Remove 'x' from training features
        test_feature = 'x'
        x_columns, y_columns = self.extract_columns(file_path)
        # Render the 'index.html' template with the necessary context
        context = {
            'x_columns': x_columns,
            'y_columns': y_columns,
            'plot_type': self.plot_type,
            'data_shape': data_shape,
            'data_columns': data_columns,
            'png_image': encoded_image,
            'training_features': training_features,
            'test_feature': test_feature,
            'plot_url': plot_url,
        }
        return render(self.request, 'index.html', context)
        #return redirect('index') + '#csv_upload'

    
    def extract_columns(self, file_path):
        columns = []
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
        except Exception as e:
            # Handle other exceptions
            print(f"Error: {e}")
        return columns, columns  # Assuming both x and y columns are the same







                


        