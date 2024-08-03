import { IUser } from "../interfaces/user/user.interface"

export const UserList: IUser[] = [
  {
    nome: "João da Silva",
    email: "joao.silva@example.com",
    senha: "abc23344*",
    endereco: {
      rua: "Rua das Flores",
      numero: 43,
      cidade: "São Paulo",
      estado: "SP",
      pais: "Brasil"
    },
    telefone: "11912345678",
    ativo: true,
    funcao: "Desenvolvedor",
    dataCadastro: "2023-08-01T09:00:00.000Z",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2023-09-01T09:00:00.000Z"
    }
  },
  {
    nome: "Maria Souza",
    email: "maria.souza@example.com",
    senha: "xyz98765@",
    endereco: {
      rua: "Avenida Brasil",
      numero: 123,
      cidade: "Rio de Janeiro",
      estado: "RJ",
      pais: "Brasil"
    },
    telefone: "21987654321",
    ativo: true,
    funcao: "Analista",
    dataCadastro: "2023-07-15T08:30:00.000Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "2023-08-25T10:15:00.000Z"
    }
  },
  {
    nome: "Carlos Pereira",
    email: "carlos.pereira@example.com",
    senha: "pw34567$",
    endereco: {
      rua: "Rua da Paz",
      numero: 89,
      cidade: "Belo Horizonte",
      estado: "MG",
      pais: "Brasil"
    },
    telefone: "31976543210",
    ativo: false,
    funcao: "Gerente",
    dataCadastro: "2023-06-20T07:45:00.000Z",
    status: {
      online: true,
      verificado: false,
      assinaturaAtiva: true,
      ultimoAcesso: "2023-07-30T11:20:00.000Z"
    }
  },
  {
    nome: "Ana Lima",
    email: "ana.lima@example.com",
    senha: "mn45678&",
    endereco: {
      rua: "Rua das Américas",
      numero: 45,
      cidade: "Curitiba",
      estado: "PR",
      pais: "Brasil"
    },
    telefone: "41965432109",
    ativo: true,
    funcao: "Designer",
    dataCadastro: "2023-05-10T09:15:00.000Z",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2023-06-25T14:30:00.000Z"
    }
  },
  {
    nome: "Pedro Martins",
    email: "pedro.martins@example.com",
    senha: "zxcvbnm@12",
    endereco: {
      rua: "Avenida Paulista",
      numero: 987,
      cidade: "São Paulo",
      estado: "SP",
      pais: "Brasil"
    },
    telefone: "11987651234",
    ativo: false,
    funcao: "Consultor",
    dataCadastro: "2023-04-05T08:00:00.000Z",
    status: {
      online: false,
      verificado: false,
      assinaturaAtiva: false,
      ultimoAcesso: "2023-05-01T13:45:00.000Z"
    }
  },
  {
    nome: "Lucia Mendes",
    email: "lucia.mendes@example.com",
    senha: "qwerty123*",
    endereco: {
      rua: "Rua do Comércio",
      numero: 567,
      cidade: "Porto Alegre",
      estado: "RS",
      pais: "Brasil"
    },
    telefone: "51987654321",
    ativo: true,
    funcao: "Arquiteta",
    dataCadastro: "2023-03-01T07:30:00.000Z",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2023-04-10T12:00:00.000Z"
    }
  },
  {
    nome: "Marcos Silva",
    email: "marcos.silva@example.com",
    senha: "asdfghjkl@3",
    endereco: {
      rua: "Avenida Central",
      numero: 321,
      cidade: "Recife",
      estado: "PE",
      pais: "Brasil"
    },
    telefone: "81987654321",
    ativo: false,
    funcao: "Engenheiro",
    dataCadastro: "2023-02-10T09:45:00.000Z",
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: "2023-03-15T10:30:00.000Z"
    }
  },
  {
    nome: "Patricia Araújo",
    email: "patricia.araujo@example.com",
    senha: "zxcvbn@45",
    endereco: {
      rua: "Rua da Liberdade",
      numero: 101,
      cidade: "Salvador",
      estado: "BA",
      pais: "Brasil"
    },
    telefone: "71987654321",
    ativo: true,
    funcao: "Administradora",
    dataCadastro: "2023-01-15T08:15:00.000Z",
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: "2023-02-20T11:00:00.000Z"
    }
  },
  {
    nome: "Roberto Nunes",
    email: "roberto.nunes@example.com",
    senha: "mnbvcxz@89",
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 654,
      cidade: "Fortaleza",
      estado: "CE",
      pais: "Brasil"
    },
    telefone: "85987654321",
    ativo: true,
    funcao: "Professor",
    dataCadastro: "2022-12-05T07:00:00.000Z",
    status: {
      online: false,
      verificado: false,
      assinaturaAtiva: false,
      ultimoAcesso: "2023-01-10T09:45:00.000Z"
    }
  }
]