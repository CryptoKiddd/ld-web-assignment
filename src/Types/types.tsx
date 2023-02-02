export type Itodo = {
    id:number,
    task:string,
    priority:string,
    taskId:string,
    taskType:string,
    from:string
  
  }
 export type IProject = {
    id:number,
    name:string,
    sym:string,
    color:string,
    todos:Itodo[],
    pending:Itodo[]
  }
type IAssignees ={
  name:string,
  img:string

  }
  export type IObjective = {
    name:string,
    priority:string,
    status:string,
    assignees:IAssignees[],
    dueDate:string,
    checkmarks:number,
    desc:string,
    subProject:string,
    linkedProjects:string



  }
  export type IUsersData = {
    id:number,
    email:string,
    isActive:boolean,
    owner:boolean,
    name:string,
    img:string
  }