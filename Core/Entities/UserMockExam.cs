using Core.Entities.Identity;

namespace Core.Entities
{
    public class UserMockExam : BaseEntity
    {
        public UserMockExam()
        {
        }

        public UserMockExam(string userId,DateTimeOffset expiry, string name, string category, string image)
        {
            UserId = userId;
            Expiry = expiry;
            Name = name;
            Category = category;
            Image = image;
        }

        public string UserId { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Category { get; set; }
        public bool Activated { get; set; } = true;
        public DateTimeOffset ActivationDate { get; set; } = DateTimeOffset.Now;
        public DateTimeOffset Expiry { get; set; }
        
    }
}