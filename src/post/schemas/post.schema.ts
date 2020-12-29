import * as mongoose from 'mongoose';
import { PhotoSchema } from 'common/schemas/photo.schema';

export const PostSchema = new mongoose.Schema({
    id: String,
    date: {type: Date, default: Date.now},
    name: String,
    surname: String,
    email: String,
    content: String,
    title: String,
    category: String,
    photos: {
        profilePic: {},
        gallery: [],
    },
});
