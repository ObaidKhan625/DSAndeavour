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
		# self.problem_status = '0'*350
		super(User, self).save(*args, **kwargs)

# from django.db import models
# from django.contrib.auth.models import AbstractUser
# from mongoengine import Document, fields
# # Create your models here. Hey

# class User(AbstractUser):
# 	problem_status = 			fields.StringField(max_length = 350, default = '0'*350)
# 	topics_pinned = 			fields.StringField(max_length = 31, default = '0'*31)

# 	def __str__(self):
# 		return str(self.username)
	
# 	def create(self, *args, **kwargs):
# 		self.problem_status = '0'*350
# 		self.topics_pinned = '0'*31
# 		super(User, self).create(*args, **kwargs)
	
# 	def save(self, *args, **kwargs):
# 		# self.problem_status = '0'*350
# 		super(User, self).save(*args, **kwargs)

# class ProblemInfo(Document):
# 	note_content = 				fields.StringField(null = True, blank = True)
# 	user = 						fields.ReferenceField(User)
# 	problem_id = 				fields.IntField(null = True)
	
# 	def __str__(self):
# 		return str(self.user) + "'s on problem id: " + str(self.problem_id)