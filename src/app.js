const readline = require("readline");
const { ejecutarCLI } = require("./cli-tool");
const { registrarEvento } = require("./registro-sistema");
const { monitorearSistema } = require("./system-monitor");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log("\n=== MENÚ PRINCIPAL ===");
  console.log("1. Ejecutar herramienta CLI");
  console.log("2. Registrar evento en el sistema");
  console.log("3. Monitorear el sistema");
  console.log("4. Salir");

  rl.question("Elige una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        ejecutarCLI(rl, mostrarMenu);
        break;
      case "2":
        registrarEvento("Evento desde el menú principal");
        mostrarMenu();
        break;
      case "3":
        monitorearSistema();
        mostrarMenu();
        break;
      case "4":
        console.log(" Saliendo del sistema...");
        rl.close();
        return;
      default:
        console.log(" Opción no válida. Intenta de nuevo.");
        mostrarMenu();
    }
  });
}

mostrarMenu();
