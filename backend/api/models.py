from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here. Hey

class User(AbstractUser):
	topics_status = 			models.CharField(max_length = 250, null = True, blank = True)
	topics_pinned = 			models.CharField(max_length = 30, default = "000000000000000000000000000000")
	total_problems_done = 		models.PositiveIntegerField(default = 0)

	def __str__(self):
		return str(self.username)

	def save(self, *args, **kwargs):
		super(User, self).save(*args, **kwargs)