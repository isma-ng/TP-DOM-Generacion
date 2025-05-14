   // Clase Persona
        class Persona {
            constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
                this.nombre = nombre;
                this.edad = edad;
                this.dni = dni;
                this.sexo = sexo;
                this.peso = peso;
                this.altura = altura;
                this.nacimiento = nacimiento;
            }
            
            mostrarGeneracion() {
                let generacion = "";
                let rasgo = "";
                
                if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
                    generacion = "Silent Generation (Los niños de la posguerra)";
                    rasgo = "Austeridad";
                } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
                    generacion = "Baby Boom";
                    rasgo = "Ambición";
                } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
                    generacion = "Generación X";
                    rasgo = "Obsesión por el éxito";
                } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
                    generacion = "Generación Y (Millennials)";
                    rasgo = "Frustración";
                } else if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
                    generacion = "Generación Z";
                    rasgo = "Irreverencia";
                } else {
                    generacion = "Generación no identificada";
                    rasgo = "No se han identificado rasgos";
                }
                
                return `Pertenece a la generación: ${generacion}\nRasgo característico: ${rasgo}`;
            }
            
            esMayorDeEdad() {
                return this.edad >= 18 ? "Sí, es mayor de edad" : "No, es menor de edad";
            }
            
            mostrarDatos() {
                return `Nombre: ${this.nombre}\n` +
                       `Edad: ${this.edad}\n` +
                       `DNI: ${this.dni}\n` +
                       `Sexo: ${this.sexo === 'H' ? 'Hombre' : 'Mujer'}\n` +
                       `Peso: ${this.peso} kg\n` +
                       `Altura: ${this.altura} cm\n` +
                       `Año de nacimiento: ${this.nacimiento}`;
            }
        }
        
        // Variables globales
        let persona;
        
        // Eventos
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('personaForm');
            const actionButtons = document.getElementById('actionButtons');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Obtener valores del formulario
                const nombre = document.getElementById('nombre').value;
                const edad = parseInt(document.getElementById('edad').value);
                const dni = document.getElementById('dni').value;
                const sexo = document.querySelector('input[name="sexo"]:checked').value;
                const peso = parseFloat(document.getElementById('peso').value);
                const altura = parseInt(document.getElementById('altura').value);
                const nacimiento = parseInt(document.getElementById('nacimiento').value);
                
                // Crear objeto Persona
                persona = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);
                
                // Mostrar botones de acción
                actionButtons.style.display = "flex";
                
                alert("Persona creada exitosamente!");
            });
            
            // Botón Mostrar Generación
            document.getElementById('mostrarGeneracion').addEventListener('click', function() {
                if (persona) {
                    alert(persona.mostrarGeneracion());
                } else {
                    alert("Primero debes crear una persona");
                }
            });
            
            // Botón ¿Mayor de Edad?
            document.getElementById('esMayorDeEdad').addEventListener('click', function() {
                if (persona) {
                    alert(persona.esMayorDeEdad());
                } else {
                    alert("Primero debes crear una persona");
                }
            });
            
            // Botón Mostrar Datos
            document.getElementById('mostrarDatos').addEventListener('click', function() {
                if (persona) {
                    alert(persona.mostrarDatos());
                } else {
                    alert("Primero debes crear una persona");
                }
            });
        });