// Type definitions

export type FAID = string | number;

export interface Comment {
    "id": number;
    "user_name": string;
    "user_url": string;
    "user_thumb": string;
    "body_text": string;
    "body_html": string;
    "timestamp": number;
    "when": string;
}

export interface SubmissionListing {
    "id": number;
    "title": string;
    "artist": string;
    "thumb": string;
    "url": string;
}

export interface Submissions {
    "submissions": SubmissionListing[];
}

export interface SubmissionPage extends Submissions {
    "previousPage": string;
    "nextPage": string;
}

export interface Submission {
    "title": string;
    "thumb": string;
    "url": string;
    "artist": string;
    "artist_url": string;
    "artist_thumb": string;
    "body_text": string;
    "body_html": string;
    "when": string;
    "when_title": string;
    "keywords": string;
    "comments": Comment[];
}

export interface Messages {
    "self_user_name": string;
    "self_user_url": string;
    "watches": Array<{
        "id": number;
        "user_name": string;
        "user_url": string;
        "user_thumb": string;
        "when": string;
    }>;
    "comments": Array<{
        "id": number;
        "title": string;
        "url": string;
        "submission_id": number;
        "user_name": string;
        "user_url": string;
        "when": string;
    }>;
    "shouts": Array<{
        "id": number;
        "user_name": string;
        "user_url": string;
        "when": string;
    }>;
    "favorites": Array<{
        "id": number;
        "title": string;
        "url": string;
        "user_name": string;
        "user_url": string;
        "when": string;
    }>;
    "journals": Array<{
        "id": number;
        "title": string;
        "url": string;
        "user_name": string;
        "user_url": string;
        "is_stream": boolean;
        "when": string;
    }>;
}

export interface Journal {
    "title": string;
    "user_name": string;
    "user_url": string;
    "user_thumb": string;
    "body_text": string;
    "body_html": string;
    "when": string;
    "comments": Comment[];
}

export interface Notes {
    "notes": Array<{
        "id": number;
        "title": string;
        "url": string;
        "user_name": string;
        "user_url": string;
        "unread": boolean;
        "when": string;
    }>;
}

export interface Note {
    "title": string;
    "user_name": string;
    "user_url": string;
    "body_text": string;
    "body_html": string;
    "when": string;
}
