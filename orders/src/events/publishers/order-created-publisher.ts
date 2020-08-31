import { Publisher, OrderCreatedEvent, Subjects } from '@napjs/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated
}
