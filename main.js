let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let botonReiniciar = document.getElementById('reiniciar');
const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const caracteresEspeciales = '!@#$%^&*()';
const cadenaCaracteres = letrasMayusculas + letrasMinusculas + numeros + caracteresEspeciales;
let contrasena = document.getElementById('contrasena');

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    let password = '';
    

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres debe ser mayor que 8");
    } else {
        alert('Contraseña creada correctamente');
        let mayuscula = letrasMayusculas[Math.floor(Math.random() * letrasMayusculas.length)];
        let minuscula = letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
        let numero = numeros[Math.floor(Math.random() * numeros.length)];
        let especial = caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
        password += mayuscula + minuscula + numero + especial;
        for (let i = password.length; i < numeroDigitado; i++) {
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password += caracterAleatorio;
        }
    
        password = password.split('').sort(() => Math.random() - 0.5).join('');
    }
    contrasena.value = password;

}

function reiniciar() {
    contrasena.value = '';
    cantidad.value = '';
}