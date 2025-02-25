var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var produtos = new List<object>
{
    new { Id = 1, Nome = "Notebook", Preco = 5000.00 },
    new { Id = 2, Nome = "Mouse Gamer", Preco = 250.00 },
    new { Id = 3, Nome = "Teclado Mecânico", Preco = 350.00 }
};

app.MapGet("/produtos", () => produtos);

app.Run();