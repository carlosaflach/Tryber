<<<<<<< HEAD
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
=======
# From é a imagem de base, sempre é baseado em outra imagem mesmo que seja uma imagem em branco.
FROM node:14-alpine AS build
# workdir é o diretorio de trabalho que especificamos, que será utilizado como base para a execução dos comandos
WORKDIR /app 
#Com o comando COPY conseguimos montar nossa estrutura do código fonte dentro da imagem, porém, para executá-la precisaríamos apontar para o diretório que definimos anteriormente como nosso diretório de trabalho
COPY package*.json ./
# O RUN é comum para prepararmos a imagem para rodar nossos apps, instalando as dependências de uma aplicação.
RUN npm install
# Passos intermediários: Antes de passar para os próximos comandos, alguns passos intermediários são necessários, como por exemplo, fazer a cópia dos demais arquivos para dentro do container, porém, como já rodamos um npm install , é interessante criarmos um arquivo chamado dockerignore para adicionarmos lá a node_modules, de modo que ela não seja copiada.
COPY . .
# Também devemos adicionar um comando para executar o processo de build * da nossa aplicação, no Dockerfile :
RUN npm run build

# Processo de multi-stage build
# From: Imagem base
FROM nginx:1.16.0-alpine AS prod
#Copy montar a estrutura do código fonte dentro da imagem, Pode ser encotnrado no site da nginx.
COPY --from=build /app/build /usr/share/nginx/html
# porta que será utilizada por nossa aplicação dentro do container. Por padrão, o Nginx usa a porta 80 para executar as aplicações, então, podemos expor esta porta no nosso Dockerfile :
>>>>>>> 1faa2a17121addcad1c810c37c1837ce7d4d156f
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]