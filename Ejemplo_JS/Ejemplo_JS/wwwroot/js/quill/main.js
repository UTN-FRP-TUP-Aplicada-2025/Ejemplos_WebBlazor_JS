class QuillBlazor
{
    constructor(dotnetHelper, idDiv)
    {
        this.containter = document.getElementById(idDiv);
        this.dotnetHelper = dotnetHelper;

        this.quill = new Quill('#' + idDiv, { theme: 'snow' });

        this.quill.on('text-change', (delta, oldContents, source) => this.textChange(delta, oldContents, source) );
    }

    textChange(delta, oldContents, source)
    {
        console.log('El editor ha cambiado!');
        console.log('Cambios:', delta);
        console.log('Contenido anterior:', oldContents);
        console.log('Fuente del cambio:', source);

        // delta: los cambios realizados
        // oldContents: contenido del editor antes del cambio
        // source: origen del cambio ('user' o 'api')

        try
        {
            if (this.dotnetHelper && source =='user')
                this.dotnetHelper.invokeMethodAsync("OnTextChange", this.quill.root.innerHTML);
            else
                console.log('notificar: dotnetHelper es null');
        }
        catch (error) {
            console.log(error);
        }
    }

    getContents()
    {
        try
        {
            if (this.quill)
                return this.quill.root.innerHTML;
            else
                console.log('notificar: dotnetHelper es null');
        }
        catch (error)
        {
            console.log(error);
        }
        return '';
    }

    setContents(contents)
    {
        try
        {
            if (this.quill)
                this.quill.root.innerHTML = contents;  
            else
                console.log('notificar: dotnetHelper es null');
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function InitializeQuillBlazor(dotnetHelper, idDiv)
{
    try
    {
        let element = document.getElementById(idDiv)
        if (!element.quillBlazor)
        {
            element.quillBlazor = new QuillBlazor(dotnetHelper, idDiv);
        }
    }
    catch (error)
    {
        console.log(error);
    }
}

export function getContents(idDiv)
{
    try
    {
        let element = document.getElementById(idDiv);

        if (element.quillBlazor)
            return element.quillBlazor.getContents();
    }
    catch (error) {
        console.log(error)
    }
    return '';
}

export function setContents(idDiv, contents)
{
    try
    {
        let element = document.getElementById(idDiv);

        if (element.quillBlazor)
            element.quillBlazor.setContents(contents);

    }
    catch (error) {
        console.log(error)
    }
}