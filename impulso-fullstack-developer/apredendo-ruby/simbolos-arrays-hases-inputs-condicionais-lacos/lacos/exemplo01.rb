# Laços

# while

valor = 5
while valor > 0
    p valor
    valor -= 1
end

# for

for i in [1,2,3,4,5]
    p "O número é #{i}"
end

# ou

for i in 0..25 do
    p "Isso mesmo"
end

# ou 

lista = [1,2,3,4,5]
lista.each do |meu_valor|
    p "Meu valor (usando each) é #{meu_valor}"


# until - enquanto for falso

valor = 0
until valor = 10
    puts valor
    valor += 1
end

# break # sair do laço
# return # sair do laço e do método onde o laço está contido
# next # vai imediatamente para a próxima iteração
# redo # repete o laço do início (a condição não será reavaliada)

