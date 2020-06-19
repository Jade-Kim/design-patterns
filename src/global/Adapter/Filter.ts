export class ImageView {
    constructor(private image: Image){ 

    }

    apply(filter: ImageFilter){
        filter.apply(this.image);
    }
}

export class Image {

}

// Interface
export interface ImageFilter {
    apply(image: Image): void;
}

// Adapter - Composition
export class AdaptThirdPartyFilter implements ImageFilter {

    constructor(private thirdPartyFilter: thirdPartyFilter){

    }

    public apply(image: Image): void {
        this.thirdPartyFilter.init();
        this.thirdPartyFilter.render(image);
    }
}

// 3rd party library
export class thirdPartyFilter {
    init() {

    }

    render(image: Image){
        console.log(image);
        alert("third party filter applied to image ");
    }
}

// Adapter - Inheritance
export class thirdPartyImageFilter2 extends thirdPartyFilter implements ImageFilter {
    public apply(image: Image): void {
        this.init();
        this.render(image);
    }
}