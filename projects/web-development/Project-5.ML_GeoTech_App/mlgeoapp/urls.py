from django.urls import path
from . import views
from . import login_reg_logout



urlpatterns = [
    path('', views.navBar, name='nav'),
    path('plot-csv/', views.plotCSV, name='plotCSV'),
    

    # path('', login_reg_logout.login, name='login'),
    # path('', login_reg_logout.register, name='register'),
    # path('', login_reg_logout.logout, name='logout'),

]
