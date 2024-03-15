# Desenvolvendo o Dio Bank 

Desenvolvido por [Alef A. Araujo](https://github.com/3alyef)

**<p>  Projeto criado como resolução do desafio: "Construindo um App simples de Banco com Typescript". </p>**

## Tecnologias

- Typescript

## Como rodar o projeto em Typescript

1 - Clone o repositório 


2 - Instale as dependências

    npm install

3 - Execute o projeto

    npm run dev

## Como compila-lo para JavaScript

1 - Clone o repositório

2 - Instale as dependências

    npm install

3 - Gere a build do projeto

    npm run build

4 - Execute o projeto

    npm start



#### Desafios
[x] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[x] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo

[x] Criar um novo tipo de conta a partir da DioAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

[x] Todos os atributos de qualquer conta devem ser privados

[x] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[x] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.



<script>
function copyText() {
  var copyText = document.getElementById("copyTarget");
  copyText.select();
  document.execCommand("copy");
  alert("Texto copiado para a área de transferência!");
}
</script>

