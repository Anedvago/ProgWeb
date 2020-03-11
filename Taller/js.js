$(function(){
    agregar();
    agregarMv();
    agregarM();
    listar();
    borrar();
    modificar();
    guardar();
    agregarV();

});

function listar(){
    $("#listar").on("click",function(e){
        e.preventDefault();
        var nFilas = $("#tabla tr").length;
        console.log(nFilas);
    });
}

function agregar(){
    $("#agregar").on("click",function(e){
     e.preventDefault();
     var nombre = $("#nombre");
     var apellido = $("#apellido")
     var direccion = $("#direccion");
     var telefono = $("#telefono");

     if(nombre.val().length >0 && apellido.val().length >0 && direccion.val().length >0 && telefono.val().length >0 ){
        $("#tabla").append(
            "<tr class='row'>"+
            "<td class='col'>"+nombre.val()+"</td>"+
            "<td class='col'>"+apellido.val()+"</td>"+
            "<td class='col'>"+direccion.val()+"</td>"+
            "<td class='col'>"+telefono.val()+"</td>"+
            "<td class='col'>"+'<a href="#" class="btn btn-primary agmasc">Modificar</a>'+"</td>"+
            "</tr>");
        }
    }); 
};

function agregarMv(){
    $("#tabla").on("click",".agmasc",function(e){
     e.preventDefault();
     $("#sf").html("<div class = 'row'>"+"<h3>"+"Agregar Mascota"+"</h3>"+"</div>"+
            '<div class="form-group row">'+
                '<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Nombre</label>'+
                '<div class="col-sm-10">'+
                    '<input type="text" class="form-control form-control-sm" id="nombreM" >'+
                "</div>"+
            "</div>"+
            '<div class="form-group row">'+
                '<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Tipo</label>'+
                '<div class="col-sm-10">'+
                    '<select class="form-control" id="tipoM">'+
                    '<option value = "perro">Perro</option>'+
                    '<option value = "gato">Gato</option>'+
                  '</select>'+
                "</div>"+
            "</div>"+
            '<div class="form-group row">'+
                '<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">F/N</label>'+
                '<div class="col-sm-10">'+
                    '<input type="date" class="form-control form-control-sm" id="fn" >'+
                "</div>"+
            "</div>"+
            '<div class="form-group row">'+
                '<button type="submit" class="btn btn-primary mb-2" id="agregarM">Agregar</button>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col">'+
                    '<table class="table" id="tabla2">'+
                         '<thead class="thead-dark">'+
                         '<tr class="row">'+
                             '<th class="col">Nombre</th>'+
                             '<th class="col">Tipo</th>'+
                             '<th class="col">F/N</th>'+
                             '</tr>'+
                         '</thead>'+
                         '<tbody>'+
                         '</tbody>'+
                        '</table>'+
                 '</div>'+
             '</div>'
        );
    }); 
};

function agregarM(){
    $("#sf").on("click","#agregarM",function(e){
     e.preventDefault();
     console.log("hola");
     var nombre = $("#nombreM");
     var tipo = $("#tipoM")
     var fn = $("#fn");
     
        $("#tabla2").append(
            "<tr class='row'>"+
            "<td class='col'>"+nombre.val()+"</td>"+
            "<td class='col'>"+tipo.val()+"</td>"+
            "<td class='col'>"+fn.val()+"</td>"+
            "</tr>");


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

function agregarV(){
    $("#agregarV").on("click",function(e){
        e.preventDefault();
        $("#tabla").append(
            "<tr class = 'row'>"
            +"<td class = 'col-1'>"+"123"+"</td>"
            +"<td class = 'col-3'>"+"juan Perez"+"</td>"
            +"<td class = 'col-1'>"+"171"+"</td>"
            +"<td class = 'col-1'>"+"19"+"</td>"
            +"<td class = 'col-2'>"+"Colombia"+"</td>"
            +"<td class = 'col-'>"+'<button type="button" class="btn btn-primary modificar">Modificar</button>'+"</td>"
            +"<td class = 'col-'>"+'<button type="button" class="btn btn-primary eliminar" >Eliminar</button>'+"</td>"
            +"</tr>"
            +"<tr class = 'row'>"
            +"<td class = 'col-1'>"+"158"+"</td>"
            +"<td class = 'col-3'>"+"Pedro Martinez"+"</td>"
            +"<td class = 'col-1'>"+"195"+"</td>"
            +"<td class = 'col-1'>"+"33"+"</td>"
            +"<td class = 'col-2'>"+"Venezuela"+"</td>"
            +"<td class = 'col-'>"+'<button type="button" class="btn btn-primary modificar">Modificar</button>'+"</td>"
            +"<td class = 'col-'>"+'<button type="button" class="btn btn-primary eliminar" >Eliminar</button>'+"</td>"
            +"</tr>"
        );
    });
}