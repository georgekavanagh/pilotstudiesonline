using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager){
            if(!userManager.Users.Any()){
                var user = new AppUser{
                    FirstName = "George",
                    LastName = "Kavanagh",
                    Email = "george.kavanagh16@gmail.com",
                    UserName = "george.kavanagh16@gmail.com",
                    Mobile = null,
                    CreatedDate = "2022-02-25 19:31:00",
                    DOB = null,
                    Gender = null,
                    Role = "ADMIN"
                };
                await userManager.CreateAsync(user,"Pa$$w0rd");
            }
        }
    }
}