namespace Core.Entities.OrderAggregate
{
    public class ProductItemOrdered
    {
        public ProductItemOrdered()
        {
        }

        public ProductItemOrdered(int productItemId, string productName, string image, string productType)
        {
            ProductItemId = productItemId;
            ProductName = productName;
            ProductType = productType;
            Image = image;
        }

        public int ProductItemId { get; set; }
        public string ProductName { get; set; }
        public string ProductType { get; set; }
        public string Image { get; set; }
    }
}