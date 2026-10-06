desafio git, aquecendo + os comandos 



Exercício 1 — Conceitos

Responda com suas próprias palavras:

1. O que é Git?
Git é uma ferramenta de salvação como se fosse checkpoint nos jogos
onde voce ira fazer os commits para ir salvando e tendo uma seguranca 
de cada versao do app ou projeto que voce for criar 

2. O que é GitHub?
GitHub é uma comunidade criada encima do Git, onde voce pode compartilhar 
para o mundo seu codigo ou voce pode apenas usalo como um pendrivem 
em nuvem para poder manusear o projeto de qualquer lugar, é usado 
muito em empresas para Dev poder trabalhar remotamente 


3. Qual a diferença entre Git e GitHub?
Git e a ferramenta e o GitHub é a rede social 


4. O que é um repositório?
Repositorio é onde que vai ficar armazanada as suas atualizaçoes 
e versoes do que voce for fazendo 


5. Para que serve um commit?
Serve para voce fazer essa atualização e nao se perder, e voce 
pode adicionar uma breve frase "oq foi feito ali" explicido 
para ficar organziado e profisional. 



Respondendo o teste do professor : 

Git Init - ele cria uma sub pasta .git no projeto, primeira coisa que
devemos fazer para podermos dar continuidade 


Git status -  Git status mostra como ta o prejeto, tudo esta salvo ?
ou falta algo ? 


git add -  aqui as pastas que nao estava listada (vermelha) no 
status voce adiciona para poder commitar, pode colocar "git add nomePasta"
para poder organizar se fez varias coisas diferentes 
ou pode dar um "Git add ." que vai selecionar todas !

      
git commit -  Aqui é onde voce vai preparar para salvar o projeto de vez, apos
selecionar vai fazer um commit para poder orgazinar seu git e
voce adiciona um "texto" curto e direto para poder localizar depois 
caso de algum bug 


Git log -  serve para conferirmos os commits e eum fez e quando fez 
cada commit e tambem para ter uma certeza e segurança       

git push -  vai enviar o projeto a sua pasta !




enviar a um servidor remoto (github) 


Git remote add origin "URL/Repositorio" - aqui conectamos remotamente com 
meu repositorio pela URL, e Origin é o repositorio remoto apenas um apelido 


Git remote -v -  conferir se estamos conectados ao git e pasta
de projeto


Git push -u origin master - vai  enviar nosso projeto salvo para 
o git hub e armazenar na nossa origin que é o pasta principal 
que é o que nos queremos ! 





O que significa local? -  Nesse caso, local referece à Local Holst, que nada mais 
é do que o projeto salvo em minha maquina, e não remoto em nuvem 
que seria o gitHub. pra ter acesso ao local somente estando com 
o hardware gerador do projeto em mão. 


O que siginfica remoto? -  referece a nuvem, remoto significa 
algo que possa ser acessado somente precisando de uma rede wifi 



Para que serce origin? -  Origin referece a pasta principal do 
nosso codigo versionado ao github, serve como o ramo principal 
do projeto. 


O que o git push fez? -  Ele foi o responsavel por enviar o 
codigo ao nosso repositorio.


Por que precisamos de git push se já fizemos git commit? - commit
ele é usado para etiquetarmos nossa modificação no codigo, e o push 
puxa esse codigo etiquetado a nosso armario, e la tendo varias outras 
gavetas etiquetadas. 


aula 3


Git clone - clonar o seu projeto alocado no github trazendo tudo para outra 
maquina caso esteja com outro computador localmente

Git Pull - para você trazer projetos, 
pull - puxar 
push - empurrar 


Comando	Para que serve

git status	- para verificar como esta o projeto, oque esta salvo 
e oque ainda nao foi salvo. 

git add	- para delecionar o arquivo para que podessamos fazer o commit 
e logo apos o push 



git commit	- adicionar uma mensagem sobre o trabalho que foi feito ali 
e quem fez e quando fez. 


git push	- enviar os arquivos ao repoitorio 

git pull	- para trazer um projeto da sua versao antiga

git clone	- clonar um repositorio de alguem ou seu para sua maquina 
local para poder fazer modificaçoes etc.


aula 4

branch


branch - uma remificaçao do seu projeto, para que possa fazer testes
e em caso de quebra nao danificar o sistema inteiro. 

git branch - verifica as branch criadas, e em qual voce esta atualmente 


git branch nome_branch  - adiciona uma nova branch com o nome escolhido 

  nome_branch
*master -  o * te guia em qual branch voce esta 


git switch nome_branch - serve para mudar da branch atual 
a branch selecionada !


podemos usar tambem: 

git switch -c estudo-git  - Criamos a branch e ja entramos nela ao mesmo tempo 



o que é uma Branch ? - Branch é uma aba segundaria que usa seu codigo origin 
de base mas não afeta o coração se der queda 

porque nao devemos fazer tudo diretamente no master ?  - Pois em caso 
de problemas em uma empresa que ja esta em funcionamento, pode cair o 
servidor, e o codigo quebrar 


Pra que serve ? 

- git branch = para vermos quais branch a gente tem disponivel e qual estamos 
usando na hora 


Qual a diferença entre: 

git branch estudo-git / git switch estudo-git

r= git branch nome ele CRIA uma branch nova com esse nome, ja o Git 
Switch nome ele vai mudar da branch atual para a branch selecionada
 pelo nome 


O que significa o * quando aparece antes de uma branch? 
R= significa que estamos escrevendo sob aquela branch 




Comandos entendidos a cima 

git status
git add
git commit
git push
git pull
git clone
git branch
git switch



PROVA FINAL SOBRE GIT


Situação 1

Você modificou o README.md.

Qual comando você usa para descobrir o que mudou?

r= -Git status

Situação 2

Você quer preparar as alterações para um commit.

Qual comando?

r= -git add

Situação 3

Você quer registrar essas alterações no histórico.

Qual comando?

r= - git commit -m "" e/ou  - git push 

Situação 4

Você quer enviar seus commits para o GitHub.

Qual comando?

r= git remote add origin URL  e  git push 

Situação 5

Seu colega fez alterações no GitHub e você quer trazer essas alterações para seu computador.

Qual comando?

r= git pull

Situação 6

Você quer criar uma branch chamada:

feature-login

Qual comando?

r= git branch facture-login

Situação 7

Você já criou a branch e quer entrar nela.

Qual comando?

r= git switch nome_branch

Situação 8

Explique com suas palavras a diferença entre:

commit

e

push


r= commit e onde voce vai etiquetar as suas modificaçoes, ja no push é onde voce vai enviar isso a sua gaveta para armazenala 