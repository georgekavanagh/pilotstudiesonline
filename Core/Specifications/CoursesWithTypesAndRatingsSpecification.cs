using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class CoursesWithTypesAndRatingsSpecification : BaseSpecification<Course>
    {
        public CoursesWithTypesAndRatingsSpecification()
        {
            AddInclude(x => x.Type);
            AddInclude(x => x.Rating);
        }

        public CoursesWithTypesAndRatingsSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.Type);
            AddInclude(x => x.Rating);
        }
    }
}