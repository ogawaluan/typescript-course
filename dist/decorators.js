"use strict";
// @Component
// @Selector
// @useState("asas")
// ------------------Factory---------------
// function Logger(prefix: string) {
//     return (target) => {
//         console.log(`${prefix} - ${target}`)
//     }
// }
// @Logger('awsoneme')
// class Foo {}
// ---------------Class decorator--------------------
// function setAPIVersion(apiVersion: string) {
//     return (constructor) => {
//         return class extends constructor {
//             version = apiVersion
//         }
//     }
// }
// //decorator - anotar a versão da API
// @setAPIVersion('2.0.0')
// class API {}
// console.log(new API())
// -------------------Property decorator--------------------
// function minLength(length: Number) {
//     return (target: any, key: string) => {
//         let val = target[key]
//         const getter = () => val
//         const setter = (value: string) => {
//             if(value.length < length) {
//                 console.log(`erro: voce nao pode criar ${key} com tamanho menor que ${length}.`)
//             } else {
//                 val = value
//             }
//         }
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter,
//         })
//     }
// }
// class Movie {
//     //validação - se for menor que 5 letras = erro
//     @minLength(50)
//     title: String;
//     constructor(t: String) {
//         this.title = t;
//     }
// }
// const movie = new Movie("Interestellar");
// console.log (movie.title)
//----------------- Method decorator----------------------
// function delay(ms: number) {
//     return (target: any, key: string, descriptor: PropertyDescriptor) => {
//         const originalMethod = descriptor.value
//         descriptor.value = function(...args) {
//             console.log(`esperando ${ms}...`)
//             setTimeout(() => {
//                 originalMethod.apply(this, args)
//             }, ms)
//             return descriptor
//         }
//     }
// }
// class Greeter {
//     greeting: string
//     constructor(g: string) {
//         this.greeting = g
//     }
//     // esperar um tempo e aí vai rodar o método (ms)
//     @delay(2000)
//     greet() {
//         console.log(`Hello! ${this.greeting}`)
//     }
// }
// const pessoinha = new Greeter("pessoinha")
// pessoinha.greet()
// Parameter decorator
// Acessor decorator
