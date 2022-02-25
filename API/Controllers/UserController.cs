using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly UserManager<AppUser> _userManager;
        public UserController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPut("update")]
        public async Task<ActionResult<UserDto>> UpdateUser(AppUser userToUpdate)
        {
            var user = new AppUser
                {
                    FirstName = userToUpdate.FirstName,
                    LastName = userToUpdate.LastName,
                    Email = userToUpdate.Email,
                    UserName = userToUpdate.Email,
                    CreatedDate = DateTime.Today.ToString(),
                    DOB = userToUpdate.DOB,
                    Mobile = userToUpdate.Mobile,
                    Gender = userToUpdate.Gender,
                    Role = userToUpdate.Role
                };
            var result = await _userManager.UpdateAsync(user);
            if (!result.Succeeded)
            {
                //Add API response
                return BadRequest();
            }
            return new UserDto
            {
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                CreatedDate = user.CreatedDate,
                DOB = user.DOB,
                Mobile = user.Mobile,
                Gender = user.Gender,
                Role = user.Role
            };
        }
    }
}