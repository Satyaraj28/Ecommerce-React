using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FakeStoreApi.Data;
using FakeStoreApi.Models;

namespace FakeStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly DataContext _context;

        public ProductsController(DataContext context)
        {
            _context = context;
        }

        // GET api/products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
             var products = await _context.Products.Include(p => p.Rating).Include(p =>p.Category).ToListAsync(); // Ensure rating is included
            return Ok(products); // Return the list of products
        }
 // GET: api/products/category/{categoryId}
        [HttpGet("category/{categoryId}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsByCategory(int categoryId)
        {
            var products = await _context.Products
                .Where(p => p.CategoryId == categoryId)
                .Include(p => p.Category)
                .ToListAsync();

            if (products == null || products.Count == 0)
            {
                return NotFound();
            }

            return Ok(products);
        }

// GET: api/products/category/
[HttpGet("category/")]
public async Task<ActionResult<IEnumerable<string>>> GetCategories()
{
    var categories = await _context.Products
        .Select(p => p.Category.Name)  // Get only the category name
        .Distinct()  // Get distinct category names
        .ToListAsync();

    if (categories == null || categories.Count == 0)
    {
        return NotFound();
    }

    return Ok(categories);
}
        // GET api/products/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.Include(p => p.Rating).FirstOrDefaultAsync(p => p.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // POST api/products
        [HttpPost]
        [HttpPost]
public async Task<IActionResult> PostProduct(Product product)
{
    // Ensure the category ID is not being set manually
    var category = await _context.Categories
        .FirstOrDefaultAsync(c => c.Name == product.Category.Name);

    if (category == null)
    {
        // Handle category creation if needed
        category = new Category { Name = product.Category.Name };
        _context.Categories.Add(category);
        await _context.SaveChangesAsync();
    }

    product.Category = category;  // Assign the category from the database
    _context.Products.Add(product);
    await _context.SaveChangesAsync();
    return CreatedAtAction("GetProduct", new { id = product.Id }, product);
}


        // PUT api/products/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE api/products/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
