const initalState = {
    helloText: 'Hi!',
    loading: true
}

export default (state = initalState,action) =>{
    switch(action.type){
        default:
            return state;
    }
}