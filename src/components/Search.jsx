import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";




function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
 
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input)
  };

  return (
    <FormStyle onSubmit={submitHandler}>
    <div>
    <FaSearch />
     <input onChange={(e) => setInput(e.target.value)} type="text" value={input}/></div>
    </FormStyle>
  )
}


const FormStyle = styled.form`
    margin: 0rem 2rem;
    
    div {
      width: min(550px, 100%);
      position: relative;
      margin: 0 auto;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border: none;
        border-radius: 0.5rem;
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`

export default Search