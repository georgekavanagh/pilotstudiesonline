using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specifications
{
    public class CompletedOrdersSpecification : BaseSpecification<Order>
    {
        public CompletedOrdersSpecification(OrderSpecParams orderParams)
        : base(o => 
            (o.Status == Core.Entities.OrderAggregate.OrderStatus.Complete) &&
            ((string.IsNullOrEmpty(orderParams.BuyerEmail)) || o.BuyerEmail == orderParams.BuyerEmail) && 
            ((string.IsNullOrEmpty(orderParams.PaymentIntentId)) || o.PaymentIntentId == orderParams.PaymentIntentId)
        )
        {
            AddInclude(o => o.OrderItems);
            AddOrderByDescending(o => o.Id);
            ApplyPaging(orderParams.PageSize * (orderParams.PageIndex - 1), orderParams.PageSize);
            

            if (!string.IsNullOrEmpty(orderParams.Sort))
            {
                switch (orderParams.Sort)
                {
                    case "orderDateAsc":
                        AddOrderBy(o => o.OrderDate);
                        break;
                    case "orderDateDesc":
                        AddOrderByDescending(o => o.OrderDate);
                        break;
                    default:
                        AddOrderByDescending(o => o.Id);
                        break;
                }
            }
        }
    }
}