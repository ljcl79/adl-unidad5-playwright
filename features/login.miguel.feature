Feature: Acceso al sistema
    Proveer el mecanismo de acceso al sistema para los usuarios
    Como usuario del sistema
    Quiero poder iniciar la sesión en la aplicación
    Para acceder a mis datos

    Background:
        Given que el usuario está en el formulario de login

    Scenario: Login exitoso con credenciales correctas
        When el usuario ingresa el nombre de usuario "x"
        And el usuario ingresa la clave "y"
        And el usuario hace clic en boton "Enviar"
        Then deberia mostrarse estar visible el boton de "Profile"

    Scenario: Login fallido por credenciales incorrectas
        Given que el usuario esta en el formulario de login
        When el usuario ingresa el nombre de usuario "usuario_invalido"
        And el usuario ingresa la contrasena "contrasena_invalida"
        And el usuario hace clic en el boton de login
        Then el sistema muestra un mensaje de error "Credenciales incorrectas"


    Scenario: Login fallido por falta de datos
        Given que el usuario esta en el formulario de login
        When el usuario no ingresa el nombre de usuario
        And el usuario no ingresa la contrasena
        And el usuario hace clic en el boton de login
        Then el sistema muestra un mensaje de error "Todos los campos son obligatorios"