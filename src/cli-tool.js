function ejecutarCLI(rl, callbackSalir) {
  console.log("\n=== CLI DE EJEMPLO ===");
  console.log("Comandos disponibles: hola, tiempo, salir\n");


  const cliHandler = (input) => {
    const comando = input.trim().toLowerCase();

    switch (comando) {
      case "hola":
        console.log(" ¡Hola! ¿Cómo estás?");
        break;
      case "tiempo":
        console.log(` Tiempo activo: ${process.uptime().toFixed(2)} segundos`);
        break;
      case "salir":
        console.log(" Saliendo de la CLI... volviendo al menú");
        rl.removeListener("line", cliHandler);
        callbackSalir(); 
        return;
      default:
        console.log(" Comando no reconocido. Usa: hola, tiempo, salir");
    }
    rl.prompt(); 
  };

  rl.on("line", cliHandler);
  rl.setPrompt("CLI> "); 
  rl.prompt();
}

module.exports = { ejecutarCLI };

