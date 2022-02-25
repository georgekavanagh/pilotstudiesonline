using Microsoft.AspNetCore.Identity;

namespace Core.Entities.Identity
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string CreatedDate { get; set; }
        public string Mobile { get; set; }
        public string DOB { get; set; }
        public string Gender { get; set; }
        public string Role { get; set; }
    }
}