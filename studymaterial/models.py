from django.db import models
from django.db.models.fields import CharField

class fields(models.Model):
    year          = models.IntegerField()
    subject_code  = models.CharField(max_length=6)
    

