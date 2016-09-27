from django.db import models

def upload_location(instance,filename):
    #filebase, extension =filename.split(".")
    #return "%s/%s.%s" %(instance.id, instance.id, extension)
    return "%s/%s" %(instance.id, filename)

class Client(models.Model):
    name = models.CharField(max_length=140,null=True,blank=True)
    url = models.CharField(max_length=140,null=True,blank=True)
    url_address = models.CharField(max_length=140,null=True,blank=True)
    order = models.CharField(max_length=2,null=True,blank=True)

    img_small = models.ImageField(upload_to=upload_location)
    img_large = models.ImageField(upload_to=upload_location)


    def __str__(self):
        return self.name

