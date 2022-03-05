using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class UserMockExamConfiuration : IEntityTypeConfiguration<UserMockExam>
    {
        public void Configure(EntityTypeBuilder<UserMockExam> builder)
        {
            builder.Property(o => o.Id).IsRequired();
            builder.Property(o => o.Name).IsRequired().HasMaxLength(100);
            builder.Property(o => o.Image).IsRequired();
            builder.Property(o => o.Category).IsRequired();
            builder.Property(o => o.Expiry).IsRequired();
        }
    }
}