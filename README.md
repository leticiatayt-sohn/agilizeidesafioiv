Capítulo IV - Desafio 02

Teste de automação com Cypress para cadastro de um site de e-commerce .

Requisitos
registrar um novo usuário no site
os dados do usuário devem ser diferentes para cada teste
adicionar asserções aos testes
gerar relatórios usando mochawesome
crie um novo repositório para o Github
descrever o projeto em um arquivo README
executar testes no Github Actions
relatório de implantação em páginas do Github
Setup Cypress
Inicie um novo projeto Node.js:

  npm init -y
Instale o Cypress como dependência dev:

  npm install cypress -D
Execute o Cypress:

  npx cypress open
Exclua arquivos padrão e adicione um esquema ao cypress.jsonarquivo:

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

