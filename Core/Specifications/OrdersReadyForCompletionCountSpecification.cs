using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specifications
{
    public class OrdersReadyForCompletionCountSpecification : BaseSpecification<Order>
    {
        public OrdersReadyForCompletionCountSpecification(OrderSpecParams orderParams)
        : base(o => 
            (o.Status == OrderStatus.PaymentReceived) &&
            ((string.IsNullOrEmpty(orderParams.BuyerEmail)) || o.BuyerEmail == orderParams.BuyerEmail) && 
            ((string.IsNullOrEmpty(orderParams.PaymentIntentId)) || o.PaymentIntentId == orderParams.PaymentIntentId)
        )
        {
            
        }
    }
}