from django.shortcuts import render, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import SpecialSecializer
from .specials import Specials
from .stores.game import GameData
from .stores.shoprite import ShopriteData
from .stores.makro import MakroData
from .stores.checkers import CheckersData
from .stores.picknpay import  PicknpayData


# Create your views here.
@api_view(["GET"])
def get_all(request):
    return HttpResponse("None")


@api_view(["POST"])
def game_search(request):
    search_term = request.data["search"].strip().replace(' ', '+').lower()

    all_data = []
    #Initializing the class with a paprameter

    game_data = GameData(search_term)

    #Getting the data from the class
    titles = game_data.getTitles()
    links = game_data.getLinks()
    images = game_data.getImages()
    summaries = game_data.getSummaries()
    prices = game_data.getPrices()

    for (title,link,image,summary,price )in zip(titles,links,images,summaries,prices):
        print(title)
        all_data.append(Specials(image=image,name=title,description=summary, price=price,link=link))
    serialize = SpecialSecializer(all_data,many=True)



    return Response(serialize.data)

#shoprite 

@api_view(["POST"])
def shoprite_search(request):
    search_term = request.data["search"].strip().replace(' ', '+').lower()
    all_data = []
    #Initializing the class with a paprameter

    shoprite_data = ShopriteData(search_term)

    #Getting the data from the class
    titles = shoprite_data.getTitles()
    links = shoprite_data.getLinks()
    images = shoprite_data.getImages()
    summaries = shoprite_data.getSummaries()
    prices = shoprite_data.getPrices()

    for (title,link,image,summary,price )in zip(titles,links,images,summaries,prices):
        all_data.append(Specials(image=image,name=title,description=summary, price=price,link=link))
    serialized = SpecialSecializer(all_data,many=True)

    return Response(serialized.data)

@api_view(["POST"])
def picknpay_search(request):
    search_term = request.data["search"].strip().replace(' ', '+').lower()
    all_data = []
    #Initializing the class with a paprameter

    picknpay_data = PicknpayData(search_term)

    #Getting the data from the class
    titles = picknpay_data.getTitles()
    links = picknpay_data.getLinks()
    images = picknpay_data.getImages()
    summaries = picknpay_data.getSummaries()
    prices = picknpay_data.getPrices()

    for (title,link,image,summary,price )in zip(titles,links,images,summaries,prices):
        all_data.append(Specials(image=image,name=title,description=summary, price=price,link=link))
    serialized = SpecialSecializer(all_data,many=True)

    return Response(serialized.data)

@api_view(["POST"])
def checkers_search(request):
    search_term = request.data["search"].strip().replace(' ', '+').lower()
    all_data = []
    #Initializing the class with a paprameter

    checkers_data = CheckersData(search_term)

    #Getting the data from the class
    titles = checkers_data.getTitles()
    links = checkers_data.getLinks()
    images = checkers_data.getImages()
    summaries = checkers_data.getSummaries()
    prices = checkers_data.getPrices()

    for (title,link,image,summary,price )in zip(titles,links,images,summaries,prices):
        all_data.append(Specials(image=image,name=title,description=summary, price=price,link=link))
    serialized = SpecialSecializer(all_data,many=True)

    return Response(serialized.data)


@api_view(["POST"])
def makro_search(request):
    search_term = request.data["search"].strip().replace(' ', '+').lower()
    makro_data = MakroData(search_term)
    all_data = []
    #Initializing the class with a paprameter

    #Getting the data from the class
    titles = makro_data.getTitles()
    links = makro_data.getLinks()
    images = makro_data.getImages()
    summaries = makro_data.getSummaries()
    prices = makro_data.getPrices()

    for (title,link,image,summary,price )in zip(titles,links,images,summaries,prices):
        all_data.append(Specials(image=image,name=title,description=summary, price=price,link=link))
    serialized = SpecialSecializer(all_data,many=True)

    return Response(serialized.data)


