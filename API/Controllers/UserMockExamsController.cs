
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]    
    public class UserMockExamsController : BaseApiController
    {
        private readonly UserMockExamRepository _mockExamRepo;
        private readonly IMapper _mapper;

        public UserMockExamsController(
            UserMockExamRepository mockExamRepo
        )
        {
            _mockExamRepo = mockExamRepo;
        }

        [HttpPost]
        public async Task<ActionResult<UserMockExam>> Create(UserMockExam userMockExam)
        {
            return Ok(await _mockExamRepo.CreateUserMockExamAsync(userMockExam));
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<UserMockExam>>> GetMockExams(string id)
        {
            return Ok(await _mockExamRepo.GetUserMockExamsAsync(id));
        }
    }
}