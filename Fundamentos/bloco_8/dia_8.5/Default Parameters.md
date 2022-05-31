# Default Parameters

> O **Default Parameters** serve para passar uma informação como padrão, ou default.

#### Exemplo 1:
No exemplo a seguir, o que acontece quando você chama a função sem passar nenhum parâmetro para ela?
```javascript
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!
```
Ela retorna undefined.<br>
Poderiamos contornar esse problema, simplismente utilizando uma validação como no exemplo a seguir:

### Exemplo 2:
```javascript
const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!
```
Dessa forma, se o usuário não fosse definido, retornaria usuário, caso contrário o nome passado como parâmetro.

> Com o ES6 podemos pré definir um parâmetro padrão para a função
#### Exemplo 3 - Reescrevendo os exemplos anteriores:
```javascript
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!
```
> Dessa forma será utilizado o default, caso nenhum outro usuário seja definido ou passado para a função. Simples assim.


