from django.conf.urls import url
from .views import index,contactos,test, client_list,client_detail

urlpatterns = [
    url(r'^$', index),
    url(r'^contactos/$', contactos),
    url(r'^test/$', test),
    url(r'^clients/$', client_list),
    url(r'^detail/(?P<id>\d+)/$',client_detail)
]




from django.conf.urls import url, include
from django.views.generic import ListView,DetailView
