from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Hobby(models.Model):
    sport = models.CharField(max_length=20)

    def __str__(self) -> str:
        return self.sport

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=15)
    surname = models.CharField(max_length=15)
    age = models.IntegerField(
        default=1,
        validators=[
            MaxValueValidator(100),
            MinValueValidator(1)
        ]
    )
    hobby = models.ForeignKey(
        Hobby, related_name="hobbies", on_delete=models.CASCADE
    )
    # related_name - name gicen for relation to other model (reverse relationship)
    # on_delete - when deleting model with dependency, cascade = delete depending models

    # overwriting inherit __str__ class object as string
    def __str__(self) -> str:
        return self.first_name + ' ' + self.surname
