// Models/Product.cs
namespace FakeStoreApi.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string? Title { get; set; }
public string? Description { get; set; }

public string? Image { get; set; }
public Rating? Rating { get; set; }
public decimal? Price { get; set; }  // Ensure this property exists
  public int? CategoryId { get; set; }  // Add this line
        public Category? Category { get; set; }  // Add this line

    }
}
