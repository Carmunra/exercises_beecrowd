
# Forma elaborada

vertebrados = ['aguia', 'pomba', 'homem', 'vaca']
invertebrados = ['pulga', 'lagarta', 'sanguessuga', 'minhoca']

palavra1 = input('Informe se é vertebrado ou invertebrado: ')

if palavra1 == 'vertebrado':
    palavra2 = input('Informe se é ave ou mamifero: ')

    if palavra2 == 'ave':
        palavra3 = input('Informe se o animal é carnivoro ou onivoro: ')

        if palavra3 == 'carnivoro':    
            print(vertebrados[0])
        if palavra3 == 'onivoro':
            print(vertebrados[1])

    if palavra2 == 'mamifero':
        palavra3 = input('Informe se o animal é onivoro ou herbivoro: ')

        if palavra3 == 'onivoro':    
            print(vertebrados[2])
        if palavra3 == 'herbivoro':
            print(vertebrados[3])

if palavra1 == 'invertebrado':
    palavra2 = input('Informe se é inseto ou anelideo: ')

    if palavra2 == 'inseto':
        palavra3 = input('Informe se é hematofago ou herbivoro: ')

        if palavra3 == 'hematofago':    
            print(invertebrados[0])
        if palavra3 == 'herbivoro':
            print(invertebrados[1])

    if palavra2 == 'anelideo':
        palavra3 = input('Informe se é hematofago ou onivoro: ')

        if palavra3 == 'hematofago':    
            print(invertebrados[2])
        if palavra3 == 'onivoro':
            print(invertebrados[3])

#Forma para aprovação no Beecrowd

x = input()
y = input()
z = input()

if x == 'vertebrado' and y == 'ave' and z == 'carnivoro':
    a = 'aguia'

if x == 'vertebrado' and y == 'ave' and z == 'onivoro':
    a = 'pomba'

if x == 'vertebrado' and y == 'mamifero' and z == 'onivoro':
    a = 'homem'

if x == 'vertebrado' and y == 'mamifero' and z == 'herbivoro':
    a = 'vaca'

if x == 'invertebrado' and y == 'inseto' and z == 'hematofago':
    a = 'pulga'

if x == 'invertebrado' and y == 'inseto' and z == 'herbivoro':
    a = 'lagarta'

if x == 'invertebrado' and y == 'anelideo' and z == 'hematofago':
    a = 'sanguessuga'

if x == 'invertebrado' and y == 'anelideo' and z == 'onivoro':
    a = 'minhoca'

print(a)