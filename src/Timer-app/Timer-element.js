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
            },
            isRunning:{
                type:Boolean,
                value:false
            },
            isFirst:{
                type:Boolean,
                value:true
            },
            interval:{
                type:Number
            },
            isPaused:{
                type:Boolean,
                value:false
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
                
                <template is="dom-if" if="{{isFirst}}">
                    <paper-button raised on-tap="start">Start</paper-button>
                </template>

                <template is="dom-if" if="{{!isFirst}}">

                    <template is="dom-if" if="{{isPaused}}">
                        <paper-button raised on-tap="resume">Resume</paper-button>
                    </template>

                    <template is="dom-if" if="{{!isPaused}}">
                        <paper-button raised on-tap="pause">Pause</paper-button>
                    </template>

                </template>


                <paper-button raised on-tap="stop">Stop</paper-button>

                <paper-button raised on-tap="reset">Reset</paper-button>
            </div>
            </paper-card>
        `;
    }

    

    start(){
        console.log('started');
        this.isRunning = true;
        this.isPaused = false;
        this.isFirst = false;
        this.interval = setInterval(() => {
            this.stopWatch()
        }, 1000);

        //for starting from fresh when stop button is clicked
        if(!this.isFirst){
            this.seconds = "00"
            this.minutes = "00"
            this.hour = "00"
        }
    }
    resume(){
        this.interval = setInterval(() => {
            this.stopWatch()
        }, 1000);
        this.isPaused = false;
    }
    pause(){
        console.log('paused');
        this.isPaused = true;
        clearInterval(this.interval)
    }
    stop(){
        console.log('stoped');
        this.isFirst = true
        clearInterval(this.interval)
        this.isRunning = false;
    }
    reset(){
        console.log('reset');
        location.reload()
    }

    stopWatch(){

        this.seconds = (parseInt(this.seconds) + 1).toString().padStart(2,'0');
        if(this.seconds>59){
            this.seconds = "00"
            this.minutes =  (parseInt(this.minutes) + 1).toString().padStart(2,'0');
        }

        if(this.minutes>59){
            this.minutes = "00"
            this.hour =  (parseInt(this.hour) + 1).toString().padStart(2,'0');
        }
    }


}

customElements.define(TimerElement.is,TimerElement);