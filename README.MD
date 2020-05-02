# **Curso Angular 2 - https://loiane.training/**

## Instalação

Instalar última versão node.js  disponível em https://nodejs.org/en/download/

No terminal instalar:

    npm install -g typescript
    npm install -g @angular/cli$ npm install -g @angular/cli

## Criar Novo Projeto

No terminal:

`ng new nome-do-projeto`

## Rodar o projeto

`ng serve`

## Criar Novo Componente

`ng g c nome-do-componente`

Meu componente

import { Component } from '@angular/core';

```@Component({
  selector: 'app-my-first2', // classe do css
  templateUrl: './my-first2.component.html',  // arquivo template
  styleUrls: ['./my-first2.component.css']  // arquivo css
})// significa que o componente é parte do angular 2
export class MyFirst2Component {

}
```
# Diretivas

## Diretiva For

```
<li *ngFor="let course of courses ">
     {{ course}}
</li>
```
# Serviços

`ng g s nome-do-servico`

# Injeção de Dependêcia

Fornecer a instância de uma classe
@Injectable


# Interpolação

  ```
  <article>
        <h3>Propoerty Binding</h3>
        <img src="{{ urlImg }}">
        <img [src]="urlImg">
        <img bind-src="urlImg">
  </article>
  ```
# Pré-processadores

## Novo Projeto

 ```
ng new nome-do-projeto --style=sass

ng new nome-do-projeto --style=less

ng new nome-do-projeto --style=stylus
 ```

# Ng Lint Ng Teste Ng E2e

 ```
ng lint 

ng new nome-do-projeto --style=less

ng new nome-do-projeto --style=stylus
 ```

# Diretivas

## Ng If e Hidden 

Hidden exibe o conteúdo oculta na interface ao inspecionar o código - não é muito seguro

Hidden - pequenas árvores de código

Ng If - oculta o código mesmo ao inspecionar, porém custa mais em desempenho

Ng If - pequenas árvores de código

# Notas
Geralmenta quando se usa input property ->ngOnChanges do contrario ngOnInit







