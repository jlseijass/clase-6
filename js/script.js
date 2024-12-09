let alumnos = [
    {
      id: 1,
     nombre: "Lucas",
      edad: 17,
    },
    {
    id: 2,
    nombre: "José",
    edad: 36,
    },
     {
      id: 3,
    nombre: "Hernán",
      edad: 32,
    },
     {
   id: 4,
     nombre: "Mariangeles",
       edad: 30,
    },
 {
        id: 5,
      nombre: "Javier",
       edad: 20,
    },
     ];
    
    function mostrarAlumnos(array) {
let mensaje = "";
      array.forEach(el => mensaje += el.id + " - " + el.nombre + "\n");
      return mensaje;
    };
    
     function modificarCondicionDeAlumno(condicion) {
       let listaDeAlumnos = mostrarAlumnos(alumnos);
        const buscarAlumno = parseInt(prompt("Ingrese el id de su alumno: \n\n" + listaDeAlumnos));
    
        const idBuscado = alumnos.findIndex(el => el.id === buscarAlumno);
    
       alumnos[idBuscado].aprobado = condicion;
       if (condicion) {
        alert("Aprobaste al alumno " + alumnos[idBuscado].nombre);
        } else {
                    alert("Desaprobaste al alumno " + alumnos[idBuscado].nombre);
       };
    };
    
     function verCondiciones(condicion){
        const alumnosFiltrados = alumnos.filter(el => el.aprobado === condicion);
    
      let listaDeAlumnos = mostrarAlumnos(alumnosFiltrados);
       if(condicion){
           alert("Estos son tus alumnos aprobados: \n\n" + listaDeAlumnos);
      } else {
            alert("Estos son tus alumnos desaprobados: \n\n" + listaDeAlumnos);
      };
    };
    
    let opcion;
    
    do {
       opcion = parseInt(prompt("Ingrese la opción deseada:\n\n1. Para aprobar alumno.\n2. Para desaprobar alumno.\n3. Para ver aprobados.\n4. Para ver desaprobados\nIngrese 0 para salir"));
    
      switch (opcion) {
        case 0:
          alert("Gracias vuelva pronto!");
         break;
    case 1:
       modificarCondicionDeAlumno(true);
      break;
    case 2:
        modificarCondicionDeAlumno(false);
        break;
     case 3:
    verCondiciones(true);
      break;
    case 4:
      verCondiciones(false);
      break;
    default:
     alert("Opción inválida");
     break;
    }
    
    } while (opcion !== 0);