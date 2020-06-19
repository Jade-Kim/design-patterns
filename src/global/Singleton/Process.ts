export class Process {
    constructor (state){
        this.state = state
    }

    state;
}

const SingletonPattern = (()=>{
    function ProcessManager(){
        this.numProcess = 0;
    }

    let pManager;

    function createProcessManager(){
        pManager = new ProcessManager();
        return pManager;
    }

    return {
        getProcessManager:()=>{
            if(!pManager) 
                pManager = createProcessManager();

            return pManager;
        }
    }
})();

const processManager = SingletonPattern.getProcessManager();
const processManager2 = SingletonPattern.getProcessManager();

console.log(processManager === processManager2);

// Use Singleton pattern to limit the number of instances
// instances, processManager and processManager2, are the same object?


