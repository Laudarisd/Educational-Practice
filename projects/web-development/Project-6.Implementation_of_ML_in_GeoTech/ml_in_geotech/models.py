from django.db import models

# Create your models here.
#create a table for the data
# columns: TIMESTEP	type	x	z	v_acc	radius

class Particles(models.Model):
    TIMESTEP = models.IntegerField()
    TYPE = models.IntegerField()
    X = models.FloatField()
    Z = models.FloatField()
    V_ACC = models.FloatField()
    RADIUS = models.FloatField()
    
    def __str__(self):
        return self.TIMESTEP

class CsvData(models.Model):
    csv_file = models.FileField(upload_to='csv_files/')
    training_features = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def data_columns(self):
        # Retrieve the column names from the CSV file
        if self.csv_file:
            with open(self.csv_file.path, 'r') as file:
                headers = file.readline().strip().split(',')
            return headers
        else:
            return []

    def __str__(self):
        return f"CSV Data - {self.pk}"

