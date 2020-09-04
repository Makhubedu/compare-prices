import requests
from bs4 import BeautifulSoup
'''
Author : Derrick Makhubedu
Year : 2020

Details of the class

This is a class the helps with webscraping, The input given to this class is 
the term you want to search. If has different methods for getting different data
All the data is returned in a form a list/Array

getImages methos return an array of 20 images from a searched term in games store.
Like with getTitle returns 20 titles of found item.
...........

'''

class GameData:
    def __init__(self, category,*args, **kwargs):
        #This is the link to came and its only going to accept a search term and produce data rom that term
        self.html = requests.get(f"https://www.game.co.za/game-za/en/search/?text={category}").text
        self.soup = BeautifulSoup(self.html,'html.parser')
    
    def getImages(self):
        source_image = []
        images = self.soup.findAll('div',class_='productPrimaryImage')
        for image in images:
            source_image.append("https://www.game.co.za"+image.find('img')['src'])
        return source_image

    def getTitles(self):
        source_title = []
        body_title = self.soup.findAll('div', class_="product-brand")
        for title in body_title:
            source_title.append(title.get_text().strip())
        return source_title


    def getSummaries(self):
        source_sammary = []
        summaries = self.soup.findAll('div', class_="product-name")
        for summary in summaries:
            source_sammary.append(summary.get_text().strip())
        return source_sammary
    def getPrices(self):
        source_price = []
        prices = self.soup.findAll('span', class_="finalPrice")
        for price in prices:
            source_price.append(price.get_text().strip())
        return source_price

    def getLinks(self):
        source_link =[]
        links = self.soup.findAll('div', class_="product-brand")
        for link in links:
            new_link = "https://www.game.co.z"+link.find('a')['href']
            source_link.append(new_link)
        return source_link
