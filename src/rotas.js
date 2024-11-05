import Servico1 from './controller/Servico1Controller.js'
import login from './controller/loginController.js'


export default function adicionarRotas(servidor) {
    servidor.use(login);
    servidor.use(Servico1);
}