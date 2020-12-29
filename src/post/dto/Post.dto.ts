import {SettingsDto} from '../../users/dto/settings.dto';
import {PhotoDto} from '../../common/dto/photo.dto';

export class PostDto {
    roles: string[];
    constructor(object: any) {
        this.name = object.name;
        this.surname = object.surname;
        this.email = object.email;
        this.content = object.content;
        this.title = object.title;
        this.category = object.category;
        this.photos = {
            profilePic : new PhotoDto(object.photos.profilePic),
            gallery: [],
        };
        if (object.photos && object.photos.gallery) {
            object.photos.gallery.forEach(photo => {
                this.photos.gallery.push(new PhotoDto(photo));
            });
        }
    }
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly content: string;
    readonly title: string;
    readonly category: string;
    settings: SettingsDto;
    photos: {
        profilePic: PhotoDto;
        gallery: PhotoDto[];
    };
}
