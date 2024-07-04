/// <reference types="cypress" />
import usuariosSchema from '../contracts/usuarios.contract';
import contrato from '../contracts/usuarios.contract'
describe('Testes da Funcionalidade Usuários', () => {

  it('Deve validar contrato de usuários', () => {
    cy.request('usuarios').then(response =>{
      return contrato.validateAsync(response.body)
    })
  });

  it('Deve listar usuários cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'usuarios'
    }).then((response) =>{
      expect(response.status).equal(200)
      expect(response.body).to.have.property('usuarios')
    })
  });

  it('Deve cadastrar um usuário com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'usuarios',
      body: {
          "nome": 'Fulano da silva',
          "email": 'beltrano01@qa.com.br',
          "password": 'teste',
          "administrador": 'true'
      }
    })
  });

  it('Deve validar um usuário com email inválido', () => {
    cy.cadastrarUsuario('Usuario EBAC', 'beltrano@qa.com.br', 'teste', 'true')
    .then((response) => {
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Este email já está sendo usado')
    })
  });

  it('Deve editar um usuário previamente cadastrado', () => {
    cy.request('usuarios').then(response => {
      let id = response.body.usuarios[0]._id
      cy.request({
          method: 'PUT', 
          url: `usuarios/${id}`,
          body: 
          {
              "nome": 'Usuario editado 12123',
              "email": 'beltrano001@qa.com.br',
              "password": 'teste',
              "administrador": 'true'
            }
      }).then(response => {
          expect(response.body.message).to.equal('Registro alterado com sucesso')
      })
  })
  });

  it('Deve deletar um usuário previamente cadastrado', () => {
    cy.cadastrarUsuario('Usuario EBAC a ser deletado', 'beltrano00@qa.com.br', 'teste', 'true')
    .then(response => {
        let id = response.body._id
        cy.request({
            method: 'DELETE',
            url: `usuarios/${id}`,
        }).should(resp => {
            expect(resp.body.message).to.equal('Registro excluído com sucesso')
            expect(resp.status).to.equal(200)
        })
    })
  });


});