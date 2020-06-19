class MyEvent {
    private listeners: Array<Function> = []; // An array of functions

    public fire(data?: any){
        this.listeners.forEach(fn => { 
            data ? fn(data) : fn() 
        });
    }

    public listener(fn: Function) {
        this.listeners.push(fn);
    }
}

export const pluginConnection = new MyEvent();

export function checkConnection(){
    // ... check the connection
    const connectionStatus = "Connected!";
    pluginConnection.fire(connectionStatus);
}