/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, Input,NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
    selector : 'ng-app',
    template : `
                <headerComponent></headerComponent>
                <div class="">
                    <img src="../assets/image/banner.png" class="banner-img d-none d-md-block" alt="banner" srcset="">
                    <img src="../assets/image/mob-banner.png" class="banner-img d-block d-md-none" alt="banner" srcset="">
                </div>
                <div class="bg-light w-100 p-md-5 pt-5" >
                    <div class="constainer-lg">
                        <div class="h1 mb-5 p-3">
                            Credit Opportunities With Good Approval Odds <sup>+</sup>
                        </div>
                        <div class="bg-white p-md-5 p-3" >
                            <div class="d-flex justify-content-between">
                                <p class="h4 my-3">Barclaycard CashForward<sup>TM</sup> World MasterCard<sup>TM</sup> </p>
                                <p class="text-right my-3 d-none d-md-block" >
                                <i  class="fa text-wh-secondary">&#xf005;</i>
                                <i  class="fa text-wh-secondary">&#xf005;</i>
                                <i  class="fa text-wh-secondary">&#xf005;</i>
                                <i class="fa text-wh-secondary">&#xf005;</i>
                                <i  class="fa text-wh-secondary">&#xf006;</i>
                                &nbsp;&nbsp;
                                    3,252 Reviews
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="d-flex justify-content-between">
                                        <div class="flex-1">
                                            <img src="../assets/image/debit-card.png" class="img-fluid" width="200" alt="" srcset="">
                                        </div>
                                        <div class="flex-1  text-center pt-3 pt-md-1">
                                            <p class="h5 d-block d-md-none " >Approval Odds<sup>+</sup></p>
                                            <p class="h5 d-none d-md-block" >Approval <br> Odds<sup>+</sup></p>
                                            
                                            <button class="wh-bg-secondary btn wh-btn-rounded  text-white px-md-5  ">Very Good</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8 mt-4 mt-md-1 ">
                                <ul>
                                    <li class="my-3" >Get a $100 cash rewards bonus after you spend $500 in purchases in the first 90 days after account opening.</li>
                                    <li class="my-3" >Earn unlimited 1.5% cash rewards on every purchase.</li>
                                    <li class="my-3" >Earn unlimited 1.5% cash rewards on every .......<a href="">show more</a>  </li>
                                </ul>  
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 mt-4">
                                   <button class="btn wh-bg-danger text-white wh-btn w-100">Apply Now</button>
                                </div>
                                <div class="col-md-8">
                                    <!-- <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur est explicabo, recusandae, ad aperiam eum tenetur saepe incidunt qui cupiditate accusantium illum. Error accusantium unde illo consequatur culpa debitis non.</p> -->
                                </div>
                            </div>
                            <hr>
                            <a href="" class="text-decoration-none" >See Details Rates & Fees</a>
                        </div>
                    </div>
                </div>
                <!-- <div>
                    <h2>Loan Details</h2>
                    <b>Monthly Payment:</b> {{monthly_payment}} <br/>
                    <b>Late Payment Fee : {{late_payment}}</b> <br/>
                </div> -->



                
                `
})
export class Test01Component {

    loan_amount:number = 1000;
    monthly_payment:number = 200;
    late_payment = 10;
}


@Component({
    selector : 'headerComponent',
    template : `<div class="wh-bg-primary w-100 pt-5" >
                    <div class="container-fluid bg-white py-3 px-5  d-flex justify-content-between" >
                        <div class="text-center border-end w-100 fw-bold" >
                            <span class="d-block d-md-none" >LINK ONE</span>
                             <span class="d-none d-md-block" >NAVIGATION LINK ONE</span>
                        </div>
                        <div class="text-center w-100 fw-bold" >
                        <span class="d-block d-md-none" >LINK TWO</span>
                        <span class="d-none d-md-block" >NAVIGATION LINK TWO</span>
                        </div>
                        <div class="text-center border-start w-100 fw-bold" >
                        <span class="d-block d-md-none" >LINK THREE</span>
                        <span class="d-none d-md-block" >NAVIGATION LINK THREE</span>
                        </div>
                    </div>
                </div>`
})
export class HeaderComponent {

}

@NgModule({
    imports : [
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component, HeaderComponent]
})
export class Test01Module {}