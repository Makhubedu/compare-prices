from django.urls import path
from . import views

urlpatterns = [
    path('api/specials/get_all', views.get_all, name="get_all"),
    path('api/search/game', views.game_search, name="game"),
    path('api/search/shoprite', views.shoprite_search,name="shoprite"),
    path('api/search/picknpay',views.picknpay_search,name="picknpay"),
    path('api/search/makro', views.makro_search,name="makro"),
    path('api/search/checkers', views.checkers_search, name="checkers")
]