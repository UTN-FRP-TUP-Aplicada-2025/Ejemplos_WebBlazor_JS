namespace WebBlazor_JS.Components.Pages.DemosComponent.Maps.Component;
public class CoordenadasGoogle
{
    public double lat { get; set; }
    public double lng { get; set; }

    public override bool Equals(object? obj )
    {
        var other = obj as CoordenadasGoogle;
        return lat==other?.lat && lng==other?.lng;
    }
}