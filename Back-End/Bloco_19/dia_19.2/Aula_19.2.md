# 19.2 - Manipulação e Criação de Imagens no Docker

## Conteúdos

### O que são imagens:

Imagens são  como espécies de "fotos" de programas, bibliotecas, frameworks ou até mesmo sistema operacionais. A partir delas é possível construir containers.

#### Comando para ver as imagens

`docker images`

>OBS: Podemos ter vários containers reproduzindo uma mesma imagem.

#### Comando para remover uma imagem

` docker rmi -f <IMAGE ID>`

>OBS: o -f serve para forçar a remoção do recurso.

---

## Sistema de Camadas de uma Imagem

Quando fazemos download de uma imagem, a imagem é baixada porém nem sempre um container é criado com essa imagem. <br>
<br>
Uma imagem é composta de muitas camadas, isso serve para que o Docker possa reaproveitar as imagens em outras imagens, e não necessite ser instaladas em duplicidade. Toda imagem Docker pode ter uma ou mais camadas, e isso é conhecido como `Layered File System`.

<!-- ![Imagem Camadas](https://assets.app.betrybe.com/back-end/docker/docker-images/images/docker-image-lfs-396485d70c58c68389b702666d6b1ac7.png) -->
<p align="center">
  <img src="https://assets.app.betrybe.com/back-end/docker/docker-images/images/docker-image-lfs-396485d70c58c68389b702666d6b1ac7.png" alt="img" width="700px">
</p>

Um aspecto importante sobre camadas é:
* Aquelas camadas que pertecem à imagem são somente de leitura, não é possível escrever nelas.
* Toda vez que criamos um container, uma camada extra é adicionada aquela imagem (Container Layer), onde é possível ler e escrever nessa camada extra do container.
  
---
## Mapeamento de Portas Para Servidores

Toda vez que utilizamos um servidor HTTP ele necessita de uma porta de acesso. Até mesmo quando estamos desenvolvendo uma aplicação React, utilizamos um micro servidor web que dá acesso a nossa aplicação via protocolo HTTP na porta padrão 3000 => http://localhost:3000. <br>
Além disso é importante ressaltar que diferentes servidores apresentam diferentes portas específicas para o mapeamento (Ex: Servidor Apache porta 80). <br>

### Comandos para mapeamento de portas no docker

1. atribuição aleatória das portas é feita pela flag -P. Exemplo: `docker run -d -P --name site-trybe httpd:2.4`
2. para especificar a porta, utilizamos a flag -p. Exemplo: `docker run -d -p 54321:80 httpd:2.4`

Dessa forma, caso quisessemos acessar esse servidor em nossa máquina teriamos que conectar ou na porta mapeada de forma aleatória pelo comando acima no item 1 (podemos descobrir qual é essa porta exibindo os containers ativos `docker ps` ou `docker container ls`), ou então através da porta mapeada especificamente como no exemplo acima na linha 2 (nesse caso porta 5321 => http://localhost:54321).

---
## Dockerfile

O Dockerfile é o arquivo que iremos configurar, ou seja, passar todas as instruções necessárias para estar criando (buildando) a imagem de nossa aplicação. <br>
Dentro do Dockerfile vai uma série de comandos, para garantir que todos os recursos necessários para que nossa aplicação Dockerizada funcione corretamente dentro de um container.

### Principais Comandos do Dockerfile

<h4 style="color:#e63946">
FROM
</h4>

O comando `FROM` especifica QUAL é a imagem base necessária para rodar nossa aplicação. Imagine a seguinte situação, você está desenvolvendo uma aplicação React que precisa do framework Node.js para funcionar, dessa forma basear a imagem da sua aplicação em node é uma boa ideia.<br>

Exemplo: `FROM node:latest` <br>
<br>
* É interessante sempre utilizar versões especificas em nossas imagens bases. Exemplo: `FROM ubuntu:8`, `FROM node:14`.
* Sempre que possível utilizar versões mínimas da imagem, ou seja, com tags `slim` ou `alpine` que são versões muito mais leves, pois utilizam versões minimalistas do SO. Exemplo: `FROM node:14-alpine`.

#### WORKDIR

O comando `WORKDIR` é onde definimos um diretório de trabalho que será utilizado com base para a execução dos comandos. Em outras palavras, o WORKDIR será o diretório criado DENTRO do CONTAINER onde irá ser executado os comandos, importante ressaltar que não necessariamente você deve ter esse diretório na raiz de sua aplicação.<br>
Exemplo: `WORKDIR /app`. <br>

<h4 style="color:#e63946">
COPY
</h4>

O comando `COPY` serve para poder copiar diretórios e arquivos necessários para dentro de nossa imagem.<br>
Vale ressaltar que no COPY tanto a sintaxe na forma exec (`COPY ["arquivo1", "arquivo2", "./destino"]`) como na shell (`COPY arquivo1 arquivo2 ./destino`) são aceitas*.
> *O modo shell é como se você rodasse o comando em um terminal.

1. COPY pode ser usado para copiar o arquivos ou diretórios. Exemplo: `COPY ["./app", "/usr/src/app"]`.
2. COPY pode ser usado para copiar tudo que está presente na pasta raiz de nossa aplicação(onde está o nosso Dockerfile). Exemplo: `COPY . .`.

> OBS: Quando utilizamos o comando `COPY . .` é interessante adicionar o arquivo `.dockerignore` e adicionar a eles diretórios grandes que não são necessários copiar para a nossa imagem, como por exemplo o `node_modules`.
<h4 style="color:#e63946">   
RUN
</h4>
O comando `RUN` é utilizado para preparar a imagem para rodar nossos apps, em outras palavras é através dele que instalamos bibliotecas, dependências necessárias para nossa aplicação rodar. <br>
Exemplo: `RUN npm install`. <br>

<h4 style="color:#e63946">
EXPOSE
</h4>

O comando `EXPOSE` serve para expor a porta que será utilizada por nossa aplicação **dentro do container**.<br>
EXEMPLO: `EXPOSE 3000`. <br>

>OBS: Vale ressaltar que quando vamos rodar o container utilizando uma imagem que expoê uma porta, **precisamos atribuir uma porta do nosso sistema hospedeiro (host) que direcionará para a porta do sistema convidado (guest)**.<br>
> Isso é feito através do Mapeamento de rotas, como citado acima através do parâmetro `-p`. <br>
> ` docker container run -p <PORTA-HOST>:<PORTA-GUEST> <IMAGEM>:<TAG>` <br>
> Exemplo: `docker run -d -p 54321:80 httpd:2.4`

<h4 style="color:#e63946">
CMD
</h4>

O comando `CMD` é um comando que é executado sempre que o container é executado, diferentemente do comando `RUN` que apenas é executado durante a criação da imagem ( o build em si).
>OBS: É interessante ressaltar que pode acontecer de mais de um CMD ser definido em um mesmo Dockerfile e, neste caso, apenas o último terá efeito.

Normalmente utilizamos o `CMD` para executar o comando que irá rodar com o contêiner. Poderíamos usar como exemplo o start de um app: <br>
Exemplo: `CMD npm start` <br>

>Aqui temos mais um ponto de atenção: caso o contêiner seja executado passando um comando no RUN, o comando passado sobrescreverá o comando definido no CMD.

* O comando `CMD` é substituído pelo comando `RUN` quando utilizamos no comando `container run`.

<h4 style="color:#e63946">
ENTRYPOINT
</h4>

O comando `ENTRYPOINT` é utilizado como substitudo do comando `CMD` a diferença é que ao utilizarmos o `ENTRYPOINT` evitamos de o comando ser reescrito caso utilizarmos o comando `RUN`, como é o caso do `CMD`.<br>
<br>
Exemplo:
``` 
ENTRYPOINT ["/bin/echo", "Hello"]
CMD ["World"]
```
Nesse caso, ao executarmos o container seria executado `echo Hello World`. Porém se fosse passado um parâmentro para o comando `docker container run` iria substituir o comando do `CMD`. <br>
Exemplo:`docker container run nossa-hello-world-image John`<br>
Nesse caso, a saída no console seria: `Hello John`.

---
### Multi-Stage Build

Multi-stage build é utilizado para otimizar Dockerfiles enquanto deixa ele mais fácil de ler, e mais fácil de manter. Para evitar ter que manter dois ou mais Dockerfiles, que segundo a documentação não é o ideal, pois torna o processo mais difícil de manutenção. Dessa forma é possível utilizar multiplos `FROM` dentro de um mesmo Dockerfile. Cada `FROM` são usados em instruções de base diferentes, e cada um deles inicia um novo estágio de criação da imagem. Além disso é possível copiar diretórios e arquivos de um estágio para o outro, deixando para trás tudo aquilo que não é esperado para a imagem final.<br>
Exemplo:
```
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
```
No exemplo acima é utilizado um Dockerfile com multi-stage onde foi copiado para o segundo estágio da imagem, o diretório `/app/build` e disponibilizado no diretório `/usr/share/nginx/html`.

---
### Gerando uma imagem a partir do Dockerfile

Depois de gerar o Dockerfile e passar todas as instruções necessárias para a aplicação rodar devemos buildar nossa imagem. E isso é feito através do comando <br> `docker image build -t <name:tag> <origem_docker_file>`

#### Exemplo de Dockerfile Completo

```
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

Criando uma imagem a partir do Dockerfile acima:
`docker image build -t react-dockerized:v1 .`<br>
O `.` indica que o Dockerfile está na raiz de nossa aplicação.
Após a execução da `build`, podemos listar nossas imagens e verificar a presença da que acabamos de criar com o comando:<br>
`docker images` <br>
E por fim para ver nossa aplicação rodando, podemos startar o container através do comando: <br>
`docker run -dit -p 8000:80 --name reactdockerized react-dockerized:v1`<br>
<br>
Dessa forma, nossa aplicação deve estar rodando na porta 8000, podendo ser acessada através da URL: http://localhost:8000/

---

### Dockerfile Comandos Adicionais

<h4 style="color:#e63946">
LABEL
</h4>

* O Comando `LABEL` é utilizado para adicionar dados auxiliáres a imagem de nossa aplicação.
* É muito comum ser atribuído informações como a pessoa que mantêm a imagem do Docker. Exemplo: `LABEL maintener="John Doe <john.doe@trybe.com.br>"`
  
Esse valor pode ser resgatado posteriormente através do comando:<br>
` docker inspect <CONTAINER ID || NAMES> `

<h4 style="color:#e63946">
ENV
</h4>

O comando `ENV` serve para definir variáveis de ambiente. Sintaxe do comando: `ENV <ENV NAME> <ENV VALUE>`. <br>
Pode ser utilizada por exemplo para setar o ambiente onde será rodado o app: `ENV NODE_ENV production`<br>
Ao rodar nossos contêineres também podemos passar variáveis. Basta utilizar a tag --env ou -e:
```
docker container run \
   --env myCat=fluffy \
   --env myName=johnDoe \
   <IMAGE NAME>
```
Estas sobrescreverão as definidas no Dockerfile caso possuam o mesmo nome.

<h4 style="color:#e63946">
USER
</h4>

Com o comando `USER` podemos definir qual o usuário que irá iniciar nosso app no contêiner. Caso não seja definido nenhum usuário, o Docker irá utilizar o usuário root como padrão, o que não é recomendado por motivos de segurança. <br>
Abaixo temos um exemplo da criação de um usuário com apenas as permissões necessárias em uma imagem ubuntu:<br>
```
FROM ubuntu:8
RUN mkdir /app
RUN groupadd -r node-user && useradd -r -s /bin/false -g node-user node-user
WORKDIR /app
COPY . /app
RUN chown -R node-user:node-user /app
USER node-user
CMD node index.js
```


FIm