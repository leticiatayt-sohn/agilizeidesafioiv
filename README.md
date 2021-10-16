<h1>Capítulo IV - Desafio 02</h1>

<h4>Teste de automação com Cypress para cadastro de um site de e-commerce.</h4>

<h4>Requisitos:</h4>
<ul>
<li>registrar um novo usuário no site</li>
<li>os dados do usuário devem ser diferentes para cada teste</li>
<li>adicionar asserções aos testes</li>
<li>gerar relatórios usando mochawesome</li>
<li>crie um novo repositório para o Github</li>
<li>descrever o projeto em um arquivo README</li>
<li>executar testes no Github Actions</li>
<li>relatório de implantação em páginas do Github</li>
<li>Setup Cypress</li>
<li>Inicie um novo projeto Node.js:</li>
</ul>

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

