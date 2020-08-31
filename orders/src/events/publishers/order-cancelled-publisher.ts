import { Publisher, OrderCancelledEvent, Subjects } from '@napjs/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}
