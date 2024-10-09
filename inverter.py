def inversao(s):
    invertida = ""
    for i in range(len(s) - 1, -1, -1):
        invertida += s[i]

    return invertida
minha_string = "Python"
print("String original:", minha_string)
string_invertida = inversao(minha_string)
print("String invertida:", string_invertida)
