import { tweetDispatcher } from './dispatchers';
import { EventEmitter } from 'events';

class TweetStore extends EventEmitter {};

export var tweetStore = new TweetStore();

tweetStore.timeline = [];

tweetDispatcher.register(function (payload) {
	if (payload.actionType === 'timeline-update') {
		tweetStore.timeline = payload.timeline;
		tweetStore.emit('update');
	}
});
