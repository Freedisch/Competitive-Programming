def swap(case):
    new = ""
    for i in case:
        if i.islower():
            new += i.upper()
        else:
            new += i.lower()
    return new