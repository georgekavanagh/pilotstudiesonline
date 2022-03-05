using Core.Entities;

namespace API.DTOs
{
    public class CompleteOrderDto
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public UserMockExam mockExam { get; set; }
       
    }
}