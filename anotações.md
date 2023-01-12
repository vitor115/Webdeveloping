Background image -> coloca imagem no background usando a função url
Background-repeat: no-repeat, repeat-y, repeat-x -> coloca como a imagem vai se repetir, se ela nao se repete, somente no eixo y e somento no eixo x
backgroung-position: center, right, bottom, left -> define a posicao da imagem
background-size: 
    contain - > dentro da caixa
    cover -> cobre a caixa toda
    valores-> 50px...
background-origin: border-box, content-box, padding-box: Vai definir de onde a imagem começa se é encostando na borda ou como se fosse um conteudo ou a partir do padding
background-clip: corta o background, similar ao origin
background-attachment: fixed, scroll -> se a imagem do background vai abaixar com o conteudo ou ficar barada
linear-gradient -> cria um gradient parecido com photoshop
radial-gradient -> gradient circular

<video> argumentos: 
    controls -> mostra controle do video, pause, barra
    autoplay
    preload="none, metadata, auto" ->  carrega informações do video sem clicar
        none-> nada
        metadata -> apenas informações de duração e metadados
        auto -> carrega o video antes de clicar

Position:
    static: normal
    relative: mantem o espaco inicial do elemento mas ele pode se movimentar
    absolute: elimina o espaco inicial e o elemento fica "a uma camada acima" não interferindo nos outros elementos da pagina
    fixed: fixa em alguma posição na pagina sem interferir com os demais
    é controlado com, top, right, bottom e left indicando o valor de cada um
    z-index é para ordernar qual a ordem em que um elemento fica acima do outro na camada aboslute -> Element Stacking


Formularios

<form>
<input>:
type -> especifica o tipo de dato que entra la
autofocus -> autoseleciona o inpt (apenas 1 por pagina)
disabled-> desabilita o input
readonly-> colocar um valor com value e desabilita o input
value -> deixa um valor inicial no input
form -> cria um formulario em que vc pode linkar o input em um lugar diferente da pagina a partir de um id
name -> necessario para form, serve para colocar o nome do valor
required -> o campo se torna obrigatorio
placeholder -> coloca um placeholder dentro do input

<input type = "password" 
minlenght="x define o minimo de caracteres"
maxlenght="xdefine o minimo de caracteres"
size = "x define o tamanho da caixa do input"
pattern= "[0-9a-fA-F]{4-8} define quais são os caracteres aceitos"
title = "por favor coloque... ele avisa o usuario o que está errando na senha"
required
inputmode="numeric - troca o teclado do smatphone"
autocomplete = "on, off, new-password define para ele sugerir uma senha ja criada ou criar uma nova"
>

<input type = "email" 
multiple o campo pode receber mais de 1 email separado por virgula
pattern=".+gmail\.com . qualquer caracter, +seguido de gmail, \para colocar o .com"
list="emailslists linka com uma <datalist> <option> teste@gmail.com </option> </datalist>">

<input type = "file"
accept=".docx, .ppt define qual tipo de arquivo é aceito na "
multiple> -> se usar em um form precisa adicionar o atributo enctype="multipart/form-data" 

<input type = "checkbox" name="subscribe (exemplo)" id="subscribe" value=" ok por padrao mas pode ser alterado para o que quiser para receber no back"
checked padrao fica checked>

<input type = "radio para escolher somente uma opcao" >

<textarea cols="x numero de colunas" rows=" x numero de linhas tamanho"
wrap= "soft, hard, off para definir como textos maiores que a caixa se comportam" > </textarea>

<select> -> cria uma selecao para o usuario
    <optgroup label="nome do grupo de opçoes"> -> cria um grupo nas opcoes
        <option value="nome recebido no back"> Opção para o usuario</option>
        <option value="nome recebido no back"> Opção para o usuario</option>
    <optgroup>
    <optgroup label="nome do grupo de opçoes"> -> cria um grupo nas opcoes
        <option value="nome recebido no back"> Opção para o usuario</option>
        <option value="nome recebido no back"> Opção para o usuario</option>
    <optgroup>
</select>

<input type = "search" name=""> -> para buscar
<input type = "range" name=""> -> slide para colocar valores

CSS

div + p{
    somente pega o irmao da direita/ irmao = tag adjacente
}
div ~ p {
    pega todos os irmão do div
}

section > div > p { 
    somente afeta o p que é filho direto do div que é filho direto do section
}

section div p {
    afeta todos os p filhos de div que sao filhos de section, mesmo que tenha elementos no meio
}

ul li:first child {
    pega somente o primeiro elemento do pai, ou seja ul
}

ul li:nth-of-type(x) {
    pega somente o elemento x do tipo, ou seja, pode selecionar qual dos elementos do mesmo tipo do filho (li) quer mudar
}

article p:nth-child(x) {
    pega somente o elemento x do abaixo do pai
}

JAVASCRIPT

document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()