using System.Text.Json;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory){
            try
            {
                if(!context.CourseRatings.Any()){
                    var courseRatingData = File.ReadAllText("../Infrastructure/Data/SeedData/course-ratings.json");
                    var courseRatings = JsonSerializer.Deserialize<List<CourseRating>>(courseRatingData);
                    foreach(var item in courseRatings){
                        context.CourseRatings.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if(!context.CourseTypes.Any()){
                    var courseTypeData = File.ReadAllText("../Infrastructure/Data/SeedData/course-types.json");
                    var courseTypes = JsonSerializer.Deserialize<List<CourseType>>(courseTypeData);
                    foreach(var item in courseTypes){
                        context.CourseTypes.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if(!context.Courses.Any()){
                    var coursesData = File.ReadAllText("../Infrastructure/Data/SeedData/courses.json");
                    var courses = JsonSerializer.Deserialize<List<Course>>(coursesData);
                    foreach(var item in courses){
                        context.Courses.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
            }catch(Exception ex){
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}