namespace Core.Entities.OrderAggregate
{
    public class OrderItem : BaseEntity
    {
        public OrderItem()
        {
        }

        public OrderItem(ProductItemOrdered itemOrdered, int price)
        {
            ItemOrdered = itemOrdered;
            Price = price;
        }

        public ProductItemOrdered ItemOrdered { get; set; }
        public int Price { get; set; }
    }
}