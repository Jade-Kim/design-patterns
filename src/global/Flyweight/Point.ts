
// Client
export class Point {
    private x: number;
    private y: number;
    private icon: PointIcon;

    constructor(x: number, y: number, icon: PointIcon){
        this.x = x;
        this.y = y;
        this.icon = icon;
    }

    public draw(): void {
        alert(`${this.x} ${this.y} ${this.icon.getType()}`)
    }
}

// Client
export class PointService {

    constructor(private iconFactory: PointIconFactory){ }

    public getPoints(): Point[] {
        let points = [];
        const point = new Point(1, 1, this.iconFactory.getPointIcon(PointType.CAFE));
        points.push(point);

        return points;
    }
}

// Flyweight
export class PointIcon {
    private type: PointType;
    private icon: PointIcon;

    constructor(type, icon){
        this.type = type;
        this.icon = icon;
        console.log(this.icon);
    }

    public getType(): PointType {
        return this.type;
    }
}

export enum PointType {
    HOSPITAL = "HOSPITAL",
    RESTAURANT = "RESTAURANT",
    CAFE = "CAFE"
}


// Flyweight Factory
export class PointIconFactory {
    //private icons: Partial<PointType & PointIcon> = {};
    private icons = {};

    public getPointIcon(type: PointType): PointIcon {
        if (!(this.icons[type as PointType])) {
            const icon = new PointIcon(type, null);
            this.icons[type as PointType] = icon as PointIcon;
        }
        
        return this.icons[type as PointType];
    }
}
