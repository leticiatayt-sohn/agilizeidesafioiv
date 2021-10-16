<h1>Capítulo IV - Desafio 02</h1>

<h4>Teste de automação com Cypress para cadastro de um site de e-commerce.</h4>

<h3>Requisitos:</h3>
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

<h1>Iniciar com o Cypress</h1>
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
<hr>
  
<img src="/Gif/Gif.gif"></img>
<hr>

<h1>Gerar Relatórios</h1>
<h4>Instale o Mochawesome como dependência</h4> 
  <ul>
	<li>
		npm install cypress-multi-reporters mochawesome mochawesome-merge mochawesome-report-generator -D
	</li>
</ul>
<hr>

<h4>Adicione a configuração ao arquivo cypress.json</h4> 
	{
  <p>"$schema": "https://on.cypress.io/cypress.schema.json",</p>
  <p>"videoCompression": 32,</p>
  <p>"reporter": "cypress-multi-reporters",</p>
  <p>"reporterOptions": {</p>
   <p>"configFile": "reporter-config.json"</p>
  }
}
<hr>

<h4>Adicione um novo arquivo de configuração com o nome reporter-config.json:</h4>
{
  <p>"reporterEnabled": "mochawesome",</p>
  <p>"mochawesomeReporterOptions": {</p>
    <p>"reportDir": "mochawesome-report",</p>
    <p>"quiet": true,</p>
    <p>"overwrite": false,</p>
    <p>"html": false,</p>
    <p>"json": true</p>
  }
}
<hr>

<h4>Adicione rimraf como dependência:</h4> 
  <ul>
	<li>
		npm install -D rimraf
	</li>
</ul>
<hr>

<h4>Adicione os comandos no script package.json</h4>
{
 <p>"scripts": {</p>
    <p>"cy:open": "npx cypress open",</p>
    <p>"cy:run": "npx cypress run",</p>
    <p>"report:merge": "mochawesome-merge > index.json",</p>
    <p>"report:mocha": "marge index.json",</p>
    <p>"report:clean": "rimraf mochawesome-report index.json"</p>
  }
}
<hr>

<h4>Gere o relatório</h4> 
  <ul>
	<li>
		npm run cy:run && npm run report:merge && npm run report:mocha
	</li>
</ul>
<hr>

<h4>Gere o relatório:</h4> 
  <ul>
	<li>
		Check the report at mochawesome-report/index.html:
	</li>
</ul>
<hr>

<h4>Limpe o relatório:</h4> 
  <ul>
	<li>
		npm run report: clean
	</li>
</ul>
<hr>

<h1>Github Actions e Github Pages:</h1>
<ul>
<li>Adicione o Node.js ao projeto em Actions</li>
<li>Instale as dependencias</li>
<li>Execute os testes</li>
<li>Em configurações - Pages, Gere o relatório</li>
<li>Adicione o relátorio as páginas do Github</li>
</ul>
<h4>Relatório adicionado: https://leticiatayt-sohn.github.io/agilizeidesafioiv/<h4>
<hr>





