
def ProbData(num):
    i = 1

    while(num >= i):
        if (i%3 == 0  and i%5 == 0):
            print("PropData",end=" ")
        elif (i %3 == 0):
            print("Prop", end=" ")
        elif (i%5 == 0):
            print("Data", end=" ")
        else:
            print(i, end=" ")
        i = i +1
ProbData(15)