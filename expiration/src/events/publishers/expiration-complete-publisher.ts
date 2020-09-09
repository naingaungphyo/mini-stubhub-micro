import { Subjects, Publisher, ExpirationCompleteEvent } from '@napjs/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}
