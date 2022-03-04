using Core.Entities;

namespace Core.Interfaces
{
    public interface IUserMockExamRepository
    {
        Task<UserMockExam> CreateUserMockExamAsync(UserMockExam userMockExam);
        Task<IReadOnlyList<UserMockExam>> GetUserMockExamsAsync(string id);
        
    }
}