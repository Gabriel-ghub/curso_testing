# Testing en FRONT

- Debemos instalar una librería que simule el DOM (happy dom, JEST dom, etc), porque en node no tenemos document.
- Testing library para testear en aplicaciones de Javascript

# Necesitamos

- Vitest
- @testing-library/dom = Simula el DOM
- @testing-library/jest-dom = Nos proveé más metodos para buscar en el DOM
- @testing-library/react = Para que funcione con React (depende del framework)
- @testing-library/user-event = Simula los eventos del usuario

# Pasos para testear un componente

- Hacer el Render del componente que queremos testear
-
