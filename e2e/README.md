- No mockear nada cuando se hace test end to end
- Es importante el use en el archivo de configuración, donde se puede definir que comportamientos va a tener el navegador:
  - Tamaño de pantalla
  - Permisos
  - Autorización
  - Cookies

script de test:

- npx playwright test --ui
- npx playwright test

//SELECTORES ÚTILES.

- page.locator() -> Le puedo pasar varias cosas dentro, selector CSS, etc.
- page.waitforLoadState() -> Espera a que cargue todo
- page.waitForUrl() -> Espera a que cambie la URL

// CONFIGURACION EN playwright.config

use.TimeOut() -> Aumentar el tiempo de espera para que encuentre un selector, por si no lo encuentra o la pagina es grande
