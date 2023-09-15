import { PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';

class TimerElement extends PolymerElement{
    static get is(){
        return 'timer-element'
    }

    static get properties(){
        return{
            hour:{
                type:String,
                value:'00',
            },
            minutes:{
                type:String,
                value:'00',
            },
            seconds:{
                type:String,
                value:'00',
            }
        }
    }

    static get template(){
        return html`
            <style>
                :host{
                    display: flex;
                    min-height:100vh;
                    justify-content: center;
                    align-items: center;
                }
                h1{
                    text-align: center;
                    display : inline-block;
                    margin-top : 5px;
                }
                .container{
                    text-align: center;
                }
                h2{
                    display : inline;
                    margin-bottom:0px;
                }
                .labels{
                    display: flex;
                    justify-content: space-around;
                }
            </style>
            <paper-card>
            <div class="card-content name">
                <div class="container labels">
                    <h2>H</h2>
                    <h2></h2>
                    <h2>M</h2>
                    <h2></h2>
                    <h2>S</h2>
                </div>
                <div class="container labels">
                    <h1 class="hour">[[hour]]</h1>
                    <h1>:</h1>
                    <h1 class="minutes">[[minutes]]</h1>
                    <h1>:</h1>
                    <h1 class="seconds">[[seconds]]</h1>
                </div>
                <paper-button raised on-tap="start">Start</paper-button>
                <paper-button raised on-tap="stop">Stop</paper-button>
                <paper-button raised on-tap="reset">Reset</paper-button>
            </div>
            </paper-card>
        `;
    }
    

    start(){
        console.log('started');
    }
    stop(){
        console.log('stoped');
    }
    reset(){
        console.log('reset');
    }

}

customElements.define(TimerElement.is,TimerElement);