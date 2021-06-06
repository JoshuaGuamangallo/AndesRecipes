# AndesRecipes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Arquitectura

Para el proyecto se uso la arquitectura basada en componentes, ya que se enfoca en la descomposición del diseño en componentes funcionales o lógicos.

## Estructura

Se creó una serie de carpetas, donde se dividio en:

- Components: Header (Html, Sccs, Component) contiene la imagen de la empresa, ademas de esto este componente puede ser útil para la creacion de otras funcionalidades como menús, entre otras funcionalidades. Recipes (Html, Sccs, Component) contiene las funcinalidades importantes, ya que este componente  lista y filtadolas recetas se sun estado su estado (habilitado, deshabilitado), además se incluye ciertos elementos (Calificación con estrellas, barra de busqueda y boton para crear una receta) par que pueden ser colocados sus funcionalidades.
- Material: Esta carpeta es un module, donde se colocan las librerias de Angular material, se la creo con el proposito de mantener un desarrollo funcional.
- Interface: Esta carpeta puede contener varias interfaces de la aplicación. Para el desarrollo de este proyecto se utilizo solo una inteface (Recipes).
- Pipes: La carpeta puede contener varios archivos Pipe, ya que nos permite transformar visualmente la información, en este desarrollo solo se lo uso Pipe(Filter Recipes) para el filtado de de la información.

## Funcionamiento del código

En la carpeta pipe se declaran variables para que se pueda hacer un filtrado efectivo, donde se decidio guardar la informacion en un array, una ves realizado esto se coloco un for, donde pasa por cada uno de los elementos y va tomando un camino diferente según el estado en el que se encuentre, el cual puede ser True o Falso, ningun valor, acabada esta tarea se declara la función para su funcionamiento, un punto importante es que el pipe se debe declarar dentro del html, para asi tomar acción y dar forma a lo que se necesita.

Recipes component se declaro las variables, la tabla y sus posiones, a su vez se creo una funcion de filtado, ya que con esta al tener un determinado valor cambiara su función de filtrado.


## Paquetes usadas

- Angular material
- Scss
- Google Fonts

## Herramientas usadas

- Angular Cli 9.1.14
- Visual Studio Code 1.56.2 
- Node 12.18.0
- Typescript 3.8


