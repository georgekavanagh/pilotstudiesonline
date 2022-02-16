using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class CourseRepository : ICourseRepository
    {
        private readonly StoreContext _context;
        public CourseRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<Course> GetCourseByIdAsync(int id)
        {
            return await _context.Courses
                .Include(p => p.Type)
                .Include(p => p.Rating)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<IReadOnlyList<Course>> GetCoursesAsync()
        {
            return await _context.Courses
                .Include(p => p.Type)
                .Include(p => p.Rating)
                .ToListAsync();
        }

        public async Task<IReadOnlyList<CourseRating>> GetCourseRatingssAsync()
        {
            return await _context.CourseRatings.ToListAsync();
        }

        public async Task<IReadOnlyList<CourseType>> GetCourseTypesAsync()
        {
            return await _context.CourseTypes.ToListAsync();
        }
    }
}