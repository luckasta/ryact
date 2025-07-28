## REACT


##1. ¿Qué es React?

React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.

##2. ¿Por qué usar React?

React destaca por sus notables beneficios. Sus componentes reutilizables ahorran tiempo y mantienen el código organizado, mientras que el DOM virtual mejora el rendimiento. Además, funciones como el estado y las propiedades simplifican la gestión de datos dinámicos.

##3. ¿Qué necesito saber antes?

Es crucial tener una base sólida en JavaScript, incluyendo conceptos como funciones de flecha, el operador spread, desestructuración, y el manejo de promesas. Además, es importante comprender HTML y CSS para la creación de interfaces de usuario, así como tener conocimientos básicos de control de versiones con Git y gestión de paquetes como npm.  

##¿Qué es JSX?

Es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. Es ampliamente utilizado con React para describir la estructura de la interfaz de usuario de una aplicación web, permitiendo mezclar código JavaScript con elementos visuales de una manera más legible y mantenible. 

##¿Qué es un componente funcional?

Es una función de JavaScript que recibe datos como entrada (props) y devuelve elementos de React (JSX) para representar la interfaz de usuario. Son la forma más simple de componentes en frameworks como React, y a menudo se utilizan para componentes de presentación o sin estado. 

##¿Qué son los props en React?

Son un mecanismo para pasar datos desde un componente padre a un componente hijo. Son una forma de configurar o personalizar un componente, permitiendo que este reciba información que necesita para renderizarse correctamente. Piensa en ellos como argumentos que se pasan a una función. 

##¿Cómo se actualiza la pantalla automáticamente al cambiar datos?

En React, la pantalla (la interfaz de usuario) se actualiza automáticamente cuando cambian los estados o props de un componente. Esto se debe a que React utiliza un sistema de reactividad.
Por ejemplo, cuando usas useState para manejar un dato y luego lo actualizas, React vuelve a renderizar el componente que usa ese dato, mostrando la nueva información en pantalla.

##¿Qué hace el useState?

useState es un hook de React que permite a los componentes funcionales tener estado. Es una forma de guardar y actualizar datos dentro del componente.