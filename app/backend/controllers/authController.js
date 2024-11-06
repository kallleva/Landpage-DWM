// backend/controllers/authController.js

const authService = require('../service/authService');
console.log('req.body')
// exports.login = async (req, res) => {
//   const { username, password } = req.body;
//   console.log('entrouuu', 'username' + username, ' password -->> '+ password)
//   if (!username || !password) {
//     return res.status(400).json({ message: 'Username and password are required' });
//   }

//   try {
//     const result = await authService.login(username, password);
//     if (result && result.token) {
//       res.json({ message: 'Login successful', token: result.token });
//     } else {
//       res.status(401).json({ message: 'Credenciais Invalidas' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: 'An error occurred during login', error: error.message });
//   }
// };



// backend/controllers/authController.js

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const result = await authService.login(username, password);
    if (result && result.token) {
      res.json({ message: 'Login successful', token: result.token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Erro ao processar o login:', error);  // Log detalhado do erro
    res.status(500).json({ message: 'An error occurred during login', error: error.message });
  }
};
