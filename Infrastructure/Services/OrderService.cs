using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IGenericRepository<Order> _orderRepo;
        private readonly IGenericRepository<Product> _productRepo;
        private readonly IBasketRepository _basketRepo;
        private readonly StoreContext _context;
        public OrderService(
            IGenericRepository<Order> orderRepo,
            IGenericRepository<Product> productRepo,
            IBasketRepository basketRepo,
            StoreContext context)
        {
            _orderRepo = orderRepo;
            _productRepo = productRepo;
            _basketRepo = basketRepo;
            _context = context;
        }

        public async Task<Order> CreateOrderAsync(string buyerEmail, string basketId)
        {
            var basket = await _basketRepo.GetBasketAsync(basketId);
            var items = new List<OrderItem>();
            foreach(var item in basket.Items)
            {
                var productItem = await _productRepo.GetByIdAsync(item.Id);
                var itemOrdered = new ProductItemOrdered(productItem.Id,productItem.Name,productItem.Image, productItem.Type);
                var orderItem = new OrderItem(itemOrdered,productItem.Price);
                items.Add(orderItem);
            }
            
            var total = items.Sum(item => item.Price);

            var order = new Order(items,buyerEmail,total);
            _context.Orders.Add(order);
            var result = await _context.SaveChangesAsync();

            if(result <= 0) return null;

            await _basketRepo.DeleteBasketAsync(basketId);

            return order;
        }

        public async Task<Order> UpdateOrderAsync(Order order)
        {
            _context.Orders.Update(order);
            var result = await _context.SaveChangesAsync();

            if(result <= 0) return null;

            return order;
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(id,buyerEmail);
            return await _orderRepo.GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(buyerEmail);
            return await _orderRepo.GetAsync(spec);
        }
    }
}