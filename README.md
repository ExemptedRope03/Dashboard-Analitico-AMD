# Plataforma de Visualización de Datos - React

## Descripción

Esta plataforma ha sido desarrollada con un enfoque en un diseño rápido y cómodo, permitiendo a los usuarios identificarse para iniciar sesión. Se ha implementado una paleta de colores sencilla, optimizada para facilitar la transición a un modo oscuro, ofreciendo una experiencia de usuario más agradable en diferentes condiciones de luz.

### Características Principales

- **Autenticación de Usuarios**: Los usuarios pueden autenticarse mediante Google. Aunque actualmente no se realizan peticiones a futuros servicios, la plataforma soporta el manejo básico de sesiones.
- **Modo Oscuro**: La aplicación incluye un tema de modo oscuro, que puede ser activado fácilmente gracias a la paleta de colores implementada.
- **Datos Estáticos**: Debido a las restricciones presentadas por Google y Meta al realizar conexiones desde un entorno de frontend puro, los datos presentados en la plataforma son estáticos. Sin embargo, estos permiten una demostración efectiva de la funcionalidad de la plataforma.

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tuusuario/nombre-del-proyecto.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd nombre-del-proyecto
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Inicia la aplicación:
    ```bash
    npm start
    ```

## Uso

### Autenticación con google

El programa te permite colocar tus credenciales propias para la visualizacion de tu informacion:

1. Tener habilitado la cuenta de google para usar AuthO2
2. Tener tus credenciales a la mano
3.Colocarlas en la plataforma

Las credenciales se quedan en tu localstorage y de igual manera no afecta al desempeño del programa




### Modo Oscuro

Puedes alternar entre el modo claro y el modo oscuro a través del interruptor ubicado en la parte superior derecha de la aplicación.



## Datos

Actualmente, los datos mostrados en la plataforma son estáticos debido a las limitaciones de conexión desde un frontend puro con servicios como Google y Meta. Sin embargo, estos datos están organizados de tal manera que ilustran claramente el funcionamiento de la plataforma.



## Mantenimiento de Estado

Toda la información ingresada por el usuario se mantiene localmente en las variables del sistema. No se realizan persistencias de datos en servidores externos, lo que asegura la privacidad y control del usuario sobre su información.


## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
