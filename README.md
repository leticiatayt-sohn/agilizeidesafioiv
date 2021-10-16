<h1>Capítulo IV - Desafio 02</h1>

<h4>Teste de automação com Cypress para cadastro de um site de e-commerce.</h4>

<h4>Requisitos:</h4>
<p>registrar um novo usuário no site</p>
<p>os dados do usuário devem ser diferentes para cada teste</p>
<p>adicionar asserções aos testes</p>
<p>gerar relatórios usando mochawesome</p>
<p>crie um novo repositório para o Github</p>
<p>descrever o projeto em um arquivo README</p>
<p>executar testes no Github Actions</p>
<p>relatório de implantação em páginas do Github</p>
<p>Setup Cypress</p>
<p>Inicie um novo projeto Node.js:</p>

npm init -y
Instale o Cypress como dependência dev:

npm install cypress -D
Execute o Cypress:

npx cypress open

Exclua arquivos padrão e adicione um esquema ao cypress.json:

{
   " $ schema " : " https://on.cypress.io/cypress.schema.json " 
}

Instale o Chance como dependência de desenvolvimento:

chance de instalação npm -D
Crie um novo arquivo register.spec.js de teste para testar o processo de registro.

Adicione comandos de scripts ao package.json:

{
   // ... 
  " scripts " : {
     " cy: open " : " npx cypress open " ,
     " cy: run " : " npx cypress run "
  }
  // ... 
}

