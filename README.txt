##Tipos de test
- End to End
- Integración
- E2E de extremo a extremo
- Regresión visual


##Test unitarios
- Parte testeable más pequeña del software
- Se tiene que ejecutar rápido
- Alcance limitado, si falla, se dónde buscar el problema.

##Estructura de un test
Preparación, ejecución y aserción


## Principales métodos
toBe() -> No usar en objetos
toHaveLenght()-> Arrays
toBeNull()-> Null
toBeUndefinded()-> Undefinded
toBeNull()-> Null

## Prácticas testing

- Los tests deben ser mantenibles
- No son gratis, hay que mantenerlos si el código cambia
- Hacerlos donde importa en el negocio
- Legibles y con mensajes claros en los describes
- Cada test prueba UNA sola cosa
- Los test solo deben probar una cosa
- Testeamos el qué, no el cómo. Solo quiero saber que 3 + 5 = 8. No como lo hace.

## Coverage

Métrica para saber que % de nuestro código se ha ejecutado cuando han pasado los test, no buscar el 100%
Podemos utilizar el comando vitest --coverage


#TDD
- No escribir codigo de aplicacion a no ser que tengas un tests que falle
- Eliminar duplicidad de código (regla de 3 veces)
- REFACTORIZACIÓN (importante)


#KATAS

Ejercicos de programación que a través de la repetición nos ayudan a mejorar nuestras habilidades


#TDD estricto
- Se trata de una iteración constante, en donde el código falla, lo corregimos con lo mínimo, pasa y hacemos que vuelva a fallar con otra prueba. Hay que refactorizar.
- El refactor debe hacerse una vez que ya los test han fallado y los hemos corregido nuevamente, porque ya estamos seguros de lo que tiene que suceder para que el test pase, porque ya hemos probado los casos, entonces al refactorizar, si hacemos al mal, los test no pasarán.