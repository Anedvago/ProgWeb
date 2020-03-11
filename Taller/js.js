$(function(){
    agregar();
    agregarMv();
    agregarM();
    sagMasc();
    sInicio();
    sList();
    $("#contenido,#contenido2,#am,#lp,#tabla2,#sf,#lsp").hide();

});
function sList(){
    $("#bl").on("click",function(e){
        var nFilas = $("#tabla tr").length;
        var i,i2 = 0;
        $("#am,#tabla2,#sf,#banner").hide();
        $("#contenido,#lsp,#lp,#tabla").show();

        $("#tabla tr").each(function(i){
            var fila;
            $(this).children("td").each(function(i2){
                switch(i2){
                    case 4:
                        $(this).html('<a href="#" class="Detalles">'+'Ver Detalles'+'</a>');
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
        $("#banner,#sf,#tabla2,#contenido2,#lsp").hide();
        $("#contenido,#am,#lp").show();
        $("#tabla tr").each(function(i){
            var fila;
            $(this).children("td").each(function(i2){
                switch(i2){
                    case 4:
                        $(this).html('<a href="#" class="Detalles">'+'Agregar Mascota'+'</a>');
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
    }); 
};

function agregarMv(){
    $("#tabla").on("click",".agmasc",function(e){
        e.preventDefault();
        var fila = $(this).closest("tr");
        var nombre = fila.children("td:nth-child(1)")
        var apellido = fila.children("td:nth-child(2)")
        $("#sf").show();
        $("#propietario").html("<h6>"+"Propietario :"+nombre.html()+" "+apellido.html()+"</h6>")
        $("#aqtab").html(
            '<table class="table" id="tabla2">'+
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

