class Ejemplo8Blazor
{
    constructor(dotnetHelper, divId)
    {
        this.container = document.getElementById(divId);
        this.dotnetHelper = dotnetHelper;

        this.editor = new TextareaManager(divId, (nuevoTexto) => this.textChange(nuevoTexto));
    }

    textChange(nuevoTexto)
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

    getText()
    {
        try
        {
            if (this.editor)
                return this.editor.getText();
            else
                console.log('notificar: dotnetHelper es null');
        }
        catch (error)
        {
            console.log(error);
        }
        return '';
    }

    setText(texto)
    {
        try
        {
            if (this.editor)
                this.editor.setValue(texto);
            else
                console.log('notificar: dotnetHelper es null');
        }
        catch (error) {
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

export function getText(idDiv)
{
    try
    {
        let element = document.getElementById(idDiv);

        if (element.editor)
            return element.editor.getText();
    }
    catch (error)
    {
        console.log(error)
    }
    return '';
}

export function setText(idDiv, contain)
{
    try
    {
        let element = document.getElementById(idDiv);

        if (element.editor)
            element.editor.setText(contain);

    }
    catch (error) {
        console.log(error)
    }
}


