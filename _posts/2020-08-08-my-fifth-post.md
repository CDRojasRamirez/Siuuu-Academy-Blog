---
title: 'Curso de React.js'
description: pequeña description
date: '2020-08-08'
modified_date: '2020-08-08'
image: /assets/images/posts/random-img.jpg
---

## Introducción a React

# Que es React.js?

**Es una librería *open source* de JavaScript para desarrollar interfaces de usuario**. Fue lanzada en el año 2013 y **desarrollada por Facebook**, quienes también la mantienen actualmente junto a una comunidad de desarrolladores independientes y compañías.

Hoy en día muchas empresas de primer nivel utilizan **React para el desarrollo de sus aplicaciones**, y es que entre ellas podemos encontrar **Facebook**, **Instagram** y el cliente web de WhatsApp (todas propiedad de Facebook), y otras como **AirBnb, Uber, Netflix, Twitter, Reddit o Paypal**.

Desde su lanzamiento, su uso ha ido incrementando notablemente, convirtiéndose, a día de hoy, en **una de las tecnologías *front-end* más utilizadas.**

### **React y su Arquitectura**

El elemento más importante de React es **el *componente***, que es, en esencia, una pieza de la interfaz de usuario. Como norma general, al diseñar una aplicación con React, lo que estamos haciendo es crear **componentes independientes y reusables para**, poco a poco, **crear interfaces de usuario más complejas**.

# Conceptos básicos

### JSX

- Es la extensión de archivos que se usa en react donde podemos hacer html dentro de js facilitando el uso sacando lo mejor de html css y js.

### Virtual DOM

- Es una copia del **DOM real** y lo que hace es compararlo, asi cuando existe algun cambio no se tiene que renderizar toda la pantalla si no solo lo que se cambio mejorando el desempeño de nuestra app, como lo comente antes esto es por que se compara el V**irtual** **DOM** con el **DOM** R**eal** encontrando los cambios

### Ciclo de vida

- Este concepto es ampliamente conocido en la programación, en este curso vamos a conocer cual es el ciclo de vida de los elementos que vamos a crear en react desde que nace, se combina hasta que muere

### Estado

- Esto es fundamental, ya que podemos ver los estados y ver como es el flujo de la información entre componentes a través de un imputs, botones, interacciones entre otros elementos

### Evento

- los componentes, pueden configurarse con eventos como *onclick* para responder antes ciertas interacciones con el usuario, tal como los haríamos en Html

### React Hooks

- es otra manera de escribir los componentes con estado, si usar clases. No se pretenden reemplazar, sin embargo, usar funciones para los componentes pueden facilitar el entendimiento de la aplicación.

## Iniciar con React.js y Webpack

# Configuración

Comandos para iniciar proyecto con NPM

```bash
#iniciar con NPM
npm init 
#iniciar con github 
git init 
#instalamos para react 
npm install react react-dom
#instalar babel para que corra en cualquier version 
npm install @babel/core @babel/preset-env @babel/preset-react
#instalacion de webpack 
npm install webpack webpack-cli webpack-dev-server
#instalacion de plugins y loaders 
npm install babel-loader html-loader html-webpack-plugin
#para corregir warnings y que corra bien, loader para css sass
npm install css-loader mini-css-extract-plugin sass sass-loader style-loader –D

```

Configuración de archivo webpack.config.js 

path se agrega para saber donde se va a trabajar

el punto de entrada de nuestra aplicacion es entry y recibe archivo principal 

output.path dar un resolve para decir donde nos encontramos 

filename es para el nombre del empaquetado 

en resolve se añadiran las extenciones que estaremos utilizando 

module/rules es para las configuraciones 

module-rules-test es para identificar los archivos 

module-rules-exclude es para excluir carpetas 

module-rules-user es para el loader que se utilizara 

mode development es para decir que la configuracion de para modo development

```jsx
const { plugins } = require('@babel/preset-env/lib/plugins-compat-data');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',        
    },
    mode : 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
    ],
	devServer: {
	contentBase : path.join(__dirname, 'dist'),
	port:3006
}
}
```

plugins nos permite agregar los plugins que previamente instalamos y utilizaremos 

filename es como se va a llamar cuando lo preparemos 

devServer para trabajar con los elementros que son clave para nuestro entorno de desarrollo

![entorno](@@baseUrl@@/assets/images/posts/entornodedesarrollo.png)

para babel configuracion presets, dentro iran los valores que instalamos para compilar esc 5  o mas 

```jsx
{
	"presets": [
		"@babel/preset-env",
		"@babel/preset-react"
	],
	"plugins" : [
		"@babel/plugin-transform-runtime"
	]
  }
```

Example with image:

![Error](@@baseUrl@@/assets/images/posts/error.png)

Example code block:

```js
function myFunction() {
  return true;
}
```
