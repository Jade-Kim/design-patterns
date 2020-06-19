export default async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */
};




/*

3 Design Patterns

Creational : 여러가지 다른 object 를 만들 때
Structural : object 사이의 relationships
Behavioral: object 사이의 interaction 또는 communication

How to build reusable and extensible and maintainable software.



1. Interface - 능력 타이틀

A contract that specifies the capabilities that a class should provide

 레스토랑을 운영하는데 요리사가 필요하다. 요리사가 누구인지는 상관없고 요리를 할 줄 아는 능력을 가진 요리사면 된다.

요리사 - 인터페이스
Jade - 클래스
Frank - 클래스

TaxCalculator - 인터페이스
TaxCalculator2019 - 클래스
TaxCalculator2020 - 클래스 

interface TaxCalculator {
  calculateTax(): Number;
}

export class TaxCalculator2019 implements TaxCalculator {
  calculateTax() {
    return 2019;
  }

  calculateInsurance(){
    return 0;
  }
}

export class TaxCalculator2020 implements TaxCalculator {
  calculateTax() {
    return 2020;
  }
}

export class Main {
  calculator: TaxCalculator = this.getCalculator();
  
  //this.calculator.calculateTax();

  getCalculator(): TaxCalculator {
    return new TaxCalculator2019();
  }
}



2. Encapsulation - getter / setter

:클래스 외부에서 값을 조정하지 못하도록 프로퍼티는 private 으로 설정하고 클래스 내부에서 getter / setter 를 통해 값을 조정하는 방법

public class Account {
	private float balance;

	public void setBalance(float balance) {
            If (balance > 0) this.balance = balance;
}

Public float getBalance() {
  Return balance;
  }
}

Setter: setBalance()
Getter: getBalance()


클래스 외부에서 balance 값을 세팅하지 못하도록 private 으로 설정한다.
대신 setter 를 이용해서 balance 를 더하거나 빼는 등 조정할 수 있도록 한다.
Balance 잔액을 알고 싶다면 getter 를 이용하여 값을 리턴 받을 수 있다. 




3. Abstraction - private method

: Reduce complexity by hiding unnecessary details

리모콘 내부는 굉장히 복잡하지만 외부에서 보기에 간단한 버튼만 누르면 실행이 되도록 하는 것


export class MailService {
  public sendEmail(): void {
    this.connect("connect");
    this.authenticate();
    this.disconnect();
  }

  private connect(arg1: string): void {
    console.log(arg1);
  }

  private disconnect(): void {

  }

  private authenticate(): void {

  }
}

export class Main {
  constructor (){
    var mailService = new MailService();
    mailService.sendEmail();
  }
}



4. Inheritance


*/