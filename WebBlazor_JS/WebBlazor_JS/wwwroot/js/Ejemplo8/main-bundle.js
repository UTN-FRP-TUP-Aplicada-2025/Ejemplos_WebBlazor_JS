

class TextareaManager
{
    constructor(divId, onTextChange)
    {
        this.container = document.getElementById(divId);

        if (!this.container) {
            throw new Error(`No se encontr� un div con id: ${divId}`);
        }

        this.textarea = document.createElement("textarea");
        this.textarea.rows = 5;
        this.textarea.cols = 40;

        // Evento de cambio de texto (en tiempo real con "input")
        this.textarea.addEventListener("input", (e) =>
        {
            if (typeof onTextChange === "function")
            {
                onTextChange(e.target.value);
            }
        });

        this.container.appendChild(this.textarea);
    }

    // M�todo para obtener el valor actual
    getValue() {
        return this.textarea.value;
    }

    // M�todo para setear un valor
    setValue(text) {
        this.textarea.value = text;
    }
}
