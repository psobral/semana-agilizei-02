/**
 * Crie um arquivo index.d.ts na pasta support. 
 * Copie o conteúdo abaixo dentro do arquivo index.d.ts criado.
 * Importante: esse NÃO substitui o index.js existente. Eles possuem finalidades diferentes.
 */


/// <reference types="cypress" />
 //////VAI EXIBIR OS COMANDOS NO AUTOCOMPLETE DO CYPRESS 
//

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       *COMANDO PARA EXECUTAR COMANDO LOGIN EM BACKGROUND
       * @example
       cy.backgroundLogin()
       * 
       */
      backgroundLogin(): Chainable<any>
  
    }
  }