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
</ul>

<h3>Setup Cypress</h3>
<h4>Inicie um novo projeto Node.js:</h4>
<table style="width:100%">
  <tr>
    <th>npm init -y</th>
  </tr>

<h4>Instale o Cypress como dependência dev:</h4>
<p>npm install cypress -D</p>

<h4>Execute o Cypress:</h4>
<p>npx cypress open</p>

<h4>Exclua arquivos padrão e adicione um esquema ao cypress.json:</h4>

<p>{</p>
   <p>" $ schema " : " https://on.cypress.io/cypress.schema.json "</p>
<p>}</p>

<h4>Instale o Chance como dependência de desenvolvimento:<h4>
<p>chance de instalação npm -D</p>

<h4>Crie um novo arquivo register.spec.js de teste para testar o processo de registro.</h4>

<h4>Adicione comandos de scripts ao package.json:</h4>

<p>{</p>
   <p>// ...</p>
 <p> " scripts " : {</p>
     <p>" cy: open " : " npx cypress open " ,</p>
     <p>" cy: run " : " npx cypress run "</p>
  <p>}</p>
  <p>// ...</p>
<p>}</p>

