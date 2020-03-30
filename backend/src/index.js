// para importar algo para dentro de nossa aplicação
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

// NECESSÁRIO PARA CONSEGUIR SE CONECTAR COM O FRONTEND
app.use(cors()); // Permite o uso o módulo Cors. Por enquanto não usaremos porque está somente em desenvolvimento nossa aplicação.
app.use(express.json()); // informa ao nosso app que estaremos usando json para as requisições, então o app agora passa a converter os textos json em objeto de javascript
app.use(routes);

app.listen(3333); // Nossa aplicação estará disponível na porta 3333