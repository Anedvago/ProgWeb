$(function(){
    añadir();

});

function añadir(){
    $("#añadir").on('click',function(e){
        e.preventDefault();
        var no = $("#nSocio");
        var nom = $("#nombre");
        var est = $("#estatura");
        var edad = $("#edad");
        var loc = $("#localidad");

        $("#tabla").append("<tr>"+
        "<td>"+no.val+"</td>"+
        "<td>"+nom.val+"</td>"+
        "<td>"+est.val+"</td>"+
        "<td>"+edad.val+"</td>"+
        "<td>"+loc.val+"</td>"+
        "<td>"+"<button type='button' class='btn btn-primary'>'Modificar'</button>"+"</td>"+
        "<td>"+"<button type='button' class='btn btn-primary'>'Modificar'</button>"+"</td>"+
        "</tr>");


    });
}