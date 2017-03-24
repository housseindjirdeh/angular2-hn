export class Comment {
    id: number;
    level: number;
    user: string;
    time: number;
    time_ago: string;
    content: string;
    deleted: boolean;
    comments: Comment[];
}
