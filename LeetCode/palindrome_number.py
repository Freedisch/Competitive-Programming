def palindrome(i):
    res = str(i)
    return res[::1] == res[::-1]