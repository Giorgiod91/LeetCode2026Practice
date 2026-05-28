

# method to check if the number is a palindrom

def isPalim(self, x:int) -> bool:
    # now the easiest way is to typecast into string and
    # and then check for palindrom
    # I can instant return here because the return type will be bool
    return str(x) == str(x)[::-1]
