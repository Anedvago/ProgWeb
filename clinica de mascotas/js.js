$(function(){
    agregar();
    agregarMv();
    agregarM();
    sagMasc();
    sInicio();
    sList();
    editar();
    guardare();
    editarM();
    guardareM();
    $("#contenido,#contenido2,#am,#lp,#tabla2,#sf,#lsp").hide();

});

function guardareM(){
    $("#tabla2").on("click",".guardar",function(e){
        e.preventDefault();
        var nombre = $("#nombre");
        var tipo = $("#tipo")
        var fn = $("#fn");
        var fila = $(this).closest("tr");
        var nombre = fila.children("td:nth-child(1)");
        var tipo = fila.children("td:nth-child(2)");
        var fn = fila.children("td:nth-child(3)");
        var boton = fila.children("td:nth-child(4)");
        var nombrea = nombre.children().val();
        var tipoa = tipo.children().val();
        var fna = fn.children().val();
        nombre.html(nombrea);
        tipo.html(tipoa);
        fn.html(fna);
        boton.html('<a href="#" class="editM">'+'editar'+'</a>');
       }); 
}

function editarM(){
    $("#tabla2").on("click",".editM",function(e){
        console.log("entra");
        e.preventDefault();
        var fila = $(this).closest("tr");
        var nombre = fila.children("td:nth-child(1)");
        var tipo = fila.children("td:nth-child(2)");
        var fn = fila.children("td:nth-child(3)");
        var boton = fila.children("td:nth-child(4)");
        var nombrea = nombre.html();
        var tipoa = tipo.html();
        var fna = fn.html();

        nombre.html('<input class="form-control" id="nombre" value="'+nombrea+'">');
        tipo.html('<input class="form-control" id="tipo"  value="'+tipoa+'">');
        fn.html('<input class="form-control" id="fn"  value="'+fna+'">');
        boton.html('<a href="#" class="guardar">'+'guardar'+'</a>');
        
    });
}

function guardare(){
    $("#editar").on("click",function(e){
        e.preventDefault();
        $("#sf").hide();
        var nombre = $("#nombre");
        var apellido = $("#apellido")
        var direccion = $("#direccion");
        var telefono = $("#telefono");
           $("#tabla").append(
               "<tr class='row'>"+
               "<td class='col'>"+nombre.val()+"</td>"+
               "<td class='col'>"+apellido.val()+"</td>"+
               "<td class='col'>"+direccion.val()+"</td>"+
               "<td class='col'>"+telefono.val()+"</td>"+
               "<td class='col'>"+'<a href="#" class="detalles">'+'Ver Detalles'+'</a>'+'</td>'+'</tr>');
               nombre.val("");
        apellido.val("");
        direccion.val("");
        telefono.val("");
       }); 
}
function editar(){
    $("#tabla").on("click",".detalles",function(e){
        e.preventDefault
        $(".bby").show();
        var fila = $(this).closest("tr");
        $("#nombre").val(fila.children("td:nth-child(1)").html());
        $("#apellido").val(fila.children("td:nth-child(2)").html());
        $("#direccion").val(fila.children("td:nth-child(3)").html());
        $("#telefono").val(fila.children("td:nth-child(4)").html());
        fila.remove();
        
    })
}

function sList(){
    $("#bl").on("click",function(e){
        e.preventDefault();
        var i,i2 = 0;
        $("#am,#banner,#sf,#agregar,.bby,#aqtab,#tabla3").hide();
        $("#contenido,#lsp,#lp,#tabla,#tabla2,#editar").show();
        $("#agp").html("Ver/Editar detalles del propietario");

        $("#aqtab").html(
            '<table class="table" id ="tabla2">'+
                '<thead class="thead-dark">'+
                    '<tr class="row">'+
                        '<th class="col">Nombre</th>'+
                        '<th class="col">Tipo</th>'+
                        '<th class="col">F/N</th>'+
                        '<th class="col"> </th>'+
                    '</tr>'+
                '</thead>'+
            '</table>'
        );

        $("#tabla tr").each(function(i){
            $(this).children("td").each(function(i2){
                switch(i2){
                    case 4:
                        $(this).html('<a href="#" class="detalles">'+'Ver Detalles'+'</a>');
                    break;
                }
            })
        })
        
        
        
        
    })
}
function sInicio(){
    $("#bi").on("click",function(e){
        $("#contenido,#contenido2,#am,#lp,#tabla2,#sf,#lsp").hide();
        $("#banner").show();
    })
}
function sagMasc(){
    $("#bam").on("click",function(e){
        $("#banner,#sf,#tabla2,#contenido2,#lsp,#editar").hide();
        $("#contenido,#am,#lp,#agregar").show();
        $("#agp").html("Agregar Propietario");
        $("#tabla tr").each(function(i){
            var fila;
            $(this).children("td").each(function(i2){
                switch(i2){
                    case 4:
                        $(this).html('<a href="#" class="agmasc">'+'Agregar Mascota'+'</a>');
                    break;
                }
            })
        })
    })
}



function agregar(){
    $("#agregar").on("click",function(e){
     e.preventDefault();
     $("#sf,#tabla2").hide();
     var nombre = $("#nombre");
     var apellido = $("#apellido")
     var direccion = $("#direccion");
     var telefono = $("#telefono");
        $("#tabla").append(
            "<tr class='row'>"+
            "<td class='col'>"+nombre.val()+"</td>"+
            "<td class='col'>"+apellido.val()+"</td>"+
            "<td class='col'>"+direccion.val()+"</td>"+
            "<td class='col'>"+telefono.val()+"</td>"+
            "<td class='col'>"+'<a href="#" class="agmasc">'+"Agregar mascota"+'</a>'+'</td>'+'</tr>');
        nombre.val("");
        apellido.val("");
        direccion.val("");
        telefono.val("");
    }); 
};

function agregarMv(){
    $("#tabla").on("click",".agmasc",function(e){
        e.preventDefault();
        $("#tabla3,#aqtab").show();
        var fila = $(this).closest("tr");
        var nombre = fila.children("td:nth-child(1)")
        var apellido = fila.children("td:nth-child(2)")
        $("#sf").show();
        $("#propietario").html("<h6>"+"Propietario :"+nombre.html()+" "+apellido.html()+"</h6>");
        $("#aqtab").html(
            '<table class="table" id="tabla3">'+
                '<thead class="thead-dark">'+
                    '<tr class="row">'+
                        '<th class="col">Nombre</th>'+
                        '<th class="col">Tipo</th>'+
                        '<th class="col">F/N</th>'+
                    '</tr>'+
                '</thead>'+
            '</table>'
        );
     
    }); 
};

function agregarM(){
    $("#sf").on("click","#agregarM",function(e){
     e.preventDefault();
     var nombre = $("#nombreM");
     var tipo = $("#tipoM")
     var fn = $("#fn");
     
        $("#tabla3").append(
            "<tr class='row'>"+
            "<td class='col'>"+nombre.val()+"</td>"+
            "<td class='col'>"+tipo.val()+"</td>"+
            "<td class='col'>"+fn.val()+"</td>"+
            "</tr>");
     nombre.val(""); 
     fn.val(""); 
    }); 
};

