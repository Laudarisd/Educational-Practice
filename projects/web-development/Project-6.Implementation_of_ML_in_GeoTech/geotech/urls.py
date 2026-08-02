"""
URL configuration for geotech project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from ml_in_geotech import views
from django.views.static import serve
from django.conf import settings
from ml_in_geotech.src import contact
from ml_in_geotech.src import train_data


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.HomePage.as_view(), name='home'),
    #path('contact/', views.Contact.as_view(), name='contact'),
    path('contact/', contact.Contact.as_view(), name='contact'),
    path('csv-plot/', views.SaveCSV.as_view(), name='csv_upload'),
    path('data/<path>/', serve, {'document_root': settings.BASE_DIR}),
    path('submit-task/', train_data.TaskView.as_view(), name='submit_task'),
    path('training/<int:data_shape>/<str:data_columns>/<str:plot_path>/<str:training_features>/<str:test_feature>/', 
            train_data.TrainingResultView.as_view(), name='training')
            
]





    

