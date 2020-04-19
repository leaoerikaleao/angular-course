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
