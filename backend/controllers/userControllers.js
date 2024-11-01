// // backend/controllers/userController.js

// const userService = require('../service/userService');

// exports.createUser = async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Chamar o serviço para criar o usuário
//     const newUser = await userService.createUser(username, password);

//     // Retornar uma resposta de sucesso com o novo usuário
//     res.status(201).json({ message: 'User created successfully', user: newUser });
//   } catch (error) {
//     // Lidar com erros e retornar uma resposta adequada
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// };
