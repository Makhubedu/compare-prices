import os
import sys

from stores.picknpay import PicknpayData

name = PicknpayData("Apples")

print(name.getLinks())