var boton= document.getElementById('enviar');
var lista=document.getElementById('lista');
var data=[];
var valor='';
var show=0;
var fecha="";
boton.addEventListener("click", validar);
boton.addEventListener("click", enviar);

function validar(){
    if(document.getElementById('cod').value ===''){
        document.getElementById('codalerta').classList.remove('invisible' );
        show=1;
    
    }
    if(document.getElementById('nombre').value ===''){
        document.getElementById('nombrealerta').classList.remove('invisible' );
        show=1;
    
    }
    if(document.getElementById('type').value ==='Seleccione el tipo de Proyecto'){
        document.getElementById('typealerta').classList.remove('invisible' );
        show=1;
    
    }

    if(document.getElementById('type').value ==='Seleccione el tipo de Proyecto'){
        show=1;
    }

    if(document.getElementById('fecini').value ===''){
        document.getElementById('fecinialerta').classList.remove('invisible' );
        show=1;
    
    }
    if(document.getElementById('fecini').value !=''){
        document.getElementById('fecinialerta').classList.add('invisible' );
    }
    if(document.getElementById('fecfin').value ===''){
        document.getElementById('fecfinalerta').classList.remove('invisible' );
        show=1;
    
    }
    if(document.getElementById('fecfin').value !=''){
        document.getElementById('fecfinalerta').classList.add('invisible' );
    }
    if(document.getElementById('responsable').value ===''){
        document.getElementById('responsablealerta').classList.remove('invisible' );
        show=1;
    
    }



    if(document.getElementById('presupuesto').value === 0){
        document.getElementById('presupuestoalerta').classList.remove('invisible' );
        show=1;
    
    }

    if(document.getElementById('presupuesto').value < 10000000 && document.getElementById('presupuesto').value != 0 || document.getElementById('presupuesto').value >50000000 && document.getElementById('presupuesto').value != 0){
        document.getElementById('rangoalerta').classList.remove('invisible' );
        show=1;
    
    }

    if(document.getElementById('estudiante').checked === false && document.getElementById('profesor').checked === false){
        document.getElementById('personaalerta').classList.remove('invisible');
        show=1;
      
      }

      if(document.getElementById('departamento').value ==='Seleccione un Departamento'){
        document.getElementById('departamentoalerta').classList.remove('invisible' );
        
        show=1;
      }

      if(document.getElementById('departamento').value !='Seleccione un Departamento'){
        document.getElementById('departamentoalerta').classList.add('invisible' );
      }
      

    if(document.getElementById('semestre').value ==='Seleccione un Semestre'){
        document.getElementById('semestrealerta').classList.remove('invisible' );
        
        show=1;
    
    }

    if(document.getElementById('semestre').value !='Seleccione un Semestre'){
        document.getElementById('semestrealerta').classList.add('invisible' );

    }
   
document.getElementById('cod').addEventListener("focusin", () => document.getElementById('codalerta').classList.add('invisible') );
document.getElementById('nombre').addEventListener("focusin", () => document.getElementById('nombrealerta').classList.add('invisible') );
document.getElementById('type').addEventListener("focusin", () => document.getElementById('typealerta').classList.add('invisible') ); 
/* document.getElementById('fenici').addEventListener("focusin", () => document.getElementById('fenicialerta').classList.add('invisible') );
document.getElementById('fecfin').addEventListener("focusin", () => document.getElementById('fecfinealerta').classList.add('invisible') ); */ 
document.getElementById('responsable').addEventListener("focusin", () => document.getElementById('responsablealerta').classList.add('invisible') );
document.getElementById('presupuesto').addEventListener("focusin", () => document.getElementById('presupuestoalerta').classList.add('invisible') );
/* document.getElementById('rango').addEventListener("focusin", () => document.getElementById('rangoalerta').classList.add('invisible') ); */
document.getElementById('semestre').addEventListener("focusin", () => document.getElementById('semestrealerta').classList.add('invisible') );

}

function agregar(){
var Code= document.getElementById('cod').value;
var Nombre= document.getElementById('nombre').value;
var Type= document.getElementById('type').value;
var Fechaini = document.getElementById('fecini').value;
var Fechafin = document.getElementById('fecfin').value; 
var Responsable = document.getElementById('responsable').value;
var Presupuesto = parseFloat(document.getElementById('presupuesto').
value);
var Departamento= document.getElementById('departamento').value;
var Semestre = document.getElementById('semestre').value;
var persona='';
if(document.getElementById('estudiante').checked){
    persona="Estudiante";
}
if(document.getElementById('profesor').checked){
    persona="Profesor";
}

if(document.getElementById('semestre').classList.contains('invisible')){
    Semestre='';

}

    
    data.push(


        {
            "cod":Code,
            "nom":Nombre,
            "tipo":Type,
            "fstart":Fechaini,
            "fend":Fechafin,
            "Responsable":Responsable,
            "presupuesto":Presupuesto,
            "persona":persona,
            "semestre":Semestre,
            "departamento":Departamento
        }
   
    
    );
  valor = Code;
console.log(valor);
    var fila='<tr id = '+ Code +'> <th scope="row" class="px-3 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">'+Code +' </th><td class="px-3 py-2">'+Nombre+'</td><td class="px-3 py-2">'+Responsable+'</td><td class="px-3 py-2">'+Fechaini +'</td><td class="px-3 py-2">'+Fechafin+'</td><td class="px-3 py-2">10</td> <td class="px-0 py-0 block">  <button type="button" onclick="update(valor)" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg></button><button type="button" onclick="borrar(valor)" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button> <a onclick="modal(valor)" type="button" href="#miModal" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg></a></tr>';
    
  
      /* agregar fila */
    $("#lista").append(fila);
    $("#nombre").val('');
    $("#cod").val('');
    $("#type").val('');
    $("#fecini").val('');
    $("#fecfin").val('');
    $("#responsable").val('');
    $("#presupuesto").val('');
    $("#semestre").val('');
    $("#departamento").val('');
    $("#cod").focus();
    document.getElementById('profesor').checked = false;
    document.getElementById('estudiante').checked = false;
}

function enviar(){
    if(show ===0){
        agregar();
    }

    show=0;
}

function borrar(index){
    for (i in data) { 
        if(data[i].cod === index){
            data.splice(i , 1)
        }    
    
}
document.getElementById(valor).remove();
}

function update(index){
    for (i in data) { 
        if(data[i].cod === index){
            $("#nombre").val( data[i].nom);
            $("#cod").val(data[i].cod);
             $("#type").val(data[i].tipo);
            $("#fecini").val(data[i].fstart);
            $("#fecfin").val(data[i].fend);
            $("#responsable").val(data[i].Responsable);
            $("#presupuesto").val(data[i].presupuesto);
            $("#semestre").val(data[i].semestre);
            $("#cod").focus(); 
            if(data[i].persona==='Estudiante'){
             document.getElementById('estudiante').checked = true;
            }
            if(data[i].persona==='Profesor'){
                document.getElementById('profesor').checked = true;
               }
        }    
}
borrar(index);
}

function seleccion(){
    if(document.getElementById('estudiante').checked === true){
        if(document.getElementById('option').classList.contains('hidden')===true){
            document.getElementById('option').classList.remove('hidden');
        }
        if(document.getElementById('option2').classList.contains('hidden')===false){
            document.getElementById('option2').classList.add('hidden');
        }

        
      }

      if(document.getElementById('profesor').checked === true){
        if(document.getElementById('option2').classList.contains('hidden')===true){
            document.getElementById('option2').classList.remove('hidden');
        }
        if(document.getElementById('option').classList.contains('hidden')===false){
            document.getElementById('option').classList.add('hidden');
        }
      }
      if(document.getElementById('estudiante').checked === true || document.getElementById('profesor').checked === true){
        if(document.getElementById('personaalerta').classList.contains('hidden')){
            console.log('que inda perros');
        }else{
            document.getElementById('personaalerta').classList.add('hidden');
        }

      }

      
}
function modal(index){
    for (i in data) { 
        if(data[i].cod === index){
            console.log('vamos bien');
            document.getElementById('input').innerHTML = " "+data[i].cod ;
            document.getElementById('input2').innerHTML = " "+data[i].nom ;
            document.getElementById('input3').innerHTML = " "+data[i].tipo ;
            document.getElementById('input4').innerHTML = " "+data[i].fstart ;
            document.getElementById('input5').innerHTML = " "+data[i].fend;
            document.getElementById('input6').innerHTML = " "+data[i].Responsable ;
            document.getElementById('input7').innerHTML = " "+data[i].presupuesto ;
            document.getElementById('input8').innerHTML = " "+data[i].persona;
            document.getElementById('input9').innerHTML = " "+data[i].semestre ;
            
        }    
    
}
}


