# Condicionais

# if condicao
#   faca_algo
# else
#   faca_outra_coisa
# end

# Condicionais / Operadores relacionais
# ==
# !=
# >
# >=
# <
# <=

# Exemplo

valor = 20
if valor > 50
    p "Eu sou maior que 50"
else
    p "Eu sou menor que 50"
end

# Operadores lógicos
# ! # negação
# && # and
# || # or

valor = 65
if valor >= 50 && valor <= 100
    puts "Estou entre 50 e 100"
end

# Exemplo com if / elsif

valor = 20
if valor > 50
    p "Eu sou maior que 50"
elsif valor == 50
    p "Eu sou igual a 50"
else
    "Eu sou menor que 50"
end

# OBS: APENAS nil e false são avaliados como falso
# 0 ou vazio são true

valor = 20
puts "Eu sou maior que 50" if valor > 50

# unless - efeito oposto do if, ou seja, se a condição não for verdadeira, faça

valor = 20
puts "Eu sou maior que 50" unless valor > 50

# ternário

valo > 50 ? puts "Eu sou maior que 50" : puts "Eu sou menor que 50"

# case

linguagem = "ruby"
case linguagem
when "ruby"
    p "Bem vindo ao curso de ruby"
when "golang"
    p "Curso não disponível"
else
    p "não conheço essa linguagem"
end

