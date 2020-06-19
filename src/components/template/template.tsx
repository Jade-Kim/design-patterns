import { Component,  h } from '@stencil/core';

import { SaveBlogPost, SaveUserInfo } from '../../global/Template/concreteClass';
import { User } from '../../global/Template/User';

@Component({
  tag: 'app-template',
  styleUrl: 'template.css',
  shadow: false
})
export class Template {

  private username: HTMLInputElement;
  private pw: HTMLInputElement;
  private blog: HTMLInputElement;

  render() {
    return (
      <div class="margin20">
        <h3>Template Method Pattern</h3>
        <h6 class="grayHint">- Abstract Class draws a blueprint of how the class will be structured. The template method will be implemented for every concrete classes and primitive operation 1 & 2 are abstract methods called hooks. The concrete sub classes will be inherited from abstract class and should implement the hooks.</h6>
        <h6 class="grayHint">- 템플릿 메소드는 클래스의 Structure, 큰 그림을 미리 그려놓고 세부 사항 Hooks 은 Sub-class 에서 실제로 실행될 수 있도록 한다. 프레임워크를 짤 때 많이 사용되는 패턴.
          <br/>
          항상 같은 내용을 실행하는 메소드와 상황에 따라(유저에 따라) 조금 다른 내용을 실행하는 메소드를 가지고 있다. 
        </h6>
        <br/>
        <input type="text" ref={el=>this.username=el} placeholder="user name" />
        <input type="text" ref={el=>this.pw=el} placeholder="password" />
        <input type="text" ref={el=>this.blog=el} placeholder="blog post content" />
        <button class="btn margin20" onClick={_=>this.saveUserInfo()}>Save User Info</button>
        <button class="btn margin20" onClick={_=>this.saveBlogPost()}>Save Blog Info</button>
        <pattern-photos uml="templateMethod-uml.png" imp="templateMethod-i.png" cl="templateMethod-1.png" cl2="templateMethod-2.png"></pattern-photos>
      </div>
    );
  }

  saveUserInfo(){
    const user = new User(this.username.value, this.pw.value);
    const task = new SaveUserInfo(user);
    task.execute();
  }

  saveBlogPost(){
    const user = new User(this.username.value, this.pw.value);
    const task = new SaveBlogPost(user, this.blog.value);
    task.execute();
  }


}
