using API.DTOs;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Course, CourseToReturnDTO>()
                .ForMember(d => d.Rating, o => o.MapFrom(s => s.Rating.AvgRating))
                .ForMember(d => d.Type, o => o.MapFrom(s => s.Type.Name));
        }
    }
}