import { Document } from 'mongoose';
import { Photo } from 'common/interfaces/photo.interface';

export interface Post extends Document{
    roles: string[];
    name: string;
    surname: string;
    email: string;
    content: string;
    title: string;
    category: string;
    photos: {
        profilePic: Photo;
        gallery: Photo[];
    };
}
