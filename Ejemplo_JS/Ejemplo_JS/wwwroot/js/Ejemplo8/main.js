class Ejemplo8Blazor
{
    constructor(dotnetHelper, divId)
    {
        this.container = document.getElementById(divId);
        this.dotnetHelper = dotnetHelper;

        this.editor = new TextareaManager(divId, (nuevoTexto) => this.notificar(nuevoTexto));
    }

    notificar(nuevoTexto)
    {
        try
        {
            if (this.dotnetHelper)
                this.dotnetHelper.invokeMethodAsync("OnTextChange", nuevoTexto);
            else
                console.log('notificar: dotnetHelper es null');
        }
        catch (error)
        {
            console.log(error);
        }
    }
}

export function initilizeEjemplo8Blazor(dotnetHelper, idDiv)
{        
    try
    {
        let element = document.getElementById(idDiv);    

        if (!element.editor )
            element.editor = new Ejemplo8Blazor(dotnetHelper, idDiv);

    }
    catch (error)
    {
        console.log(error)
    }
}

