using Core.Entities;

namespace Core.Interfaces
{
    public interface ICourseRepository
    {
        Task<Course> GetCourseByIdAsync(int id);
        Task<IReadOnlyList<Course>> GetCoursesAsync();
        Task<IReadOnlyList<CourseType>> GetCourseTypesAsync();
        Task<IReadOnlyList<CourseRating>> GetCourseRatingssAsync();
        
    }
}