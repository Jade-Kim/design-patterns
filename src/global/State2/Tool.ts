export interface Tool {
    mouseDown(): string;
    mouseUp(): string;
}

// export abstract class Tool {
//     public abstract mouseDown(): void;
//     public abstract mouseUp(): void;
// }

// abstract 메소드는 정의할 때는 Implementation 이 없고, 세부 사항(child class)에 들어가서 어떤 기능을 할 지 bottom 에서 결정한다.