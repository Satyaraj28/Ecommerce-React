using Microsoft.EntityFrameworkCore;
using FakeStoreApi.Models;

namespace FakeStoreApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Rating> Ratings { get; set; }  // Add Ratings DbSet if necessary
          public DbSet<Category> Categories { get; set; }  // Add this line
    }
}
