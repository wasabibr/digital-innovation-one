# Hashes

# Estrutura de chave-valor

# Inicialização
# hash = {} ou hash = Hash.new

# Exemplo
# hash = {
#    chave => valor,
#    chave => valor
# }
# ou
# hash = { chave => valor, chave => valor}

h = {"nome" => "Jefferson", "idade" => 43}

# Para consumir menos memória, usando símbolos

h = {:nome => "Jefferson", :idade => 43}

# ou

h = {nome: "Jefferson", idade: 43}

# Para acessar um valor no hash

h[:nome]

# Para alterar um elemento no hash

h[:nome] = "Novo nome"

# OBS: caso não exista a chave :nome, será inserida essa chave com o valor "Novo nome"

# Alguns métodos para hashes
# hash.keys # retorna um array com as chaves
# hash.valeus # retorna um array com os valores
# hash.empty? # verifica se o hash está vazio

