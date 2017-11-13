//añadir una lista
    var container = document.createElement("div");
        container.setAttribute("id","container");
    var label = document.createElement("label");
        label.setAttribute("id","label");
    var anadirTarjeta = document.createTextNode("Añadir una lista...");
    

//apendizar elementos
    label.appendChild(anadirTarjeta);
    container.appendChild(label);
    document.body.appendChild(container);



//crear un div, un input, un boton y un icono 

    var containerTwo = document.createElement("div");
        containerTwo.setAttribute("id", "containerTwo");

    var input = document.createElement("input");
        input.setAttribute("id", "inputA");
        input.setAttribute("placeholder", "Añadir lista...");

    var guardarBtn = document.createElement("button");
        guardarBtn.setAttribute("id", "guardarBtn");

    var icon = document.createElement("k");
        icon.classList.add('fa','fa-times');

    var anadirTarjeta = document.createTextNode("Guardar"); //añadir tarjeta

//apendizar elementos

    label.addEventListener("click", function() {
    label.style.display = "none"; //para que no venga con el estilo por defecto
        
        guardarBtn.appendChild(anadirTarjeta);
        containerTwo.appendChild(icon);
        containerTwo.appendChild(guardarBtn);
        containerTwo.appendChild(input);
        container.appendChild(containerTwo);  
        document.body.appendChild(container); 
    })

//para cerrar con el icono "x"

//para cerrar con el icono "x"
        icon.addEventListener("click",function() { 
            label.style.display = "inline-block";
            document.getElementById("inputA").value = "";
            container.removeChild(containerTwo);
            
})

//que el texto del input (lo que escriba) se vaya hacia abajo. 
//le tengo que dar la funcioncionalidad a boton

    guardarBtn.addEventListener("click", function(){ //cada ves que haga click va a pasar algo
//tengo que guardar el valor del input
        var list = document.getElementById("inputA").value;
        document.getElementById("inputA").value = "";

        var cardContainer = document.createElement("div");
            cardContainer.setAttribute("id", "cardContainer");

        var card = document.createElement("label");
            card.setAttribute("id","labelCard");

        var parrafo = document.createElement("p");
            parrafo.setAttribute("id","parrafo");
        var textNuevo = document.createTextNode(list);

        var iconMenu = document.createElement("k");
            iconMenu.classList.add("fa","fa-ellipsis-h");

//para añadir otra tarjeta (url)
        var add = document.createElement("a");
            add.setAttribute("href", "#"); 
            add.setAttribute("id","addCard");

        var textAdd = document.createTextNode("Añadir tarjeta...");

//apendizar elementos
            parrafo.appendChild(textNuevo);
            card.appendChild(parrafo);
            cardContainer.appendChild(iconMenu);
            cardContainer.appendChild(card);
            add.appendChild(textAdd);
            cardContainer.appendChild(add);
            container.appendChild(cardContainer);
            document.body.appendChild(cardContainer);


//crear textarea cuando presionamos -> "añadir tarjeta"
    add.addEventListener("click",function() {
    //cardContainer.removeChild(add);

       add.style.display = "none"; //para que desaparesca al precionar "añadir tarjeta"

        var textarea = document.createElement("textarea");
            textarea.setAttribute("id","textarea");
             
        var guardarBtnTex = document.createElement("button"); 
            guardarBtnTex.setAttribute("id","guardarBtnTex");   

        var anadirTarjetaTwo = document.createTextNode("Añadir");

        var iconTextarea = document.createElement("k");
            iconTextarea.classList.add('fa','fa-times');

//apendizar elementos
            cardContainer.appendChild(iconTextarea);
            guardarBtnTex.appendChild(anadirTarjetaTwo);
            cardContainer.appendChild(guardarBtnTex);
            cardContainer.appendChild(textarea);
            container.appendChild(cardContainer);
            document.body.appendChild(cardContainer);


//para cerrar con el icono "x"
    iconTextarea.addEventListener("click",function() {
        cardContainer.style.display = "none"; // para ocultar elementos sin eliminarlos
})

//Dar funcionalidad al boton guardar textarea
     guardarBtnTex.addEventListener("click",function() {
//tengo que guardar el valor del textarea
        var listTextarea = document.getElementById("textarea").value;
        document.getElementById("textarea").value = "";

        
        var cardTextarea = document.createElement("label");
            cardTextarea.setAttribute("id","labelCardTextarea");

        var parrafoTextarea = document.createElement("p");
            parrafoTextarea.setAttribute("id","parrafoTextarea");

        var textareaNuevo = document.createTextNode(listTextarea);

//apendizar elemento

        parrafoTextarea.appendChild(textareaNuevo);
        cardTextarea.appendChild(parrafoTextarea);
        cardContainer.appendChild(cardTextarea);       

         }) // cierre guardarBtnText.addEventListener("click", function(){
    }) // cierre guardarBtn.addEventListener("click", function(){
}) // cierre add.addEventListener("click",function() {


