export default function validarExclusao(id) {
    if (!id) {
        throw new Error("O ID não pode estar vazio."); o
    }

    if (typeof id !== 'string' && typeof id !== 'number') {
        throw new Error("O ID deve ser um número ou uma string."); 
    }

    

    return true; 
}