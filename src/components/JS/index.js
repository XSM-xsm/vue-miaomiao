import Vue from 'vue';
import MessageBox from './MessageBox';

export var messageBox = (function(){
   var defaults ={
        title:'',
        content:'',
        cancel:'',
        ok:'',
        handleCancel:null,
        handleOK:null
    };

    
    var MyComponent = Vue.extend(MessageBox);
    
    return function(opts){
        for(var attr in opts){
            defaults[attr] = opts[attr];
        }

        var vm = new MyComponent({
            el:document.createElement('div'),
            data:{
                title:defaults.tite,
                content:defaults.content,
                cancel:defaults.cancel,
                ok:defaults.ok,
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOK(){
                    defaults.handleOK && defaults.handleOK.call(this);
                    document.body.removeChild(vm.$el);                    
                }
            }
        });
        document.body.appendChild(vm.$el);
    }
})();