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
                    PhoneNumber = "+27725473665"
                };
                await userManager.CreateAsync(user,"Pa$$w0rd");
            }
        }
    }
}