//是一个生成器，用来生成一个仓库 store
/*function createStore(reducer){
    let state;//状态树对象
    let getState = () => state;//返回状态对象
    let listeners = [];
    let subscribe = (listener) => {
        listeners.push(listener);
    };
    let dispatch = (action) => {//派发action
        state = reducer(state,action);
        listeners.forEach((l=>l()));
    };

    return {
        getState,
        dispatch,
        subscribe
    }
}
let reducer = (state=0,action)=>{
    return state+1
};
let store = createStore(reducer);
document.addEventListener('click',function(){
    store.dispatch({type:'+1'})
}) ;
store.subscribe(function () {
    counter.innerHTML = store.getState();
});*/

//是一个生成器，用来生成一个仓库 store
function createStore(reducer){
    let state;//状态对象
    let getState = ()=> state;//用来返回状态对象
    let listeners = [];//存放着所有的监听函数
    //订阅状态变化事件
    let subscribe = (listener)=>{
        listeners.push(listener);
    };
    //派发action
    let dispatch = (action)=>{
        //把老状态和action传递给reducer,并返回一个新的状态对象并覆盖state
        //reducer纯函数 1.不依赖任何外部参数 2.输入一定，输出永远是一定
        state = reducer(state,action);
        listeners.forEach(listener=>listener())
    };
    return {
        getState,
        dispatch,
        subscribe
    }
}
//处理方法，传入老状态和action,返回新的状态
let reducer = (state=0,action)=>{
    return  state+1;
};
//创建一个新的仓库
let store = createStore(reducer);
//增加点击整个事件，分发action
document.addEventListener('click',function(){
    store.dispatch({type:'加1'});
});
store.subscribe(function(){
    //当状态改变的时候，在DIV里显示最新的状态
    document.querySelector('#counter').innerHTML = store.getState();
});
