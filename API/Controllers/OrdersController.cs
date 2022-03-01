using System.Security.Claims;
using API.DTOs;
using API.Errors;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class OrdersController : BaseApiController
    {
        private readonly IOrderService _orderService;
        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(OrderDto orderDto)
        {
            var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            var order = await _orderService.CreateOrderAsync(email,orderDto.BasketId);
            if(order == null){
                return BadRequest(new ApiResponse(400, "Problem creating order"));
            }
            return Ok(order);
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Order>>> GetOrdersForUser()
        {
            var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var orders = await _orderService.GetOrdersForUserAsync(email);
            
            return Ok(orders);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrderByIdForUser(int id)
        {
            var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var order = await _orderService.GetOrderByIdAsync(id,email);
            if(order == null){
                return NotFound(new ApiResponse(404, "No orders for the specified user"));
            }
            return Ok(order);
        }

        [HttpPut("cancel")]
        public async Task<ActionResult<Order>> CancelOrder(OrderIdDto orderIdDto)
        {
            var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var order = await _orderService.GetOrderByIdAsync(orderIdDto.Id,email);
            if(order == null){
                return BadRequest(new ApiResponse(400, "Problem cancelling order"));
            }
            order.Status = Core.Entities.OrderAggregate.OrderStatus.Cancelled;
            var cancelledOrder = await _orderService.UpdateOrderAsync(order);
            return Ok(order);
        }


        [HttpPut("payment-recieved")]
        public async Task<ActionResult<Order>> SetOrderToPaymentReceived(OrderIdDto orderIdDto)
        {
            var email = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var order = await _orderService.GetOrderByIdAsync(orderIdDto.Id,email);
            if(order == null){
                return BadRequest(new ApiResponse(400, "Problem cancelling order"));
            }
            order.Status = Core.Entities.OrderAggregate.OrderStatus.PaymentReceived;
            var cancelledOrder = await _orderService.UpdateOrderAsync(order);
            return Ok(order);
        }
    }
}