
const getTodos=createAsyncThunk("todo/getTodos", async()=>{


const res= await fetch("https://dummyjson.com/todos");
const date=res.json;
return DataTransfer.todos;

});
console.log(todos.title)


const todoSlice=createSlice({
    name:"todo",
    initialState:{
       todos:[],
    },
    reducers:{},
    extraReducers:
});

export const todoReducer=todoSlice.reducer;