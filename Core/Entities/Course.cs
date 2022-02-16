namespace Core.Entities
{
    public class Course : BaseEntity
    {
                public string Name { get; set; }
                public string Description { get; set; }
                public string ImageUrl { get; set; }
                public decimal Price { get; set; }
                public CourseType Type { get; set; }
                public int TypeId { get; set; }
                public CourseRating Rating { get; set; }
                public int RatingId { get; set; }


                

    }
}