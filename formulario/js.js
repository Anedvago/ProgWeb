$(function(){
    añadir();
    borrar();
    modificar();
    guardar();

});

function añadir(){
    $("#añadir").on("click",function(e){
     e.preventDefault();
     var nSocio = $("#nSocio");
     var nombre = $("#nombre");
     var estatura = $("#estatura");
     var edad = $("#edad");
     var localidad = $("#localidad");

     if(nSocio.val().length >0 && nombre.val().length >0 && estatura.val().length >0 && edad.val().length >0 && localidad.val().length >0){
        $("#tabla").append(
            "<tr class='row'>"+
            "<td class='col-1'>"+nSocio.val()+"</td>"+
            "<td class='col-3'>"+nombre.val()+"</td>"+
            "<td class='col-1'>"+estatura.val()+"</td>"+
            "<td class='col-1'>"+edad.val()+"</td>"+
            "<td class='col-2'>"+localidad.val()+"</td>"+
            "<td class='col-'>"+'<button type="button" class="btn btn-primary modificar">Modificar</button>'+"</td>"+
            "<td class='col-'>"+'<button type="button" class="btn btn-primary eliminar" >Eliminar</button>'+"</td>"+
            "</tr>");

            nSocio.val("") ;
            nombre.val("") ;
            estatura.val("") ;
            edad.val("") ;
            localidad.val("") ;
        }
    }); 
};

function borrar(){
    $("#tabla").on("click", ".eliminar", function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
};

function modificar(){
    $("#tabla").on("click",".modificar",function(e){
        e.preventDefault();
        var fila = $(this).closest("tr");
        var nSocio = fila.children("td:nth-child(1)");
        var nSocioa = nSocio.html();
        var nombre = fila.children("td:nth-child(2)");
        var nombrea = nombre.html();
        var estatura = fila.children("td:nth-child(3)");
        var estaturaa = estatura.html();
        var edad = fila.children("td:nth-child(4)");
        var edada = edad.html();
        var localidad = fila.children("td:nth-child(5)");
        var localidada = localidad.html();
        var botonm = fila.children("td:nth-child(6)");

        nSocio.html('<input class="form-control" id="nSocio" name="nSocio" value="'+nSocioa+'">');
        nombre.html('<input class="form-control" id="nombre" name="nombre" value="'+nombrea+'">');
        estatura.html('<input class="form-control" id="estatura" name="estatura" value="'+estaturaa+'">');
        edad.html('<input class="form-control" id="edad" name="edad" value="'+edada+'">');
        localidad.html('<input class="form-control" id="localidad" name="localidad" value="'+localidada+'">');
        botonm.html('<button type="button" class="btn btn-primary guardar">Guardar</button>')
    });
};

function guardar(){
    $("#tabla").on("click",".guardar",function(e){
        e.preventDefault();
        var fila = $(this).closest("tr");
        var nSocio = fila.children("td:nth-child(1)");
        var nSocioa = nSocio.children().val();
        var nombre = fila.children("td:nth-child(2)");
        var nombrea = nombre.children().val();
        var estatura = fila.children("td:nth-child(3)");
        var estaturaa = estatura.children().val();
        var edad = fila.children("td:nth-child(4)");
        var edada = edad.children().val();
        var localidad = fila.children("td:nth-child(5)");
        var localidada = localidad.children().val();
        var botonm = fila.children("td:nth-child(6)");

        nSocio.html(nSocioa);
        nombre.html(nombrea);
        estatura.html(estaturaa);
        edad.html(edada);
        localidad.html(localidada);
        botonm.html('<button type="button" class="btn btn-primary modificar">Modificar</button>')
    });
};