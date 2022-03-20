# Tudo em Ruby é objeto
# + (soma) é um método

class Integer
    def + (outro_valor)
        self - outro_valor
    end
end

p 10 + 5