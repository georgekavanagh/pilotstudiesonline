using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Specifications;

namespace Core.Interfaces
{
    public interface IOrderService
    {
        Task<Order> CreateOrderAsync(string buyerEmail,string basketId);
        Task<Order> UpdateOrderAsync(Order order);
        Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail);

        Task<PaginationEntity<Order>> GetAllOrdersReadyForCompletionAsync(OrderSpecParams orderParams);
        Task<PaginationEntity<Order>> GetAllCompletedOrdersAsync(OrderSpecParams orderParams);
        Task<Order> GetOrderByIdAsync(int id, string buyerEmail);
        
    }
}