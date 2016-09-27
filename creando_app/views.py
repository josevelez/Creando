from django.shortcuts import render,get_object_or_404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from creando_app.models import Client

# Create your views here.

def index(request):
    return render(request, 'index.html')

def contactos(request):
    return render(request, 'contactos.html')

def test(request):
    return render(request, 'test.html')


def client_list(request):
    queryset_list=Client.objects.all().order_by('order')
    paginator = Paginator(queryset_list, 6)  # Show 6# clients per page

    page = request.GET.get('page')
    try:
        queryset = paginator.page(page)
    except PageNotAnInteger:
        # If page is not an integer, deliver first page.
        queryset = paginator.page(1)
    except EmptyPage:
        # If page is out of range (e.g. 9999), deliver last page of results.
        queryset = paginator.page(paginator.num_pages)

    context = {
        "object_list": queryset,
        "title": "List"
    }
    return render(request,'clients.html',context)

def client_detail(request,id=None):
    instance= get_object_or_404(Client,id=id)
    context = {
        "object_list": instance.name,
        "instance": instance,
    }
    return render(request, 'detail.html', context)



