import { Comment } from './comment';
import { StoryType } from './story-type.type';

export class Story {
    id: number;
    title: string;
    points: number;
    user: string;
    time: number;
    time_ago: number;
    type: StoryType;
    url: string;
    domain: string;
    comments: Comment[];
    comments_count: number;
    poll: any;
    deleted: boolean;
    dead: boolean;
}
