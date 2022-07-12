// index.js
const express = require('express');
const { Address, Employee } = require('./models');

const app = express();

app.use(express.json());

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Eager Loading
    // const employee = await Employee.findOne({
    //     where: { id },
    //     include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] } }],
    //   });

    const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    // Lazy loading => Damos duas funcionalidades para o mesmo link, ou seja, se tiver a queryString true, adiciona o campo address
    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }

    // Eager loading
    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;