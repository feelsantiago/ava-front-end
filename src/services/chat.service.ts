import { Subject, Subscription } from 'rxjs';

class ChatService {
	private readonly messageSubject: Subject<string>;

	constructor () {
		this.messageSubject = new Subject<string>();
	}

	subscribe (
		next?: ((value: string) => void) | undefined,
		error?: ((error: any) => void) | undefined,
		complete?: (() => void) | undefined
	): Subscription {
		return this.messageSubject.subscribe(next, error, complete);
	}

	sendMessage (message: string) {
		this.messageSubject.next(message);
	}
}

export const chatService = new ChatService();
