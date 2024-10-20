import { PageHolder } from "../app/abstractClasses";
import { ContactUs } from "./page/contactus.page";
import { Dashboard } from "./page/dashboard/dashboard.page";
import { OrderPage } from "./page/order.page";
import { SignIn } from "./page/signin.page";
import { SignUp } from "./page/signup.page";

export class Application extends PageHolder {
  public contactus = new ContactUs(this.page);
  public signin = new SignIn(this.page);
  public dashboard = new Dashboard(this.page);
  public signup = new SignUp(this.page);
  public orderPage = new OrderPage(this.page);
}
