

export function initilize(dotnetHelper)
{        
    setTimeout(() => { dotnetHelper.invokeMethodAsync("OnMensaje", "Mapa cargado correctamente"); }, 2000);
}

