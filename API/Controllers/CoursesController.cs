
using API.DTOs;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class CoursesController : BaseApiController
    {
        private readonly IGenericRepository<Course> _courseRepo;
        private readonly IGenericRepository<CourseRating> _courseRatingRepo;
        private readonly IGenericRepository<CourseType> _courseTypeRepo;
        private readonly IMapper _mapper;

        public CoursesController(
            IGenericRepository<Course> courseRepo,
            IGenericRepository<CourseRating> courseRatingRepo,
            IGenericRepository<CourseType> courseTypeRepo,
            IMapper mapper
        )
        {
            _mapper = mapper;
            _courseRepo = courseRepo;
            _courseRatingRepo = courseRatingRepo;
            _courseTypeRepo = courseTypeRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<CourseToReturnDTO>>> GetCourses()
        {
            var spec = new CoursesWithTypesAndRatingsSpecification();
            var courses = await _courseRepo.GetAsync(spec);
            return Ok(_mapper.Map<IReadOnlyList<Course>,IReadOnlyList<CourseToReturnDTO>>(courses));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CourseToReturnDTO>> GetCourse(int id)
        {
            var spec = new CoursesWithTypesAndRatingsSpecification(id);

            var course = await _courseRepo.GetEntityWithSpec(spec);

            return _mapper.Map<Course, CourseToReturnDTO>(course);
        }

        [HttpGet("types")]
        public async Task<ActionResult<CourseType>> GetCourseTypes()
        {
            return Ok(await _courseTypeRepo.GetAllAsync());
        }

        [HttpGet("ratings")]
        public async Task<ActionResult<CourseRating>> GetCourseRatings()
        {
            return Ok(await _courseRatingRepo.GetAllAsync());
        }
    }
}