//ligar base de Datos en Firebase
var database = firebase.database();
//referencia al nodo users
var usersReference = database.ref("/users")
var usersCollection;
usersReference.on('value',function(snapshot){
	usersCollection = snapshot.val();
	getCollectionData();
})
function getCollectionData() {
	$("#wrapper").empty()
    $.each(usersCollection, function(key, value) {
        console.log(value.name)
        console.log(value.age)
        console.log(value.email)
        console.log(value.phone)
        console.log(value.address)

        $("#wrapper").append(`
            <tr class="wrapper">
                <td id="name">${value.name}</td>
                <td id="age">${value.age}</td>
                <td id="email">${value.email}</td>
                <td id="phone">${value.phone}</td>
                <td id="address">${value.address}</td>
                <td><button id="Edit" class="btn btn-warning" >Editar</button></td>
                <td><button id="del" class="btn btn-danger">Borrar</button></td>
            </tr>
        `)
    });
}

function getUserData(){
    var usersObject={};
	var usersName = $("#users-name").val();
	var usersAge = $("#users-age").val();
	var usersEmail = $("#users-email").val();
    var usersPhone = $("#users-phone").val();
	var usersAddress = $("#users-address").val();
    usersObject.name=usersName;
    usersObject.age=usersAge;
    usersObject.email=usersEmail;
    usersObject.phone=usersPhone;
    usersObject.address=usersAddress;
    console.log(usersObject)
    usersReference.push(usersObject)
}

$("#submit-button").on("click",function(e){
    getUserData();
    alert("Se ha guardado correctamente el usuario")
})

function delUserData(){
    alert("funcionando")
}

$("#del").on("click",function(e){

	delUserData();

})
$("#add").click(function(evento){
    alert( "Este boton tendría que Ocultar y mostrar el Formulario para agregar nuevos usuarios" );
})
// $("#del").click(function(){
//     alert( "Funciona" );
// }