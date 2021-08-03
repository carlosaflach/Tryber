# Object Property Shorthand

> Com a função de evitar repetições desnecessárias, o Object Property Shorthand, funciona como uma abreviação na hora de atribuir valores para as propriedades de um objeto.

#### Exemplo 1 - Sem usar o Object Property Shorthand:
```javascript
const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
```

#### Exemplo 2 - Usando o Shorthand:
```javascript
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
```