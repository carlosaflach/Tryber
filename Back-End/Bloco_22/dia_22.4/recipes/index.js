/* index.js */
const express = require('express');
const app = express();
app.use(express.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const drinksSort = drinks.sort((a, b) => {
   if(a.name < b.name) {
     return -1
   }
   if (a.name > b.name) {
     return 1;
   }
   return 0;
});

const recipesSort = recipes.sort((a, b) => {
  if(a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
})


app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/recipesbyname', (req, res) => {
  res.json(recipesSort);
});

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.get('/drinks', function(req, res) {
  res.json(drinks);
});

app.get('/drinksbyname', (req, res) => {
  res.json(drinksSort);
})

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice) && r.price > Number(minPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));
  res.status(200).json(filteredDrinks);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;

  const drinkIndex = drinks.findIndex((d) => d.id === Number(id));

  if(drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((r) => r.id === Number(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === Number(id));

  if(!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});