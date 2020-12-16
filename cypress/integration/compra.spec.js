/// <reference types="cypress" />

context('Compra', () => {

    it('Efetuar uma compra de um produto', () => {
        cy.backgroundLogin()

        //http://automationpractice.com/index.php
        cy.visit('/');

        let nomeproduto = 'Faded Short Sleeve T-shirts'
        cy.contains(nomeproduto).trigger('mouseover')

// nome do produto -> elemento
// -> pai 
// -> irmãos do pai (ou tios do elemento)
// -> irmão button container 
// -> add  to cart *
   // -> more

        cy.contains(nomeproduto)
            .parent() //h5
            .siblings('div.button-container')
            .children('a')
            .first() // add to cart
            .click()

            //VALIDANDO SE O PRODUTO FOI ADICIONADO AO CARRINHO COM SUCESSO 
            cy.get('.icon-ok')
            .parent() //h2 pai
            .should('contain.text', 'Product successfully added to your shopping cart')

            cy.get('span#layer_cart_product_title').should('contain.text',nomeproduto)

            cy.pause() /// somente para pausar o teste nesse ponto, depois será retirado

            cy.get("*.button-container a[href$='controller=order']").click()

          //Process to checkout
            cy.get(".cart_navigation a[href$='controller=order&step=1']").click();

            // LOGIN
            //cy.get('#email').type('paulanobreb@hotmail.com')
            //cy.get('#passwd').type('54321')

            //cy.get('button#SubmitLogin').click();
            
           //VALIDANDO SE O ENDEREÇO DE ENTREGA É IGUAL AO DE COBRANÇA
            //[type=checkbox]#addressesAreEquals // elemento que o checkbox deverá estar marcado 
            // usar a sintaxe do should + // asserção | atributo | valor
            cy.get('[type=checkbox]#addressesAreEquals').should('have.attr','checked','checked')
            cy.get('[type=checkbox]#addressesAreEquals').should('have.attr','name','same')

            
           cy.get('button[name="processAddress"]').click();

           // Marcar o checkbox
           cy.get('[type="checkbox"]#cgv').check()
                      

           cy.get('button[name="processCarrier"]').click();

           //payment
           cy.get('.bankwire').click();

           //confirmar my order 
           cy.get('.cart_navigation button[type="submit"]')
           .find('span')
           .contains('I confirm my order')
           .click()


           cy.get('.cheque-indent strong')
           .should('contain.text', 'Your order on My Store is complete.')

           //CONFIGURANDO O ID DO PEDIDO PARA VALIDAÇÃO 
           cy.get('div.box').invoke('text').then((text) => {
               console.log(text) //acessar o console do inspecionar

               console.log(text.match(/([A-Z])[A-Z]+/g)[1]) //g encontrar todas as ocorrências que atendem a essa expressão dentro do texto
               // ARRAYS
               // 0 -> RTP
               // 1 -> ID do pedido

               // ESCRITA DE UM ARQUIVO JSON COM O CONTEÚDO DO PEDIDO - SALVA EM UM ARQUIVO O ID
               // CAMINHO DO ARQUIVO (SEMPRE A PARTIR DO ROOT) | CONTEUDO DO ARQUIVO
               cy.writeFile('cypress/fixtures/pedido.json', { id: `${ text.match(/([A-Z])[A-Z]+/g)[1] }`})

               cy.get(".cart_navigation a[href$=history]").click()

               //leitura de um arquivo
               cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
               
               cy.get('tr.first_item .history_link a').should('contain.text', pedido.id)

               // html
               // . = classe
               // json
               // . = nivel dentro do caminho do json 
               })

               //then - acessar o conteudo do arquivo
               // tr - tabela
               
               
           })

           // PASSOS PARA CONFIGURAR O ID DO PEDIDO PARA VALIDAÇÃO
           // [X] 1. CAPTURAR O TEXTO DO BOX
           // [x] 2. FILTRAR O TEXTO DO BOX PARA EXTRAIR SOMENTE O ID DO PEDIDO -- CRIAR UMA EXPRESSÃO REGULAR
           // [X] 3. ARMAZENAR O ID DO PEDIDO DE ALGUMA FORMA
           // [ ] 4. OBTER O ID DO PEDIDO ARMAZENADO NO PASSO 3 DE ALGUMA FORMA 

           //mecanismos de busca
           //expect
           //should

         


    });
});

// nome do produto -> elemento
// -> pai 
// -> irmãos do pai (ou tios do elemento)
// -> irmão button container 
   // -> add  to cart *
   // -> more

