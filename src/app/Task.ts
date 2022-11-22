// creating an interface template so that 
//we can use with the database(mock task)
export interface Task{
    id? : number;
    text: string;
    day: string;
    reminder: boolean;
}