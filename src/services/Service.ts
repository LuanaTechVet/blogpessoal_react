/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blogpessoal-nest-ch67.onrender.com', //prefixo do endereço do endpoint, que será consumido
});

export const cadastrarUsuario = async (
  url: string,
  dados: object, //dados do usuário no Corpo da Requisição POST
  setDados: Function, //atualiza o Estado usuario (criado no Componente Cadastro)
) => {
  const resposta = await api.post(url, dados); //a Resposta da API será armazenada na variável resposta
  setDados(resposta.data); //data representa os dados recebidos no corpo da Resposta
};

export const login = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados); //api é instância do Axios
  setDados(resposta.data);
};
//as duas funções têm escopos e propósitos similares, mas possuem responsabilidades diferentes

export const buscar = async (url: string, setDados: Function, header: object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: object, setDados: Function, header: object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: object, setDados: Function, header: object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: object) => {
    await api.delete(url, header)
}