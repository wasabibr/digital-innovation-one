# EXERCICIO 01 - Verificar se a palavra é palídromo

# Palíndromo: Palavras que são iguais quando lidas de frente para trás
# e de trás para frente

# Objetivo:
# - Definir um método que verifica se é palíndromo
# - Usar gets para pedir input de dados e chamar o método
# - Imprimir se é palíndromo ou não

def palindromo?(palavra)
    palavra = palavra.downcase
    palavra_reversa = ""

    indice = palavra.length

    until indice == 0
        letra = palavra(indice - 1)
        palavra_reversa << letra
        indice -= 1
    end

#    if palavra_reversa == palavra
#        true
#    else
#        false
#    end

# Outra forma seria o sem o if, pois se a afirmação for verdadeira, o retorno será
# obrigatoriamente true, caso contrário será false

    palavra_reversa = palavra
end

p palindromo?("ovo")
p palindromo?("Ovo")
p palindromo?("foo")