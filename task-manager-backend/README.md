### Backend
- Para executar o backend localmente:
  1. Navegue até a pasta do backend:
     ```bash
     cd task-manager-backend
     ```
  2. Execute o backend na sua máquina:
     ```bash
     npm install
     npx nodemon server.js
     ```

Certifique-se de seguir as instruções acima e que tudo esteja claro e organizado. Se precisar de mais informações ou esclarecimentos, não hesite em perguntar.
1. Registro de Usuário
Método HTTP: POST

URL: http://localhost:5000/api/auth/register

Body:

json
Copiar código
{
  "email": "test@example.com",
  "password": "password123"
}
Configurações:

Selecione o tipo de body como JSON.
Resposta esperada:

Um objeto JSON confirmando o registro ou um erro caso o email já esteja registrado.
2. Login de Usuário
Método HTTP: POST

URL: http://localhost:5000/api/auth/login

Body:

json
Copiar código
{
  "email": "test@example.com",
  "password": "password123"
}
Configurações:

Selecione o tipo de body como JSON.
Resposta esperada:

Um objeto JSON contendo o token JWT.
3. Listar Tarefas
Método HTTP: GET
URL: http://localhost:5000/api/tasks
Headers:
Adicione o cabeçalho Authorization com o valor Bearer <seu_token_jwt_aqui>.
Resposta esperada:
Um array JSON com as tarefas do usuário autenticado.
4. Adicionar Tarefa
Método HTTP: POST

URL: http://localhost:5000/api/tasks

Headers:

Adicione o cabeçalho Authorization com o valor Bearer <seu_token_jwt_aqui>.
Body:

json
Copiar código
{
  "title": "Nova Tarefa",
  "description": "Descrição da nova tarefa"
}
Configurações:

Selecione o tipo de body como JSON.
Resposta esperada:

Um objeto JSON com os detalhes da tarefa recém-criada.
5. Atualizar Tarefa
Método HTTP: PUT

URL: http://localhost:5000/api/tasks/:id

Substitua :id pelo ID da tarefa que você deseja atualizar.
Headers:

Adicione o cabeçalho Authorization com o valor Bearer <seu_token_jwt_aqui>.
Body:

json
Copiar código
{
  "title": "Tarefa Atualizada",
  "description": "Descrição atualizada",
  "completed": true
}
Configurações:

Selecione o tipo de body como JSON.
Resposta esperada:

Um objeto JSON com os detalhes da tarefa atualizada.
6. Excluir Tarefa
Método HTTP: DELETE
URL: http://localhost:5000/api/tasks/:id
Substitua :id pelo ID da tarefa que você deseja excluir.
Headers:
Adicione o cabeçalho Authorization com o valor Bearer <seu_token_jwt_aqui>.
Resposta esperada:
Uma mensagem confirmando a exclusão da tarefa ou um erro caso a tarefa não seja encontrada.
Dicas:
Use o token JWT retornado na rota de login para autenticar as outras rotas protegidas.
Certifique-se de que o servidor esteja rodando antes de fazer as requisições.
Em caso de erro, verifique as mensagens retornadas e o log do servidor para detalhes.
