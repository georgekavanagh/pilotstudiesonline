
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{  
    public class UserMockExamsController : BaseApiController
    {
        private readonly IUserMockExamRepository _mockExamRepo;
        private readonly IMapper _mapper;

        public UserMockExamsController(
            IUserMockExamRepository mockExamRepo
        )
        {
            _mockExamRepo = mockExamRepo;
        }

        [HttpPost]
        public async Task<ActionResult<UserMockExam>> Create(UserMockExam userMockExam)
        {
            return Ok(await _mockExamRepo.CreateUserMockExamAsync(userMockExam));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IReadOnlyList<UserMockExam>>> GetMockExams(string id)
        {
            return Ok(await _mockExamRepo.GetUserMockExamsAsync(id));
        }
    }
}