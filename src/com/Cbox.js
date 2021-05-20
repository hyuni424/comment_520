import "../scss/Cbox.scss";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Writ3 from "../modal/Writ3";

export default function Writ(){
    //값 불러오기
    const coms = useFetch("http://localhost:3001/comment"); 
    
    //좋아요 싫어요
    const [like2, setLike] = useState(1);
    const [hate2, setHate] = useState(1);

    //모달    
    const [rewriteOpen, setreWriteOpen]=useState(false);

    const reloginopenModal=()=>{
        setreWriteOpen(true);
    }

    // 댓글창 닫기
    const rewriteCloseModal=()=>{
        setreWriteOpen(false);
    }

    return(
        <div>
        <ul>
        {coms.map(com=>(
            <li key={com.id}>
                <div className="cboxList">
                    <div className="listFirst">
                        <p><b>{com.userid}</b></p>
                        <p>{com.date}</p>
                        <p><button onClick={()=>{
                            fetch(`http://localhost:3001/comment/${com.id}`, {
                                method:"DELETE",
                            }).then(res=>{
                                if(res.ok){
                                    alert("삭제 완료");
                                }
                            });
                        }}>삭제</button></p>
                        <p><button onClick={reloginopenModal} comm={com} key={com.id}>수정</button></p>
                    </div>
                    <p className="listMiddle">
                        {com.content}
                    </p>
                    <div className="listLast">
                        <p>comment (0)</p>
                        <div className="lastDesc">
                            <p onClick={()=>{
                                setLike(like2+1);

                                fetch(`http://localhost:3001/comment/${com.id}`, {
                                    method: "PUT",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        ...com,
                                        like : like2,
                                    })
                                }).then(res=>{
                                    if(res.ok){
                                        alert("좋아요 완료");                                        
                                    }
                                });
                            }}>△ ({com.like})</p>
                            <p onClick={()=>{
                                setHate(hate2+1);

                                fetch(`http://localhost:3001/comment/${com.id}`, {
                                    method: "PUT",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        ...com,
                                        hate : hate2,
                                    })
                                }).then(res=>{
                                    if(res.ok){
                                        alert("싫어요 완료");                                        
                                    }
                                });
                            }}>▽ ({com.hate})</p>
                            <p>share</p>
                        </div>                
                    </div>
                </div>            
            </li>
        ))}
        </ul>  
        <Writ3 open3={rewriteOpen} close3={rewriteCloseModal}/>
        </div>    
    )
}