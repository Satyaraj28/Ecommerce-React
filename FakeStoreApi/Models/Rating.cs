namespace FakeStoreApi.Models
{
    public class Rating
    {
        public int RatingId { get; set; }  // Define a primary key for the Rating entity
        public double Rate { get; set; }
        public int Count { get; set; }
    }
}
