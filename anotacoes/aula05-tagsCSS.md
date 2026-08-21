# HTML
## tag div

define uma seção e pode conter counteudo e outras tag  
no HTML5 surgiram as **tags semânticas**. elas sao as mesmas coisas que as divs, mas são o nome do espaço. antes era tudo div (cabeçalho, rodapé, barra lateral). depois das tags semânticas surgirem ficou
- article
- main
- header
- footer
- nav
- aside
- section

## tag span

estilização inline. âncora interna

## tag

definição de rótulos para os elementos. assim da p aplicar estilo a uma label especifico

# CSS

o HTML fornece a **estrutura**, enquanto o CSS dita o **estilo**: onde e como aquele conteúdo aparece.  
como aplicar CSS no arquivo?

## diretamente na tag HTML

pior escolha do ponto de vista de
desenvolvimento e manutenção da página pq depois se precisar alterar tem q ir de linha em linha

## dentro de uma \<style> na \<head>

separa melhor que na propria tag mas ainda fica no mesmo arquivo. se o projeto for grande, so um arquivo n vai ser suficiente.   
fora q eu so vou poder usar o estilo naquele html em especifico      
no react n fica mt viavel usar esse modo pq a gnt tem acesso ao body

##  em um arquivo .css

aq separamos html e css. assim da p aplicar o arquiivo css aos htmls que eu quiser.    
no react pra um page ter os estilos de outro arquivo css tem q dar **import**

# sintaxe

```
seletor1 {   
    propriedade : valor     
}
```

# SELETORES em CSS
Um seletor é uma expressão usada p determinar o subconjunto de elementos HTML sobre os quais deve-se aplicar uma regra 

## elementos do mesmo tipo
todas as tags htmls vao ser afetadas
```
a {...}
```
## por classe
semelhantes as variaveis. apenas tags da mesma classe serão afetadas    
em react pra determinar que uma tag pertence a uma classe precisamos usar
```
<table className="tabelasRosas"/>
```
e em css, para alterar apenas as "tabelas rosas" dizemos
```
.tabelasRosas{...}
```
podemos associar uma mesma tag a outras classes apenas separando por espaço. a classe que eu escrever por ultimo no css é o que vai se **sobrepor**

## pseudoclasse
define a formatação para um **estado específico**  
tipo quando acontecer isso, ai sim fica formatado    
- quando o cursor do mouse passa
sobre um elemento (hover)
- hyperlinks não visitados (link) ou já visitados
(visited)
- elemento que recebeu o foco (focus)
```
tag:pseudoclasse {...}
```

## por id
especifica o id dos elementos sobre os quais se devem aplicar o efeito. **na prática o ideal é que o id seja único
para cada elemento**
```
#id {...}
```

## por atributo
afeta especificamente a elementos que declarem aquele atributo    
```
[atributo] {...}
```

# PSEUDOELEMENTOS
definir a
formatação para uma parte especificada de um
elemento
- primeira letra (first-letter) de um elemento;
- primeira linha (first-line) de um elemento;
- porção do elemento selecionada pelo usuário
(selection)
```
seletor::pseudoelemento {
 propriedade : valor;
}
```
