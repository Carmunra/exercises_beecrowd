funcionario = input()
salario_fixo = float(input())
vendas = float(input())

comissao = vendas * 0.15

salarioFinal = salario_fixo + comissao

print('TOTAL = R$ %.2f' % salarioFinal)
