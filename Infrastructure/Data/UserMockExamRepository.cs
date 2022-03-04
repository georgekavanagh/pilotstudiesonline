using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class UserMockExamRepository : IUserMockExamRepository
    {
        private readonly StoreContext _context;
        public UserMockExamRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<UserMockExam> CreateUserMockExamAsync(UserMockExam userMockExam)
        {
            _context.UserMockExams.Add(userMockExam);
            var result = await _context.SaveChangesAsync();
            if(result <= 0) return null;
            return userMockExam;
        }

        public async Task<IReadOnlyList<UserMockExam>> GetUserMockExamsAsync(string id)
        {
            return await _context.UserMockExams.Where(o => o.UserId == id).ToListAsync();
        }
    }
}