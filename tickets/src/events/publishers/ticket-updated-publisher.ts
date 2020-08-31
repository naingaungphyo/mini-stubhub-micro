import { Publisher, Subjects, TicketUpdatedEvent } from '@napjs/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}
