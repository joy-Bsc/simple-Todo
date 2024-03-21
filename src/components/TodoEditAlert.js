import Swal from 'sweetalert2';
import store from '../redux/store/store';
import { EditTodo } from '../redux/state/todoSlice';

export async function TodoEditAlert(i,item){


    const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Message",
        inputValue:item,
        inputPlaceholder: "Type your message here...",
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditTodo({index:i,task:value}))
            }
        },
        showCancelButton: true
      });
      if (text) {
        Swal.fire(text);
      }
}