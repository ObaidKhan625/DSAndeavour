from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import ArrayField
# Create your models here. Hey

class User(AbstractUser):
	problem_status = 			models.CharField(max_length = 350, default = '0'*220)
	topics_pinned = 			models.CharField(max_length = 31, default = '0'*31)
	problems_notes = 			ArrayField(models.TextField(default = ""), default=list(["" for i in range(0, 220)]))

	def __str__(self):
		return str(self.username)
	
	def save(self, *args, **kwargs):
		super(User, self).save(*args, **kwargs)

class Feedback(models.Model):
	user = 						models.ForeignKey(User, on_delete=models.CASCADE)
	feedback = 					models.TextField(blank = True, null = True)

	def __str__(self):
		return str(self.user) + ' feedback'