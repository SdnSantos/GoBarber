import 'dotenv/config';

import Queue from './lib/Queue';

// foi feito em arquivo separado porque não irá rodar no mesmo node
// podemos ter a aplicação rodando em um terminal e a fila em outro
Queue.processQueue();
