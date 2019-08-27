// CRIAÇÃO DO SERVIDOR

import app from './app';

// setando a porta que irá executar a aplicação
app.listen(process.env.PORT || 3333);
