import React ,{useState}from 'react';
import {Input,Button,Card, Space} from "antd";
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/features/postSlice';
import LoadingCard from './LoadingCard';


const CreatePost = () => {
  const [values,setValues] = useState({title:"",body:""});
  const [post,loading] = useSelector(teast());
  const teast =(state)=>({...state.app})
  const [showpost,setShowPost] = useState(false);
  const {title,body}= values;
   const dispatch =useDispatch();
   const navigate = useNavigate();

   const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(createPost({values}));
    setValues({title:"",body:""})
    setShowPost(true);


   }
   const showPostVlog=()=>{
    return(
      <>
      {loading ? (<LoadingCard count={1}/>
      ):(
         <div className='site-card-border-less-wrapper'>
          <Card type ="inner" title ={post[0].title}>
          <p>user Id : {post[0].id}</p>
          <span> {post[0].body}</span>
        </Card>
       </div>
    )}
      </>
    )

   }
  return (
    <div>
      <form onClick ={handleSubmit}>
        <h1>create post </h1>
        <Input
        placeholder='Enter title '
        type="text"
        onChange={(e)=>setValues({...values,title:e.target.value})}
        value={title}
        style={{width:"400px"}}
        />
        <br/>
        <br/>
        <Input.TextArea
        placeholder='Enter body'
        type="text"
        onChange={(e)=>setValues({...values,body:e.target.value})}
        value={body}
        style={{width:"400px"}}
        size="large"

        />
        <br/>
        <Space style={{margin:10}}>
          <Button onClick={()=>navigate("/")}> Go BAck</Button>
          <Button type='primary' htmlType='submit'> submit</Button>
        </Space>

      </form>
      <br/>
      <br/>
      {showpost && <div> {showPostVlog()} </div>}
    </div>
  )
}

export default CreatePost
