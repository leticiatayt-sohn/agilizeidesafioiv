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
<hr>

<h3>Setup Cypress</h3>
<h4>Inicie um novo projeto Node.js:</h4> 
  <ul>
	<li>
		npm init -y
	</li>
</ul>
<hr>

<h4>Instale o Cypress como dependência dev:</h4>
  <ul>
	<li>
		npm install cypress -D
	</li>
</ul>
<hr>

<h4>Execute o Cypress:</h4>
  <ul>
	<li>
		npx cypress open
	</li>
</ul>
<hr>

<h4>Exclua arquivos padrão e adicione um esquema ao cypress.json:</h4>

   {
   <p>" $ schema " : " https://on.cypress.io/cypress.schema.json "</p>
   }
<hr>

<h4>Instale o Chance como dependência de desenvolvimento:<h4>
  <ul>
	<li>
		chance de instalação npm -D
	</li>
</ul>
<hr>

<h4>Crie um novo arquivo register.spec.js de teste para testar o processo de registro.</h4>
<hr>

<h4>Adicione comandos de scripts ao package.json:</h4>

   {
 <p> " scripts " : {</p>
     <p>" cy: open " : " npx cypress open " ,</p>
     <p>" cy: run " : " npx cypress run "</p>
   }
   }

   <iframe src="https://giphy.com/embed/uxcBy0kSMPVrRkSTXR" width="480" height="228" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/uxcBy0kSMPVrRkSTXR">via GIPHY</a></p>

