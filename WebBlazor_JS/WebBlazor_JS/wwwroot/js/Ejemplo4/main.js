

export function llamarMetodoCSharp()
{
    let NombreDelAssembly = 'Ejemplo_JS'; // nombre del proyecto
    DotNet.invokeMethodAsync(NombreDelAssembly,
              'MostrarMensajeDesdeJS',
              'Hola desde JS')
              .then(_ => console.log("M�todo C# invocado desde JS"));
}

