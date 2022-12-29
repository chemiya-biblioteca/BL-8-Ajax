//http://localhost/php/pruebasLimpioGIt/conJquery/
//esta carpeta tiene que estar dento de xampapp/htdocs/php


$("#enviar").click(function(){
    var nombre=$("#nombre").val()
    
    var apellidos=$("#apellidos").val()
    
    var ruta="Nombre="+nombre+"&Apel="+apellidos;
    
    $.ajax({
		type: 'POST',
		url: 'archivo.php',
		data: ruta,
		
	})

   .done(function(res){
        $("#respuesta").html(res)
    })

    .fail(function(){
        console.log("fallo")
    })

})