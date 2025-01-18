using Microsoft.EntityFrameworkCore;
using FakeStoreApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Enable CORS globally
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
        policy.AllowAnyOrigin()   // Allow all origins (You can replace this with a specific origin in production)
              .AllowAnyHeader()
              .AllowAnyMethod());
});

// Add controllers
builder.Services.AddControllers();

// Add Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Use CORS middleware
app.UseCors("AllowAllOrigins");  // Enable CORS for all routes

// Enable Swagger UI
app.UseSwagger();
app.UseSwaggerUI();

// Other middlewares
app.UseHttpsRedirection();
app.UseAuthorization();

// Map controllers
app.MapControllers();

// Run the app
app.Run();
