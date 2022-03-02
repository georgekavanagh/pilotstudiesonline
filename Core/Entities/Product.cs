namespace Core.Entities
{
    public class Product : BaseEntity
    {
                public bool Activated { get; set; }
                public string Name { get; set; }
                public string Description { get; set; }
                public string Image { get; set; }
                public int ValidityPeriod { get; set; }
                public int Price { get; set; }
                public decimal Rating { get; set; }
                public int Feedback { get; set; }
                public string Category { get; set; }
                public string Type { get; set; }
    }
}