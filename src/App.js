import {useState} from 'react'
import 'remixicon/fonts/remixicon.css'
import "./App.css"
const App=()=>{

  const model ={
    staff_name : "",
    post :"",
    mob : "",
    age : "",
    address : "",

}
const [right,setRight] = useState(-360)
const [student ,setStudent] = useState([])
const [form,setForm] = useState(model)
const [editIndex,setEditIndex] =useState(null)

const opensider=()=>{

  if(right === -360){
    setRight(0)
  }else{
    setRight(-360)
  }
  setForm(model)
}

const handleInput=(e)=>{
 const input = e.target
 const value = input.value
 const key = input.name
 setForm({
  ...form,
  [key]:value
 })
}


const addstaffdata=(e)=>{
e.preventDefault()
setStudent([
  ...student,
  form
])
setForm(model)
setRight(-360)

}

const staffdelete=(index)=>{
const backup = [...student]
backup.splice(index,1)
setStudent(backup)
}

const editStudent=(index )=>{
  setRight(0)
  setForm(student[index])
  setEditIndex(index)


}
const updatestaff=(e)=>{
  e.preventDefault()
  const copyarry = [...student]
  copyarry[editIndex] = form
  setStudent(copyarry)
  setForm(model)
  setRight(-389)
}

return(

 <div>
 
  <div style={{ 
    padding:'20px'
   }}>
     <center><h1>Staff Details </h1></center>
    
<button
  onClick={()=>opensider()}
 style={{ 
  border:"none",
  background:"blue",
  color:"#fff",
  padding: 15,
  borderRadius:5,
  margin:"10px 0"
 }} >Add Staff</button>


<table className='crud_app' border={1}>
  <thead>
  <tr>
  <th>S.no</th>
  <th>Name</th>
    <th>Post</th>
    <th>Mobile</th>
    <th>Age</th>
    <th>Address</th>
    <th>Action</th>
  </tr>
  </thead>
  <tbody>


    {
      student.map((item,index)=>(


     
   <tr key={index}>
    <td>{index+1}</td>
    <td>{item.staff_name}</td>
    <td>{item.post}</td>
    <td>{item.mob}</td>
    <td>{item.age}</td>
    <td>{item.address}</td>
    <td>


    <button         
          onClick={()=>editStudent(index)}
          style={{ 
            border:"none",
            width:32,
            height:32,
            background:"#07c65d",
            color:"#fff",
            borderRadius:5,
            marginRight:12
           }}><i className="ri-edit-box-line"></i></button>


    <button 
          onClick={()=>staffdelete(index)}
           style={{ 
            border:"none",
            width:32,
            height:32,
            background:"red",
            color:"#fff",
            borderRadius:5,
           }}><i className="ri-delete-bin-line"></i></button>
    </td>


   </tr>

   
        ))

    }


   
  
  </tbody>

</table>






  </div>
  

  <div 

  style={{ 
  position:'fixed',
  top:0,
  right:right,
  width:300,
  background:'white',
  height:"100%",
  boxShadow:'0 0 40px rgba(0,0,0,0.2)',
  padding:32,
  boxSizing:'border-b0x'
   }}>
  <h1> { editIndex === null ? 'Add Staff' : 'Update Staff' }</h1>

  <button type="button"
             style={{ 
              background: '#ffff',
              border: 'none',
              padding: '8px',
              position: 'absolute',
              top: '2px',
              right:'15px'
              }}
              onClick={()=>opensider()}
              >
            <i className="ri-close-large-line"></i>
        </button>

<hr></hr>
        <form 
        onSubmit={editIndex === null? addstaffdata : updatestaff}
        >

          <input 
          required
          value={form.staff_name}
          type='text'
          onChange={handleInput}
          placeholder='Enter Your Name'
          name="staff_name"
          style={{ 
            padding:10, 
            width:'100%', 
          margin:"15px 0"  
           }}
          />

         <input 
           required
         value={form.post}
          type='text'
          onChange={handleInput}
          placeholder='Enter Your Post'
          name='post'
          style={{ 
            padding:10, 
            width:'100%', 
            margin:"15px 0"     
           }}
          />
            


            <input 
              required
            value={form.mob}
          type='number'
          onChange={handleInput}
          placeholder='Enter Your Mobile'
          name='mob'
          style={{ 
            padding:10, 
            width:'100%', 
            margin:"15px 0"     
           }}
          />

           <input 
             required
           value={form.age}
          type='number'
          onChange={handleInput}
          placeholder='Enter Your age'
          name='age'
          style={{ 
            padding:10, 
            width:'100%', 
            margin:"15px 0"     
           }}
          />
                
                
           <input 
             required
          type='text'
          value={form.address}
          onChange={handleInput}
            placeholder='Enter Your Address'
          name='address'
          style={{ 
            padding:10, 
            width:'100%', 
            margin:"15px 0"     
           }}
          />

          { editIndex === null ?
              
<button
type='submit'
 style={{ 
  border:"none",
  background:"blue",
  color:"#fff",
  padding: 15,
  borderRadius:5
 }} >Submit</button>      
 :
 <button
type='submit'
 style={{ 
  border:"none",
  background:"blue",
  color:"#fff",
  padding: 15,
  borderRadius:5
 }} >Update</button>  

}
            
            
        </form>
  
</div>

 </div>





)



}

export default App
