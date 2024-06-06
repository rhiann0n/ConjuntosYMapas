<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Conjuntos y Mapas</title>
    <link rel="stylesheet" href="views/css/responsive.css">
    <link rel="stylesheet" href="views/css/style.css">
    <script src="views/script/script.js"></script>
</head>
<body>
<div class="contendor2 col-8">
    <h1 class="contenedor2">Agenda Telefónica</h1>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre">
    <label for="telefono">Teléfono:</label>
    <input type="text" id="telefono" maxlength="9">
    <p>
        <button id="agregar" class="boton">+</button>
    </p>
    <p class="error"></p>
    <div class="contenedor2 col-12">
        <table id="agenda">
            <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
            </tr>
        </table>
    </div>
</div>
</body>
</html>
