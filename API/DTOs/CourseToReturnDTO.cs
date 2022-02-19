namespace API.DTOs
{
    public class CourseToReturnDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public string Type { get; set; }
        public decimal Rating { get; set; }
    }
}