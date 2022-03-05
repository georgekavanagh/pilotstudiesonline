using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specifications
{
    public class CompletedOrdersCountSpecification : BaseSpecification<Order>
    {
        public CompletedOrdersCountSpecification(OrderSpecParams orderParams)
        : base(o => 
            (o.Status == OrderStatus.Complete) &&
            ((string.IsNullOrEmpty(orderParams.BuyerEmail)) || o.BuyerEmail == orderParams.BuyerEmail) && 
            ((string.IsNullOrEmpty(orderParams.PaymentIntentId)) || o.PaymentIntentId == orderParams.PaymentIntentId)
        )
        {
            
        }
    }
}