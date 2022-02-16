
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseRepository _repo;
        public CoursesController(ICourseRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<List<Course>>> GetCourses()
        {
            return Ok(await _repo.GetCoursesAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Course>> GetCourse(int id)
        {
            return await _repo.GetCourseByIdAsync(id);
        }

        [HttpGet("types")]
        public async Task<ActionResult<CourseType>> GetCourseTypes()
        {
            return Ok(await _repo.GetCourseTypesAsync());
        }

        [HttpGet("ratings")]
        public async Task<ActionResult<CourseRating>> GetCourseRatings()
        {
            return Ok(await _repo.GetCourseRatingssAsync());
        }
    }
}