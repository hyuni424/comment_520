import { useState } from "react";
import Login from "../modal/Login";
import Writ2 from "../modal/Writ2";
import "../scss/Writ.scss";

export default function Writ(){ 
    const [loginOpen, setLoginOpen]=useState(false);
    const [writeOpen, setWriteOpen]=useState(false);

    //로그인 열고 닫기
    const openModal=()=>{        
        if(window.confirm("로그인해주세요") === true) setLoginOpen(true);
    }

    // 로그인 되면 댓글창 바로 열리기
    const logincloseModal=()=>{
        setLoginOpen(false);
        setWriteOpen(true);
    }

    // 댓글창 닫기
    const writeCloseModal=()=>{
        setWriteOpen(false);
    }

    return(
        <div id="WriteWrap">
            <div id="WriteArea">
                <h3>나도 한마디!</h3>
                    <div id="WriteDesc" onClick={openModal}>
                        <p id="writeGO"><input type="text" title="댓글을 입력해주세요" placeholder="댓글을 입력해주세요"/></p>
                        <p id="writeBtn"><button>등록</button></p>
                    </div> 
                <Login open={loginOpen} close={logincloseModal}/>
                <Writ2 open2={writeOpen} close2={writeCloseModal}/>
            </div>                        
        </div>
    )
}