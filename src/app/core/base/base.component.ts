import { Subscription } from 'rxjs';

export class BaseComponent {
  private subscriptions: Subscription[] = [];

  public images: string;
  public icons: string;

  protected addSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  protected clearSubscriptions(): void {
    this.subscriptions.map(s => s.unsubscribe());
  }
}
