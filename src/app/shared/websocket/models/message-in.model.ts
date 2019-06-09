import { MotifUser } from './motif-user.model';
import { MotifSession } from './motif-session.model';

export class MessageIn<D extends MessageInData | void> {

	public static readonly NOTIFY_OPEN_CONNECTION = "[Motif] Notify Open Connection";
	public static readonly ECHO_MESSAGE = "[Motif] Echo Message";
	public static readonly NOTIFY_ERROR = "[Motif] Notify Error";
	public static readonly NOTIFY_CLOSE_CONNECTION = "[Motif] Notify Close Connection";
	public static readonly AGOT_REDUX_ACTION_LIST = "[Agot] Redux Action List";
	public static readonly BRIT_REDUX_ACTION_LIST = "[Brit] Redux Action List";

  user: MotifUser;
  type: string;
  data?: D;
} // MessageIn

export abstract class MessageInData {

} // MessageInData