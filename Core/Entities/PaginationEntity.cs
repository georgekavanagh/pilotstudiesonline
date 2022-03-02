namespace Core.Entities
{
    public class PaginationEntity<T> where T : class
    {
        public PaginationEntity(int count, IReadOnlyList<T> data)
        {
           
            Count = count;
            Data = data;
        }
        public int Count { get; set; }
        public IReadOnlyList<T> Data { get; set; }
    }
}