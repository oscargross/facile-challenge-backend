# facile-challenge-backend - string encryption challenge


Oscar Gross Junior
<img src= "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">  </ br>
https://github.com/oscargross/
<img src= "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">   </ br>
https://www.linkedin.com/in/oscar-gross-891534137/


<h1>Desafio de criptografia de string</h1>

Tecnologias:

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />


Com uma ferramenta API Client, como insominia ou Postman, acesse o link:  </ br>
utilizando o método POST e insira no body o JSON com o parâmetro "name". Ex: </ br>
{ </ br>
  "name": "String qualquer" </ br>
} </ br>
 </ br>
O retorno será a string criptografad e seu id de cadastro no banco de dados.

Com o método GET, acesse o link: 
Insira o respectivo id como parâmetro na url, da seguinte forma: /{id}
O retorno será sua string descriptografada.


Para executar em seu localhost, siga os passos:
 :ballot_box_with_check: Baixe o zip deste projeto;
 :ballot_box_with_check: Instale o postgres em sua máquina, ou docker, ou em nuvem e retenha suas informações para conexão;
 :ballot_box_with_check: Crie um arquivo na raiz do projeto com o nome {.env}, e insira as informações do banco no projeto, ex:
        PORT=8080
        NODE_ENV=development
        DATABASE_URL=
        TYPEORM_HOST=
        TYPEORM_PORT=5432
        TYPEORM_USERNAME=
        TYPEORM_PASSWORD=
        TYPEORM_DATABASE=
        TYPEORM_SYNCHRONIZE=false
        
 :ballot_box_with_check: Execute os comandos:
  :large_blue_diamond: yarn i ou npm i - Para baixar as dependencias e libs necessárias contidas no package.json
  :large_blue_diamond: yarn dev:server - Para conexão com banco;
  :large_blue_diamond: yarn typeorm migration:run - Para criar o modelo no db; 
  
Execute novamente o comando yarn dev:server, crie uma chamada POST na url http://localhost:8080/encripts, com o parâmetro "name" no JSON do body. E para leitura, com chamada GET na URL http://localhost:8080/encripts/{id} informando no param o id recebido anteriormente.
