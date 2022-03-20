# Métodos

def meu_metodo
    p "meu_metodo foi executado"
end

# ou com parametros

def meu_metodo(parametro1, parametro2)
    puts "meu_metodo foi executado. Parametro #{parametro1} e #{parametro2}"
end

# OBS: A palavra return é opcional. O ruby sempre retorna o resultado da execução da última linha.

def soma(a, b)
    return a + b
end

# ou

def soma(a, b)
    a + b
end

