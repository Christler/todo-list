export default class Todo {
    
    constructor(name){
        this.name = name
        this.complete = false
        this.dueDate = ''
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name
    }

    getCompleteStatus(){
        return this.complete
    }

    setCompleteStatus(){
        if(this.complete){
            this.complete = false
        }else{
            this.complete = true
        }
    }

    getDueDate(){
        return this.dueDate
    }

    setDueDate(dueDate){
        this.dueDate = dueDate
    }
}